import React from 'react'
import { Label, Input } from 'reactstrap'
import { connect } from 'react-redux'
import actions from '../redux/actions'

const SideReaction = props => {

    const handleChange = e => {
        const properties = { ...props.sideReactions[props.index] }
        properties[e.target.name] = e.target.value
        props.updateSideReaction(props.index, properties)
    }

    return (
        <div className="SideReaction" style={{ padding: '1em' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1em' }}>
                
                <div className='Temperature Onset'>
                    <Label for="tempOnset">Reaction {props.number} temperature onset</Label>
                    <Input type="text" name="tempOnset" onChange={handleChange} />
                </div>

                <div className='pressureOnset'>
                    <Label for="pressureOnset">Reaction {props.number} pressure onset</Label>
                    <Input type="text" name="pressureOnset" onChange={handleChange} />
                </div>

                <div className='details'>
                    <Label for="details">Reaction {props.number} details</Label>
                    <Input type="text" name="details" onChange={handleChange} />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    sideReactions: state.operatingParams.sideReactions,
})

const mapDispatchToProps = {
    updateSideReaction: actions.operatingParams.updateSideReaction,
}

export default connect(mapStateToProps, mapDispatchToProps)(SideReaction)