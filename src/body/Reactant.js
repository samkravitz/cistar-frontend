import React, { Component } from 'react'
import { Input } from 'reactstrap'

import { connect } from 'react-redux'
import actions from '../redux/actions'

class Reactant extends Component {

    constructor() {
        super()
        this.state = {
            properties: {},
            molWtFraction: '',
        }
    }

    // when a file is uploaded, parse it
    handleFileSelect = e => {
        e.persist()
        if (!e.target.files[0]) return

        const formData = new FormData()
        formData.set('file', e.target.files[0], e.target.files[0].name)
        this.props.parseReactantFile(this.props.number - 1, this.props.temperature, formData)
    }

    handleChange = e => {
        const properties = {...this.props.reactants[this.props.number - 1]}
        properties[e.target.name] = e.target.value
        this.props.updateReactant(this.props.number - 1, properties)
    }

    render() {
        const { number } = this.props
        const properties = this.props.reactants[number - 1]
        return (
            <div className="Reactant" style={{ ...styles }}>
                <h4 sm="4">Reactant {number}</h4>

                <Input
                    type="file"
                    name="file"
                    encType="multipart/form-data"
                    onChange={this.handleFileSelect}
                />
                <Input type="text" name="productName" value={properties.productName || ''} onChange={this.handleChange} />
                <Input type="text" name="molWtFraction" value={properties.molWtFraction || ''} onChange={this.handleChange} />
                <Input type="text" name="molWt" value={properties.molWt || ''} onChange={this.handleChange} />
                <Input type="text" name="casNo" value={properties.casNo || ''} onChange={this.handleChange} />
                <br />

                <Input type="text" name="ph" value={properties.ph || ''} onChange={this.handleChange} />
                <Input type="text" name="boilingPt" value={properties.boilingPt || ''} onChange={this.handleChange} />
                <Input type="text" name="flashPt" value={properties.flashPt || ''} onChange={this.handleChange} />
                <Input type="text" name="upperExplosionLim" value={properties.upperExplosionLim || ''} onChange={this.handleChange} /> {/* upper explosion limit */}
                <Input type="text" name="lowerExplosionLim" value={properties.lowerExplosionLim || ''} onChange={this.handleChange} /> {/* lower explosion limit  */}
                <Input type="text" name="vapourPressure" value={properties.vapourPressure || ''} onChange={this.handleChange} />
                <Input type="text" name="vapourDensity" value={properties.vapourDensity || ''} onChange={this.handleChange} />
                <Input type="text" name="relDensity" value={properties.relDensity || ''} onChange={this.handleChange} />
                <Input type="text" name="autoIgnitionTemp" value={properties.autoIgnitionTemp || ''} onChange={this.handleChange} />
                <Input type="text" name="decompositionTemp" value={properties.decompositionTemp || ''} onChange={this.handleChange} />
                <Input type="text" name="viscosity" value={properties.viscosity || ''} onChange={this.handleChange} />
                <Input type="text" name="thermalConductivity" value={properties.viscosity || ''} onChange={this.handleChange} /> {/* Thermal conductivity */}
                <Input type="text" name="cp" value={properties.cp || ''} onChange={this.handleChange} /> {/* CP */}
            </div>
        )
    }
}

const styles = {
    display: 'grid',
    gridTemplateRows: 'repeat(6, 1fr) 1fr repeat(13, minmax(auto, 1fr))',
    textAlign: 'center',
    alignItems: 'start',
    backgroundColor: '#f1f1f1'
}

const mapStateToProps = state => ({
    temperature: state.operatingParams.temperature,
    reactants: state.compound.reactants,
})

const mapDispatchToProps = {
    parseReactantFile: actions.compound.parseReactantFile,
    updateReactant: actions.compound.updateReactant,
}

export default connect(mapStateToProps, mapDispatchToProps)(Reactant)