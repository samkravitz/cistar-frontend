import { Dispatch } from 'redux'
import Types from './types'

export const setTemperature = temperature => {
    return dispatch => {
        dispatch({ type: Types.SET_TEMPERATURE, payload: temperature })
    }
}

export const setPressure = pressure => {
    return dispatch => {
        dispatch({ type: Types.SET_PRESSURE, payload: pressure })
    }
}

export const setPhysicalState = physicalState => {
    return dispatch => {
        dispatch({ type: Types.SET_PHYSICAL_STATE, payload: physicalState })
    }
}

export const setHeatOfReaction = heatOfReaction => {
    return dispatch => {
        dispatch({ type: Types.SET_HEAT_OF_REACTION, payload: heatOfReaction })
    }
}

export const setCp = cp => {
    return dispatch => {
        dispatch({ type: Types.SET_CP, payload: cp })
    }
}