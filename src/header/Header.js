import React, { Component } from 'react'
import { Label, Input, Button, FormGroup, Form, Popover, PopoverBody } from 'reactstrap'
import { StyleSheet, css } from 'aphrodite'
import { connect } from 'react-redux'
import actions from '../redux/actions'

import ReactionScheme from './ReactionScheme'

import { save, load } from '../saveload'

class Header extends Component {

    state = {
        nameOfResearcher: '',
        projectTitle: '',
        principalInvestigator: '',
        labLocation: '',
        organization: '',

        // textarea state
        chemicalScheme: '',
        description: '',

        // information icon popover
        temperatureInfoOpen: false,
        pressureInfoOpen: false,
        stateInfoOpen: false,
        heatOfReactionInfoOpen: false,
        cpMixInfoOpen: false,
        numCompoundsInfoOpen: false,
    }

    // sets the state from one of the non-operating param inputs as they change
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleChangeR = event => {
        const numReactants = parseInt(event.target.value)
        this.props.setNumReactants(numReactants)
    }

    handleChangeP = event => {
        const numProducts = parseInt(event.target.value)
        this.props.setNumProducts(numProducts)
    }

    handleChangeD = event => {
        const numDiluents = parseInt(event.target.value)
        this.props.setNumDiluents(numDiluents)
    }

    handleChangeTemperature = event => {
        this.props.setTemperature(event.target.value)
    }

    handleChangePressure = event => {
        this.props.setPressure(event.target.value)
    }

    handleChangePhysicalState = event => {
        this.props.setPhysicalState(event.target.value)
    }

    handleChangeHeatOfReaction = event => {
        this.props.setHeatOfReaction(event.target.value)
    }

    handleChangeCp = event => {
        this.props.setCp(event.target.value)
    }

    handleChangeReactionClass = event => {
        this.props.setReactionClass(event.target.value)
    }

    handleChangeReactionScale = event => {
        this.props.setReactionScale(event.target.value)
    }

    handleChangeKeyReactantQuantity = event => {
        this.props.setKeyReactantQuantity(event.target.value)
    }

    toggleTemperatureInfo = event => {
        this.setState(prevState => ({
            temperatureInfoOpen: !prevState.temperatureInfoOpen,
        }))
    }

    togglePressureInfo = event => {
        this.setState(prevState => ({
            pressureInfoOpen: !prevState.pressureInfoOpen,
        }))
    }

    toggleStateInfo = event => {
        this.setState(prevState => ({
            stateInfoOpen: !prevState.stateInfoOpen,
        }))
    }

    toggleHeatOfReactionInfo = event => {
        this.setState(prevState => ({
            heatOfReactionInfoOpen: !prevState.heatOfReactionInfoOpen,
        }))
    }

    toggleCpMixInfo = event => {
        this.setState(prevState => ({
            cpMixInfoOpen: !prevState.cpMixInfoOpen,
        }))
    }

    toggleCompoundInfo = event => {
        this.setState(prevState => ({
            compoundInfoOpen: !prevState.compoundInfoOpen,
        }))
    }

    saveReaction = () => {
        save(this.state)
    }

    loadReaction = event => {
        const reader = new FileReader()

        // hacky way to get the return value from this load callback.
        // this is gonna return the title, location from the reaction
        // and set everything else to the store
        reader.onload = (file => {
            const data = load(file)
            console.log(data)
            this.setState({
                nameOfResearcher: data.nameOfResearcher,
                projectTitle: data.projectTitle,
                principalInvestigator: data.principalInvestigator,
                labLocation: data.labLocation,
                organization: data.organization,
                chemicalScheme: data.chemicalScheme,
                description: data.description,
            })
        })

        reader.readAsText(event.target.files[0])
    }

