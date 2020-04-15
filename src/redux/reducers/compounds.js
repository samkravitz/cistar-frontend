// Reducer for the compounds: reactants, products, diluents
import { Types } from '../actions.types'

const initialState = {
    numReactants: 1,
    numProducts: 1,
    numDiluents: 0,

    reactants: {
        1: {

        }
    },

    products: {
        1: {

        }
    },
}

export default (state = initialState, action) => {
    switch (action.type) {
        
        case (Types.SET_NUM_REACTANTS):
            return {
                ...state,
                numReactants: action.payload,
            }

        
        default:
            return state
    }
}
