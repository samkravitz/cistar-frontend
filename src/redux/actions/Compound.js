import axios from 'axios'
import { Dispatch } from 'redux'
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