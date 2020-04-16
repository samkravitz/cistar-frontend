import axios from 'axios'
import server from '../../server'
import Types from './types'

export const setNumReactants = numReactants => {
    return dispatch => {
        dispatch({ type: Types.SET_NUM_REACTANTS, payload: numReactants })
    }
}

export const setNumProducts = numProducts => {
    return dispatch => {
        dispatch({ type: Types.SET_NUM_PRODUCTS, payload: numProducts })
    }
}

export const setNumDiluents = numDiluents => {
    return dispatch => {
        dispatch({ type: Types.SET_NUM_DILUENTS, payload: numDiluents })
    }
}

export const parseReactantFile = (index, temperature, formData) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${server}/pdf`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
                params: { temperature: temperature }
            })
    
            dispatch({ type: Types.SET_REACTANT, payload: { index: index, data: response.data } })
        } catch (error) {
            // Error 😨
            const message = error.response ? error.response.data.error : error
            dispatch({ type: Types.SET_REACTANT, payload: { index: index, data: {} } })
            alert(message)
        }
    }
}

export const parseProductFile = (index, formData) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${server}/pdf`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            })
    
            dispatch({ type: Types.SET_PRODUCT, payload: { index: index, data: response.data } })
        } catch (error) {
            // Error 😨
            const message = error.response ? error.response.data.error : error
            dispatch({ type: Types.SET_PRODUCT, payload: { index: index, data: {} } })
            alert(message)
        }
    }
}

export const parseDiluentFile = (index, formData) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${server}/pdf`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            })
    
            dispatch({ type: Types.SET_DILUENT, payload: { index: index, data: response.data } })
        } catch (error) {
            // Error 😨
            const message = error.response ? error.response.data.error : error
            dispatch({ type: Types.SET_DILUENT, payload: { index: index, data: {} } })
            alert(message)
        }
    }
}

export const updateReactant = (index, reactant) => {
    return dispatch => {
        dispatch({ type: Types.SET_REACTANT, payload: { index: index, data: reactant } })
    }
}

export const updateProduct = (index, product) => {
    return dispatch => {
        dispatch({ type: Types.SET_PRODUCT, payload: { index: index, data: product } })
    }
}

export const updateDiluent = (index, diluent) => {
    return dispatch => {
        dispatch({ type: Types.SET_DILUENT, payload: { index: index, data: diluent } })
    }
}