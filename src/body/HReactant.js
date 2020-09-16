// Hazard Number & Statement text box for a Reactant
import React from 'react'
import { Input } from 'reactstrap'

import { connect } from 'react-redux'
import actions from '../redux/actions'

const HReactant = ({ number, index, reactants, ...props}) => {
    const properties = reactants[index]

    const handleChange = ev => {
        const newProperties = {...properties}
        newProperties[ev.target.name] = ev.target.value
        props.updateReactant(index, newProperties)
    }

    return (
        <div className='HReactant'>
            <h6 style={{ textAlign: 'center' }}>Reactant {number}</h6>
            <Input type="text" name="hNumbers" value={properties.hNumbers || ''} onChange={handleChange} />
            <Input type="text" name="hStatements" value={properties.hStatements || ''} onChange={handleChange} />
        </div>
    )
}

const mapStateToProps = state => ({
    reactants: state.compound.reactants,
})

const mapDispatchToProps = {
    updateReactant: actions.compound.updateReactant,
}

export default connect(mapStateToProps, mapDispatchToProps)(HReactant)