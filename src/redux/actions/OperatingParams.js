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

export const setReactionClass = reactionClass => {
    return dispatch => {
        dispatch({ type: Types.SET_REACTION_CLASS, payload: reactionClass })
    }
}

export const setReactionScale = reactionScale => {
    return dispatch => {
        dispatch({ type: Types.SET_REACTION_SCALE, payload: reactionScale })
    }
}

export const setKeyReactantQuantity = reactantQuantity => {
    return dispatch => {
        dispatch({ type: Types.SET_KEY_REACTANT_QUANTITY, payload: reactantQuantity })
    }
}