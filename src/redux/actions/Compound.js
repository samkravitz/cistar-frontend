import axios from 'axios'
import server from '../../server'
//import { Dispatch } from 'redux'
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
        const response = await axios.post(`${server}/pdf`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
            params: { temperature: temperature }
        })

        dispatch({ type: Types.SET_REACTANT, payload: { index: index, data: response.data } })
    }
}