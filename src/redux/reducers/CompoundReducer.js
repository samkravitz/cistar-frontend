// Reducer for the compounds: reactants, products, diluents
import Types from '../actions/types'
import produce from 'immer'

// all the properties of a compound before any information is entered
const emptyCompound = {
    autoIgnitionTemp: '',
    boilingPt: '',
    casNo: '',
    cp: '',
    decompositionTemp: '',
    flashPt: '',
    hNumbers: '',
    lowerExplosionLim: '',
    molWt: '',
    molWtFraction: '',
    ph: '',
    productName: '',
    relDensity: '',
    upperExplosionLim: '',
    vapourDensity: '',
    vapourPressure: '',
    viscosity: '',
    hStatements: '',
}

const initialState = {
    numReactants: 1,
    numProducts: 1,
    numDiluents: 0,

    reactants: [{ ...emptyCompound }],
    products: [{ ...emptyCompound }],
    diluents: [],
}

export default (state = initialState, action) => produce(state, draft => {

    let diff // difference between old array size and new size
    switch (action.type) {
        case (Types.SET_NUM_REACTANTS):
            const numReactants = action.payload
            draft.numReactants = numReactants

            // update the contents of reactants array
            diff = numReactants - draft.reactants.length
            // if we are adding reactants, push on empty object
            if (diff >= 0) {
                for (let i = 0; i < diff; i++)
                    draft.reactants.push({ ...emptyCompound })
            } else { // otherwise, pop them off
                for (let i = 0; i > diff; i--)
                    draft.reactants.pop()
            }

            return


        case (Types.SET_NUM_PRODUCTS):
            const numProducts = action.payload
            draft.numProducts = numProducts

            // update the contents of products array
            diff = numProducts - draft.products.length
            // if we are adding products, push on empty object
            if (diff >= 0) {
                for (let i = 0; i < diff; i++)
                    draft.products.push({ ...emptyCompound })
            } else { // otherwise, pop them off
                for (let i = 0; i > diff; i--)
                    draft.products.pop()
            }

            return

        case (Types.SET_NUM_DILUENTS):
            const numDiluents = action.payload
            draft.numDiluents = numDiluents

            // update the contents of diluents array
            diff = numDiluents - draft.diluents.length
            // if we are adding diluents, push on empty object
            if (diff >= 0) {
                for (let i = 0; i < diff; i++)
                    draft.diluents.push({ ...emptyCompound })
            } else { // otherwise, pop them off
                for (let i = 0; i > diff; i--)
                    draft.diluents.pop()
            }

            return

        case (Types.SET_REACTANT):
            draft.reactants[action.payload.index] = action.payload.data
            return

        case (Types.SET_PRODUCT):
            draft.products[action.payload.index] = action.payload.data
            return

        case (Types.SET_DILUENT):
            draft.diluents[action.payload.index] = action.payload.data
            return

        default:
            return
    }
})
