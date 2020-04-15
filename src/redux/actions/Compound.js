import axios from 'axios'
import { Dispatch } from 'redux'
import { Action } from '../reducers/AuthReducer'
import Type from './Types'

export const setNumReactants = numReactants => {
    return async dispatch => {
        dispatch({ type: Type.SET_NUM_REACTANTS, payload: numReactants })
    }
}