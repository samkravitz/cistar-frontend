import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { Popover, PopoverBody, Input } from 'reactstrap'

import { connect } from 'react-redux'
import actions from '../redux/actions'

class Reactant extends Component {

    state = {
        infoOpen: false,
    }

    // when a file is uploaded, parse it
    handleFileSelect = e => {
        if (!e.target.files[0]) return

        const formData = new FormData()
        formData.set('file', e.target.files[0], e.target.files[0].name)
        this.props.parseReactantFile(this.props.index, this.props.temperature, formData)
    }

    handleChange = e => {
        const properties = { ...this.props.reactants[this.props.index] }
        properties[e.target.name] = e.target.value
        this.props.updateReactant(this.props.index, properties)
    }

    toggleInfo = () => {
        this.setState(prevState => ({
            infoOpen: !prevState.infoOpen,
        }))
    }

    render() {
        const { number, index } = this.props
        const properties = this.props.reactants[index]
        return (
            <div className="Reactant" style={styles.main}>
                <h4 sm="4">Reactant {number}</h4>

                <div className='uploadSDSButton'>
                    <label className="customFileInput" style={styles.customFileInput}>
                        <Input
                            type="file"
                            name="file"
                            encType="multipart/form-data"
                            style={{ display: 'none' }}
                            onChange={this.handleFileSelect}
                        />
                    Upload SDS
                    </label>

                    {/* only want the info icon to show for the first reactant */}
                    {
                        number === 1 &&
                        <span
                            id='info'
                            className={css(infoIconStyles.infoIconStyles)}
                            onMouseOver={this.toggleInfo}
                            onMouseOut={this.toggleInfo}
                        >
                            <i className="far fa-question-circle fa-1x"></i>
                        </span>
                    }
                </div>

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

                {/* Popovers */}
                <Popover placement='right' isOpen={this.state.infoOpen} target='info'>
                    <PopoverBody>Upload the SDS for the component (Currently the tool is compatible with Sigma Aldrich SDS)</PopoverBody>
                </Popover>
            </div>
        )
    }
}

const styles = {
    main: {
        display: 'grid',
        gridTemplateRows: 'repeat(6, 1fr) 1fr repeat(13, minmax(auto, 1fr))',
        textAlign: 'center',
        backgroundColor: '#f1f1f1',
    },

    customFileInput: {
        color: 'white',
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        padding: '.375rem .75rem',
        border: '1px solid transparent',
        borderRadius: '.25rem',
        lineHeight: '1.5',
        fontWeight: '400',
        fontSize: '1rem',
        cursor: 'pointer',
        width: '50%',
        justifySelf: 'center',
    },
}

const infoIconStyles = StyleSheet.create({
    infoIconStyles: {
        paddingLeft: '0.5em',

        ':hover': {
            color: '#3366ff',
            cursor: 'pointer'
        },
    }
})

const mapStateToProps = state => ({
    temperature: state.operatingParams.temperature,
    reactants: state.compound.reactants,
})

const mapDispatchToProps = {
    parseReactantFile: actions.compound.parseReactantFile,
    updateReactant: actions.compound.updateReactant,
}

export default connect(mapStateToProps, mapDispatchToProps)(Reactant)