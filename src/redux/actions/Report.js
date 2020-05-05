import axios from 'axios'
import server from '../../server'
import Types from './types'

// cpMix will either be false or the value of cp mix in the operating params
export const calculate = operatingParams => {
    return async (dispatch, getState) => {
        // dispatch that the calculation is underway
        dispatch({ type: Types.CALCULATION_IN_PROGRESS })

        const { reactants, products, diluents } = getState().compound
        const hNums = getHNums(reactants, products, diluents)
        dispatch({ type: Types.SET_HNUMS, payload: hNums })
        try {
            const matrix = await getMatrix(hNums)
            dispatch({ type: Types.SET_MATRIX, payload: matrix })
            dispatch({ type: Types.HAZARD_MATRIX_COMPLETE })

            // calculation block
            const reactionInfo = await calculationBlock(operatingParams, reactants)
            dispatch({ type: Types.SET_REACTION_INFO, payload: reactionInfo })
            dispatch({ type: Types.CALCULATION_BLOCK_COMPLETE })

            // cameo table
            const cameoTable = await getCameoTable(reactants, products, diluents)
            dispatch({ type: Types.SET_CAMEO_TABLE, payload: cameoTable })
            dispatch({ type: Types.CAMEO_TABLE_COMPLETE })

        } catch (error) {
            // Error 😨
            const message = error.response ? error.response.data.error : error
            alert(message)
        } finally {
            // dispatch that calculations are complete and report is generated
            dispatch({ type: Types.CALCULATION_COMPLETE })
            dispatch({ type: Types.REPORT_COMPLETE })
        }
    }
}

const calculationBlock = async (operatingParams, reactants) => {
    const response = await axios.post(`${server}/calculate`, {
        operatingParams: operatingParams,
        reactants: reactants
    })

    return response.data
}

// hazard matrix
const getMatrix = async hNums => {

    const promises = Object.keys(hNums).map(async name => {
        const res = await axios.post(`${server}/graph`, Object.keys(hNums[`${name}`]))
        const data = res.data
        data['name'] = name
        return data
    })

    const matrix = await Promise.all(promises)
    return matrix
    
}

const getCameoTable = async (reactants, products, diluents) => {
    const response = await axios.post(`${server}/cameo`, {
        reactants: reactants,
        products: products,
        diluents: diluents
    })

    return response.data
}
// get an object of compundName : Array(hNum) pairs
// for the matrix component 
const getHNums = (reactants, products, diluents) => {
    const hNums = {}
    reactants.forEach(reactant => {
        if (reactant.productName)
            hNums[reactant.productName] = reactant.hNumbers
    })

    products.forEach(product => {
        if (product.productName)
            hNums[product.productName] = product.hNumbers
    })

    diluents.forEach(diluent => {
        if (diluent.productName)
            hNums[diluent.productName] = diluent.hNumbers
    })

    return hNums
}



