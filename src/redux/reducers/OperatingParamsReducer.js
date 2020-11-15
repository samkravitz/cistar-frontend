// Reducer for the operating parameters: temperature, pressure, state, heat of reaction, and cp of mixture
import Types from '../actions/types'
import produce from 'immer'

const sideReactionInitial = {
    tempOnset: '',
    pressureOnset: '',
    details: ''
}

const initialState = {
    temperature: '0',
    pressure: '1',
    physicalState: 'Liquid',
    heatOfReaction: '',
    cp: '',
    reactionClass: '',
    reactionScale: '',
    keyReactantQuantity: '',
    numSideReactions: 0,
    sideReactions: [],
}

export default (state = initialState, action) => produce(state, draft => {

    let diff // difference between old array size and new size
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

        case (Types.SET_REACTION_CLASS):
            return {
                ...state,
                reactionClass: action.payload,
            }

        case (Types.SET_REACTION_SCALE):
            return {
                ...state,
                reactionScale: action.payload,
            }

        case (Types.SET_KEY_REACTANT_QUANTITY):
            return {
                ...state,
                keyReactantQuantity: action.payload,
            }
        
        case (Types.SET_SIDE_REACTION_NUM):
            const numSideReactions = action.payload
            draft.numSideReactions = numSideReactions

            // update the contents of diluents array
            diff = numSideReactions - draft.sideReactions.length

            // if we are adding diluents, push on empty object
            if (diff >= 0) {
                for (let i = 0; i < diff; i++)
                    draft.sideReactions.push({ ...sideReactionInitial })
            } else { // otherwise, pop them off
                for (let i = 0; i > diff; i--)
                    draft.sideReactions.pop()
            }

            return

        case (Types.SET_SIDE_REACTION):
            draft.sideReactions[action.payload.index] = action.payload.data
            return

        default:
            return state
    }
})