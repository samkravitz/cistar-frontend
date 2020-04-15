import React from 'react'
import { Input } from 'reactstrap'

import { connect } from 'react-redux'
import actions from '../redux/actions'

const Reactant = props => {

    // when a file is uploaded, parse it
    const handleFileSelect = e => {
        e.persist()
        if (!e.target.files[0]) return

        const formData = new FormData()
        formData.set('file', e.target.files[0], e.target.files[0].name)
        props.parseReactantFile(props.index, props.temperature, formData)
    }

    const handleChange = e => {
        const properties = { ...props.reactants[props.index] }
        properties[e.target.name] = e.target.value
        props.updateReactant(props.index, properties)
    }


    const { number, index } = props
    const properties = props.reactants[index]
    return (
        <div className="Reactant" style={{ ...styles }}>
            <h4 sm="4">Reactant {number}</h4>

            <Input
                type="file"
                name="file"
                encType="multipart/form-data"
                onChange={handleFileSelect}
            />
            <Input type="text" name="productName" value={properties.productName || ''} onChange={handleChange} />
            <Input type="text" name="molWtFraction" value={properties.molWtFraction || ''} onChange={handleChange} />
            <Input type="text" name="molWt" value={properties.molWt || ''} onChange={handleChange} />
            <Input type="text" name="casNo" value={properties.casNo || ''} onChange={handleChange} />
            <br />

            <Input type="text" name="ph" value={properties.ph || ''} onChange={handleChange} />
            <Input type="text" name="boilingPt" value={properties.boilingPt || ''} onChange={handleChange} />
            <Input type="text" name="flashPt" value={properties.flashPt || ''} onChange={handleChange} />
            <Input type="text" name="upperExplosionLim" value={properties.upperExplosionLim || ''} onChange={handleChange} /> {/* upper explosion limit */}
            <Input type="text" name="lowerExplosionLim" value={properties.lowerExplosionLim || ''} onChange={handleChange} /> {/* lower explosion limit  */}
            <Input type="text" name="vapourPressure" value={properties.vapourPressure || ''} onChange={handleChange} />
            <Input type="text" name="vapourDensity" value={properties.vapourDensity || ''} onChange={handleChange} />
            <Input type="text" name="relDensity" value={properties.relDensity || ''} onChange={handleChange} />
            <Input type="text" name="autoIgnitionTemp" value={properties.autoIgnitionTemp || ''} onChange={handleChange} />
            <Input type="text" name="decompositionTemp" value={properties.decompositionTemp || ''} onChange={handleChange} />
            <Input type="text" name="viscosity" value={properties.viscosity || ''} onChange={handleChange} />
            <Input type="text" name="thermalConductivity" value={properties.viscosity || ''} onChange={handleChange} /> {/* Thermal conductivity */}
            <Input type="text" name="cp" value={properties.cp || ''} onChange={handleChange} /> {/* CP */}
        </div>
    )

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