import download from 'downloadjs'
import { store } from './index'
import Types from './redux/actions/types'

// saving a reaction takes the title and location as a parameter because everything else
// is imported from the store.
export const save = (title, location) => {
    // current state
    const state = store.getState()

    const data = JSON.stringify({
        type: 'CISTAR_REACTION',
        title: title,
        location: location,
        ...state
    })
    download(new Blob([...data]), title + '.json', 'text/json')
}

// dispatches all redux store components in a reaction file
// and returns the title and location to the header component
export const load = reader => {
    try {
        const reaction = JSON.parse(reader.target.result)
        
        // correct file check
        if (reaction.type !== 'CISTAR_REACTION') throw new Error('Invalid file type')

        // compound dispatching
        const compound = reaction.compound

        store.dispatch({ type: Types.SET_NUM_REACTANTS, payload: compound.numReactants })
        store.dispatch({ type: Types.SET_NUM_PRODUCTS, payload: compound.numProducts })
        store.dispatch({ type: Types.SET_NUM_DILUENTS, payload: compound.numDiluents })

        compound.reactants.forEach((reactant, i) => {
            store.dispatch({ type: Types.SET_REACTANT, payload: { index: i, data: reactant } })
        })

        compound.products.forEach((product, i) => {
            store.dispatch({ type: Types.SET_PRODUCT, payload: { index: i, data: product } })
        })

        compound.diluents.forEach((diluent, i) => {
            store.dispatch({ type: Types.SET_DILUENT, payload: { index: i, data: diluent } })
        })

        // operating parameter dispatching
        const operatingParams = reaction.operatingParams
        store.dispatch({ type: Types.SET_TEMPERATURE, payload: operatingParams.temperature })
        store.dispatch({ type: Types.SET_PRESSURE, payload: operatingParams.pressure })
        store.dispatch({ type: Types.SET_PHYSICAL_STATE, payload: operatingParams.physicalState })
        store.dispatch({ type: Types.SET_HEAT_OF_REACTION, payload: operatingParams.heatOfReaction })
        store.dispatch({ type: Types.SET_CP, payload: operatingParams.cp })

        return { title: reaction.title, location: reaction.location }
    } catch (err) {
        alert('Unable to load reaction.')
        return { title: '', location: '' }
    }
}