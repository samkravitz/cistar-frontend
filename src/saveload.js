/*
 * This module saves all* information the user entered as a JSON file and can load those JSON files
 *
 * * - title, location, operating params, number of reactants/products/diluents, and all parsed information
 */

import download from 'downloadjs'
import SideReaction from './header/SideReaction'
import { store } from './index'
import Types from './redux/actions/types'

// saving a reaction takes everything in the Header state as a parameter because everything else
// is imported from the store.
export const save = headerState => {
    // current state
    const state = store.getState()

    const data = JSON.stringify({
        type: 'CISTAR_REACTIONv2',
        nameOfResearcher: headerState.nameOfResearcher,
        projectTitle: headerState.projectTitle,
        principalInvestigator: headerState.principalInvestigator,
        labLocation: headerState.labLocation,
        organization: headerState.organization,
        chemicalScheme: headerState.chemicalScheme,
        description: headerState.description,
        compound: state.compound,
        operatingParams: state.operatingParams,
    })
    
    download(new Blob([...data]), headerState.projectTitle + '.json', 'text/json')
}

// dispatches all redux store components in a reaction file
//  and returns the title and location to the header component
export const load = reader => {
    try {
        const reaction = JSON.parse(reader.target.result)
        
        // correct file check
        if (reaction.type === 'CISTAR_REACTION') throw new Error('Invalid reaction version')
        if (reaction.type !== 'CISTAR_REACTIONv2') throw new Error('Invalid file type')

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
        store.dispatch({ type: Types.SET_REACTION_CLASS, payload: operatingParams.reactionClass })
        store.dispatch({ type: Types.SET_REACTION_SCALE, payload: operatingParams.reactionScale })
        store.dispatch({ type: Types.SET_KEY_REACTANT_QUANTITY, payload: operatingParams.keyReactantQuantity })

        // side reaction dispatching
        if (operatingParams.sideReactions) {
            store.dispatch({ type: Types.SET_SIDE_REACTION_NUM, payload: operatingParams.sideReactions.length })
            operatingParams.sideReactions.forEach((sideReaction, i) => {
                store.dispatch({ type: Types.SET_SIDE_REACTION, payload: { index: i, data: sideReaction } })
            })
        }
        
        return { 
            nameOfResearcher: reaction.nameOfResearcher,
            projectTitle: reaction.projectTitle,
            principalInvestigator: reaction.principalInvestigator,
            labLocation: reaction.labLocation,
            organization: reaction.organization,
            chemicalScheme: reaction.chemicalScheme,
            description: reaction.description,
        }

    } catch (err) {
        alert('Unable to load reaction.')
        return {
            nameOfResearcher: '',
            projectTitle: '',
            principalInvestigator: '',
            labLocation: '',
            organization: '',
            chemicalScheme: '',
            description: ''
        }
    }
}