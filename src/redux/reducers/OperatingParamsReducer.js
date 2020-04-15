// Reducer for the operating parameters: temperature, pressure, state, heat of reaction, and cp of mixture
import Types from '../actions/types'

const initialState = {
    temperature: '0',
    pressure: '1',
    physicalState: 'Liquid',
    heatOfReaction: '',
    cp: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case (Types.SET_TEMPERATURE):
            return {
                ...state,
                temperature: action.payload,
            }

        case (Types.SET_PRESSURE):
            return {
                ...state,
                pressure: action.payload,
            }

        case (Types.SET_PHYSICAL_STATE):
            return {
                ...state,
                physicalState: action.payload,
            }

        case (Types.SET_HEAT_OF_REACTION):
            return {
                ...state,
                heatOfReaction: action.payload,
            }

        case (Types.SET_CP):
            return {
                ...state,
                cp: action.payload,
            }


        default:
            return state
    }
}