    render() {
        return (
            <div className="Header" style={styles.main}>
                <h1 style={styles.rheact}>RHEACT</h1>
                <h3 style={styles.rheactLabel}>Reactive Hazards Evaluation Analysis Tool</h3>
                <div className="HeaderFlex" style={styles.flexTop}>
                    <div className="TopWrapper">
                        <div className="TitleLocation" style={{ padding: '4em 1em' }}>
                            <div className="nameOfResearcher" style={styles.titleLocation}>
                                <h6 style={{ paddingRight: '1em' }}>Name of the Researcher: </h6>
                                <Input type="text" name="nameOfResearcher" value={this.state.nameOfResearcher} onChange={this.onChange} />
                            </div>
                            <div className="projectTitle" style={styles.titleLocation}>
                                <h6 style={{ paddingRight: '1em' }}>Project Title: </h6>
                                <Input type="text" name="projectTitle" value={this.state.projectTitle} onChange={this.onChange} />
                            </div>
                            <div className="principalInvestigator" style={styles.titleLocation}>
                                <h6 style={{ paddingRight: '1em' }}>Principal Investigator: </h6>
                                <Input type="text" name="principalInvestigator" value={this.state.principalInvestigator} onChange={this.onChange} />
                            </div>
                            <div className="labLocation" style={styles.titleLocation}>
                                <h6 style={{ paddingRight: '1em' }}>Lab Location: </h6>
                                <Input type="text" name="labLocation" value={this.state.labLocation} onChange={this.onChange} />
                            </div>
                            <div className="organization" style={styles.titleLocation}>
                                <h6 style={{ paddingRight: '1em' }} >Organization: </h6>
                                <Input type="text" name="organization" value={this.state.organization} onChange={this.onChange} />
                            </div>
                            <Button color="primary" onClick={this.saveReaction}>Save Reaction</Button>
                            <label className="customFileInput" style={styles.customFileInput}>
                                <Input
                                    type="file"
                                    name="file"
                                    encType="multipart/form-data"
                                    style={{ display: 'none' }}
                                    onChange={this.loadReaction}
                                />
                                Load Reaction
                            </label>
                        </div>
                    </div>


                    <div className="OperatingParams">
                        <h4 style={{ textAlign: 'center' }}> Operating Parameters: </h4>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className="Params" style={styles.operatingParams}>
                                <h6>
                                    Temperature (&deg;C)
                                    <span
                                        id='temperatureInfo'
                                        className={css(infoIconStyles.operatingParams)}
                                        onMouseOver={this.toggleTemperatureInfo}
                                        onMouseOut={this.toggleTemperatureInfo}
                                    >
                                        <i className="far fa-question-circle fa-1x"></i>
                                    </span>
                                </h6>
                                <Input type="text" name="temperature" onChange={this.handleChangeTemperature} value={this.props.temperature} />


                                <h6
                                    style={{ paddingTop: '1em' }}
                                >
                                    Pressure (bar)
                                    <span
                                        id='pressureInfo'
                                        className={css(infoIconStyles.operatingParams)}
                                        onMouseOver={this.togglePressureInfo}
                                        onMouseOut={this.togglePressureInfo}
                                    >
                                        <i className="far fa-question-circle fa-1x"></i>
                                    </span>
                                </h6>
                                <Input type="text" name="pressure" onChange={this.handleChangePressure} value={this.props.pressure} />


                                <h6
                                    style={{ paddingTop: '1em' }}
                                >
                                    State
                                    <span
                                        id='stateInfo'
                                        className={css(infoIconStyles.operatingParams)}
                                        onMouseOver={this.toggleStateInfo}
                                        onMouseOut={this.toggleStateInfo}
                                    >
                                        <i className="far fa-question-circle fa-1x"></i>
                                    </span>
                                </h6>
                                <Input type="select" name="st" id="exampleSelect" onChange={this.handleChangePhysicalState} value={this.props.physicalState}>
                                    <option>Liquid</option>
                                    <option>Gas</option>
                                </Input>


                                <h6
                                    style={{ paddingTop: '1em' }}
                                >
                                    Heat of Reaction (cal / g)
                                    <span
                                        id='heatOfReactionInfo'
                                        className={css(infoIconStyles.operatingParams)}
                                        onMouseOver={this.toggleHeatOfReactionInfo}
                                        onMouseOut={this.toggleHeatOfReactionInfo}
                                    >
                                        <i className="far fa-question-circle fa-1x"></i>
                                    </span>
                                </h6>
                                <Input type="text" name="heatOfReaction" onChange={this.handleChangeHeatOfReaction} value={this.props.heatOfReaction} />
                            </div>

                            <div style={{ ...styles.operatingParams, color: 'black' }}>
                                <h6>Reaction Class</h6>
                                <Input type="text" name="reactionClass" onChange={this.handleChangeReactionClass} value={this.props.reactionClass} />
                                <h6 style={{ paddingTop: '1em' }}>Reaction Scale (kg)</h6>
                                <Input type="text" name="reactionScale" onChange={this.handleChangeReactionScale} value={this.props.reactionScale} />
                                <h6 style={{ paddingTop: '1em' }}>Key Reactant quantity (moles)</h6>
                                <Input type="text" name="keyReactantQuantity" onChange={this.handleChangeKeyReactantQuantity} value={this.props.keyReactantQuantity} />
                                <h6
                                    style={{ paddingTop: '1em', color: 'black' }}
                                >
                                    Cp (mix) (cal/g/°C)
                                    <span
                                        id='cpMixInfo'
                                        className={css(infoIconStyles.operatingParams)}
                                        onMouseOver={this.toggleCpMixInfo}
                                        onMouseOut={this.toggleCpMixInfo}
                                    >
                                        <i className="far fa-question-circle fa-1x"></i>
                                    </span>
                                </h6>
                                <Input type="text" name="cp" onChange={this.handleChangeCp} value={this.props.cp} />
                            </div>
                        </div>

                    </div>



                </div>

                {/* <ReactionScheme /> */}
                <div className="textArea" style={styles.textArea}>
                    <Form>
                        <FormGroup>
                            <Label for="chemicalScheme">Paste the complete, balanced chemical reaction scheme including ALL the by-products</Label>
                            <Input type="textarea" name="chemicalScheme" id="chemicalScheme" onChange={this.onChange} value={this.state.chemicalScheme} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="description">Provide a brief description of scope of the experiment highlighting key unit operations, sequences, hazards, etc.</Label>
                            <Input type="textarea" name="description" id="description" onChange={this.onChange} value={this.state.description} />
                        </FormGroup>
                    </Form>
                </div>

                <div className="ReactantsProductsDiluents" style={styles.rpd}>
                    <span style={styles.rpd.element}>
                        <Label for="Reactants">
                            Reactants
                            <span
                                id='compoundInfo'
                                className={css(infoIconStyles.operatingParams)}
                                onMouseOver={this.toggleCompoundInfo}
                                onMouseOut={this.toggleCompoundInfo}
                            >
                                <i className="far fa-question-circle fa-1x"></i>
                            </span>
                        </Label>
                        <Input type="select" name="Reactants" id="Reactants" onChange={this.handleChangeR} value={this.props.numReactants}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </Input>
                    </span>

                    <span style={styles.rpd.element}>
                        <Label for="Products">Products</Label>
                        <Input type="select" name="Products" id="Products" onChange={this.handleChangeP} value={this.props.numProducts}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </Input>
                    </span>

                    <span style={styles.rpd.element}>
                        <Label for="Diluents">Diluents</Label>
                        <Input type="select" name="Diluents" id="Diluents" onChange={this.handleChangeD} value={this.props.numDiluents}>
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                        </Input>
                    </span>
                </div>
                <span style={{ color: '#c71e1e' }}>* Inputs in red are required user inputs *</span>

                {/* Popovers */}
                <Popover placement="right" isOpen={this.state.temperatureInfoOpen} target="temperatureInfo">
                    <PopoverBody>Enter reaction system temperature (in &deg;C)</PopoverBody>
                </Popover>

                <Popover placement="right" isOpen={this.state.pressureInfoOpen} target="pressureInfo">
                    <PopoverBody> Enter reaction system pressure (in bar) </PopoverBody>
                </Popover>

                <Popover placement="right" isOpen={this.state.stateInfoOpen} target="stateInfo">
                    <PopoverBody> Enter the physical state of the system (Liquid/Gas) </PopoverBody>
                </Popover>

                <Popover placement="right" isOpen={this.state.heatOfReactionInfoOpen} target="heatOfReactionInfo">
                    <PopoverBody> Enter the heat of the reaction for this system (in cal/g) </PopoverBody>
                </Popover>

                <Popover placement="right" isOpen={this.state.cpMixInfoOpen} target="cpMixInfo">
                    <PopoverBody> Enter the specific heat capacity of the reaction mixture (in cal/g/&deg;C). Enter a value here or input the individual weight fractions and specific heat capacities for the reaction components. </PopoverBody>
                </Popover>

                <Popover placement="right" isOpen={this.state.compoundInfoOpen} target="compoundInfo">
                    <PopoverBody> Enter the number of reactants, products and diluents involved in the system </PopoverBody>
                </Popover>
            </div >

        )
    }
}

