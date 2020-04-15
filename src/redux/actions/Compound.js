import axios from 'axios'
import { Dispatch } from 'redux'
import Types from './types'

export const setNumReactants = numReactants => {
    return dispatch => {
        dispatch({ type: Types.SET_NUM_REACTANTS, payload: numReactants })
    }
}