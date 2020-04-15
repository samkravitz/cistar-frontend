// Reducer for the compounds: reactants, products, diluents
import Types from '../actions/types'

const initialState = {
    numReactants: 1,
    numProducts: 1,
    numDiluents: 0,

    reactants: [{}],
    products: [{}],
    diluents: [],
}

export default (state = initialState, action) => {
    let diff // difference between old array size and new size
    switch (action.type) {
        case (Types.SET_NUM_REACTANTS):
            const numReactants = action.payload
            const { reactants } = state

            // update the contents of reactants array
            diff = numReactants - state.reactants.length
            // if we are adding reactants, push on empty object
            if (diff >= 0) {
                for (let i = 0; i < diff; i++)
                    reactants.push({})
            } else { // otherwise, pop them off
                for (let i = 0; i > diff; i--)
                    reactants.pop()
            }

            return {
                ...state,
                reactants,
                numReactants,
            }

        case (Types.SET_NUM_PRODUCTS):
            const numProducts = action.payload
            const { products } = state

            // update the contents of products array
            diff = numProducts - state.products.length
            // if we are adding products, push on empty object
            if (diff >= 0) {
                for (let i = 0; i < diff; i++)
                    products.push({})
            } else { // otherwise, pop them off
                for (let i = 0; i > diff; i--)
                    products.pop()
            }

            return {
                ...state,
                products,
                numProducts,
            }

        case (Types.SET_NUM_DILUENTS):
            const numDiluents = action.payload
            const { diluents } = state

            // update the contents of diluents array
            diff = numDiluents - state.diluents.length
            // if we are adding diluents, push on empty object
            if (diff >= 0) {
                for (let i = 0; i < diff; i++)
                    diluents.push({})
            } else { // otherwise, pop them off
                for (let i = 0; i > diff; i--)
                    diluents.pop()
            }

            return {
                ...state,
                diluents,
                numDiluents,
            }

        default:
            return state
    }
}
