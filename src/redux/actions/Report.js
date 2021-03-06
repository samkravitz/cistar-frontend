import axios from 'axios'
import server from '../../server'
import Types from './types'

// cpMix will either be false or the value of cp mix in the operating params
export const calculate = operatingParams => {
    return async (dispatch, getState) => {
        // dispatch that the calculation is underway
        dispatch({ type: Types.CALCULATION_IN_PROGRESS })
        dispatch({ type: Types.OPEN_MODAL })

        const { reactants, products, diluents } = getState().compound
        const hNums = getHNums(reactants, products, diluents)
        dispatch({ type: Types.SET_HNUMS, payload: hNums })

        // cameo table
        getCameoTable(reactants, products, diluents)
            .then(response => {
                //const cameoTable = { html_element: '', errors: []}
                dispatch({ type: Types.SET_CAMEO_TABLE, payload: response.html_element })
                dispatch({ type: Types.SET_CAMEO_ERRORS, payload: response.errors })
            })
            .catch(error => {
                const message = error.response ? error.response.data.error : error
                dispatch({ type: Types.SET_MATRIX_ERRORS, payload: message })
            })
            .finally(() => {
                //dispatch that calculations are complete and report is generated
                dispatch({ type: Types.CALCULATION_COMPLETE })
                dispatch({ type: Types.REPORT_COMPLETE })
                dispatch({ type: Types.CAMEO_TABLE_COMPLETE })
            })

        // matrix
        try {
            const matrix = await getMatrix(hNums)
            dispatch({ type: Types.SET_MATRIX, payload: matrix })
        } catch (error) {
            // Error 😨
            const message = error.response ? error.response.data.error : error
            dispatch({ type: Types.SET_MATRIX_ERRORS, payload: message })
        } finally {
            dispatch({ type: Types.HAZARD_MATRIX_COMPLETE })
        }

        // calculation block
        try {
            const reactionInfo = await calculationBlock(operatingParams, reactants, products)
            dispatch({ type: Types.SET_REACTION_INFO, payload: reactionInfo })
        } catch (error) {
            const message = error.response ? error.response.data.error : error
            dispatch({ type: Types.SET_CALCULATION_ERRORS, payload: message })
        } finally {
            dispatch({ type: Types.CALCULATION_BLOCK_COMPLETE })
        }
    }
}

const calculationBlock = async (operatingParams, reactants, products) => {
    const response = await axios.post(`${server}/calculate`, {
        operatingParams: operatingParams,
        reactants: reactants,
        products: products
    })

    return response.data
}

// hazard matrix
const getMatrix = async hNums => {

    const promises = Object.keys(hNums).map(async name => {
        const res = await axios.post(`${server}/graph`, hNums[name]['hNumbers'], {
            headers: { 'Content-Type': 'text/plain' },
        })
        const data = res.data
        data['name'] = name
        return data
    })

    return await Promise.all(promises)
}

const getCameoTable = async (reactants, products, diluents) => {
    // strip irrelevant data to reduce amount sent to server
    const reactantsStripped = reactants.map(reactant => {
        return {
            productName: reactant.productName,
            casNo: reactant.casNo
        }
    })

    const productsStripped = products.map(product => {
        return {
            productName: product.productName,
            casNo: product.casNo
        }
    })

    const diluentsStripped = diluents.map(diluent => {
        return {
            productName: diluent.productName,
            casNo: diluent.casNo
        }
    })

    const response = await axios.post(`${server}/cameo`, {
        reactants: reactantsStripped,
        products: productsStripped,
        diluents: diluentsStripped,
    })

    return response.data
}

/* get an object of
*    compundName : {
*       hNumbers: 'hNumbers',
*       hStatements: 'hStatements'
*    }
*  pairs for the matrix component 
*/
const getHNums = (reactants, products, diluents) => {
    const hNums = {}
    reactants.forEach(reactant => {
        if (reactant.productName)
            hNums[reactant.productName] = {
                hNumbers: reactant.hNumbers,
                hStatements: reactant.hStatements,
            }
    })

    products.forEach(product => {
        if (product.productName)
            hNums[product.productName] = {
                hNumbers: product.hNumbers,
                hStatements: product.hStatements,
            }
    })

    diluents.forEach(diluent => {
        if (diluent.productName)
            hNums[diluent.productName] = {
                hNumbers: diluent.hNumbers,
                hStatements: diluent.hStatements,
            }
    })
    return hNums
}
