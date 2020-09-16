// Hazard Number & Statement text box for a Diluent
import React from 'react'
import { Input } from 'reactstrap'

import { connect } from 'react-redux'
import actions from '../redux/actions'

const HDiluent = ({ number, index, diluents, ...props}) => {
    const properties = diluents[index]

    const handleChange = ev => {
        const newProperties = {...properties}
        newProperties[ev.target.name] = ev.target.value
        props.updateDiluent(index, newProperties)
    }

    return (
        <div className='HDiluent'>
            <h6 style={{ textAlign: 'center' }}>Diluent {number}</h6>
            <Input type="text" name="hNumbers" value={properties.hNumbers} onChange={handleChange} />
            <Input type="textarea" name="hStatements" style={{ height: '200px' }} value={properties.hStatements} onChange={handleChange} />
        </div>
    )
}

const mapStateToProps = state => ({
    diluents: state.compound.diluents,
})

const mapDispatchToProps = {
    updateDiluent: actions.compound.updateDiluent,
}

export default connect(mapStateToProps, mapDispatchToProps)(HDiluent)