const styles = {
    main: {
        backgroundColor: '#f1f1f1',
        marginBottom: '2em',
        padding: '1em 3em',
    },

    flexTop: {
        display: 'flex',
        justifyContent: 'space-evenly',
        paddingTop: '2em',
    },

    titleLocation: {
        display: 'flex',
        alignItems: 'center',
        paddingBottom: '1em'
    },

    operatingParams: {
        color: '#c71e1e',
        padding: '1em',
    },

    rpd: {
        display: 'flex',
        justifyContent: 'space-evenly',
        element: {
            width: '33%',
            padding: '1em'
        },
    },

    customFileInput: {
        marginLeft: '1em',
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
    },

    rheact: {
        fontSize: '3.5rem',
        textAlign: 'center',
        paddingBottom: '0'
    },

    rheactLabel: {
        textAlign: 'center',
        fontSize: '1.25rem',
        paddingBottom: '1em',
    },

    textArea: {
        paddingTop: '5em',
        display: 'flex',
        justifyContent: 'center'
    }

}

const infoIconStyles = StyleSheet.create({
    operatingParams: {
        paddingLeft: '0.5em',

        ':hover': {
            color: '#3366ff',
            cursor: 'pointer'
        },
    },
})

const mapStateToProps = state => ({
    temperature: state.operatingParams.temperature,
    pressure: state.operatingParams.pressure,
    physicalState: state.operatingParams.physicalState,
    heatOfReaction: state.operatingParams.heatOfReaction,
    cp: state.operatingParams.cp,
    reactionClass: state.operatingParams.reactionClass,
    reactionScale: state.operatingParams.reactionScale,
    keyReactantQuantity: state.operatingParams.keyReactantQuantity,

    numReactants: state.compound.numReactants,
    numProducts: state.compound.numProducts,
    numDiluents: state.compound.numDiluents,
})

const mapDispatchToProps = {
    setNumReactants: actions.compound.setNumReactants,
    setNumProducts: actions.compound.setNumProducts,
    setNumDiluents: actions.compound.setNumDiluents,

    setTemperature: actions.operatingParams.setTemperature,
    setPressure: actions.operatingParams.setPressure,
    setPhysicalState: actions.operatingParams.setPhysicalState,
    setHeatOfReaction: actions.operatingParams.setHeatOfReaction,
    setCp: actions.operatingParams.setCp,
    setReactionScale: actions.operatingParams.setReactionScale,
    setReactionClass: actions.operatingParams.setReactionClass,
    setKeyReactantQuantity: actions.operatingParams.setKeyReactantQuantity,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)