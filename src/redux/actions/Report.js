import axios from 'axios'
import server from '../../server'
import Types from './types'

// cpMix will either be false or the value of cp mix in the operating params
export const calculate = operatingParams => {
    return async (dispatch, getState) => {
        const { reactants, products, diluents } = getState().compound
        const hNums = getHNums(reactants, products, diluents)
        dispatch({ type: Types.SET_HNUMS, payload: hNums })
        try {
            const promises = Object.keys(hNums).map(async name => {
                const res = await axios.post(`${server}/graph`, Object.keys(hNums[`${name}`]))
                const data = res.data
                data['name'] = name
                return data
            })

            const matrix = await Promise.all(promises)
            dispatch({ type: Types.SET_MATRIX, payload: matrix })

            // calculation block
            const response = await axios.post(`${server}/calculate`, {
                operatingParams: operatingParams,
                reactants: reactants
            })

            dispatch({ type: Types.SET_REACTION_INFO, payload: response.data })
        } catch (error) {
            // Error 😨
            const message = error.response ? error.response.data.error : error
            alert(message)
        }
    }
}

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



