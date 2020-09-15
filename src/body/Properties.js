import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, css } from 'aphrodite'
import { Popover, PopoverBody } from 'reactstrap'

class Properties extends Component {

    state = {
        initialWtFractionInfoOpen: false,
        specificHeatInfoOpen: false,
    }

    /*
     * toggles the information popover of the property with the specified name
     * ex:
     * toggleInfo('initialWtFraction') will toggle the info popover for the initialWtFraction icon
     */
    toggleInfo = name => {
        this.setState(prevState => ({
            [`${name}InfoOpen`]: !prevState[`${name}InfoOpen`],
        }))
    }

    render() {
        const { numReactants, numProducts, numDiluents } = this.props
        const numberOfElements = numReactants + numProducts + numDiluents
        return (
            <div className="Properties" style={styles.main}>

                <h2 style={{ margin: '0', padding: '0' }}>Property</h2>
                <div></div>
                <h6>Product Name</h6>
                <h6
                    style={{ color: '#c71e1e' }}
                >
                    Initial Weight Fraction
                    <span
                        id='initialWtFractionInfo'
                        className={css(infoIconStyles.infoIconStyles)}
                        onMouseOver={() => this.toggleInfo('initialWtFraction')}
                        onMouseOut={() => this.toggleInfo('initialWtFraction')}
                    >
                        <i className="far fa-question-circle fa-1x"></i>
                    </span>
                </h6>
                <h6>Mol. Weight (g/mol)</h6>
                <h6>CAS-No.</h6>

                <h5>Physical and Chemical Properties</h5>
                <h6>pH at 20°C (g/l)</h6>
                <h6>Initial boiling point (&deg;C)</h6>
                <h6>Flash point (&deg;C)</h6>
                <h6>Upper explosion limit (% V)</h6>
                <h6>Lower explosion limit (% V)</h6>
                <h6>Vapour pressure at 20&deg;C (hPa)</h6>
                <h6>Vapour density (Air = 1.0)</h6>
                <h6>Relative density at 25&deg;C (g/cm3)</h6>
                <h6>Auto ignition temperature (&deg;C)</h6>
                <h6>Decomposition temperature (&deg;C)</h6>
                <h6>Viscosity</h6>
                <h6>Thermal Conductivity - k</h6>
                <h6
                    style={{ color: '#c71e1e' }}
                >
                    Specific heat capacity - Cp (cal/g/&deg;C)
                    <span
                        id='specificHeatInfo'
                        className={css(infoIconStyles.infoIconStyles)}
                        onMouseOver={() => this.toggleInfo('specificHeat')}
                        onMouseOut={() => this.toggleInfo('specificHeat')}
                    >
                        <i className="far fa-question-circle fa-1x"></i>
                    </span>
                </h6>

                {/* Popovers */}
                <Popover placement='right' isOpen={this.state.initialWtFractionInfoOpen} target='initialWtFractionInfo'>
                    <PopoverBody>Enter the weight fraction of the individual component in the reaction mixture</PopoverBody>
                </Popover>

                <Popover placement='right' isOpen={this.state.specificHeatInfoOpen} target='specificHeatInfo'>
                    <PopoverBody>
                        Please enter the specific heat capacity of the component in cal/g/&deg;C.
                        Kindly ignore if the value for Cp, mix has already been entered before.
                    </PopoverBody>
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
        marginTop: '0.5em',
        alignItems: 'start'
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
    numReactants: state.compound.numReactants,
    numProducts: state.compound.numProducts,
    numDiluents: state.compound.numDiluents,
})

export default connect(mapStateToProps)(Properties)