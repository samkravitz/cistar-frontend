import React, { useState } from 'react'
import {
    Label,
    Input,
    Button,
    FormGroup,
    Form,
    Popover,
    PopoverBody,
} from 'reactstrap'
import { StyleSheet, css } from 'aphrodite'
import { connect } from 'react-redux'
import actions from '../redux/actions'

import TextArea from '../components/TextArea'
import SideReaction from './SideReaction'

import { save, load } from '../saveload'

const Params = props => {

    // General information
    const [nameOfResearcher, setNameOfResearcher] = useState('')
    const [projectTitle, setProjectTitle] = useState('')
    const [principalInvestigator, setPrincipalInvestigator] = useState('')
    const [labLocation, setLabLocation] = useState('')
    const [organization, setOrganization] = useState('')

    // additional information
    const [chemicalScheme, setChemicalScheme] = useState('')
    const [description, setDescription] = useState('')

    // information icon popover
    const [temperatureInfoOpen, setTemperatureInfoOpen] = useState(false)
    const [pressureInfoOpen, setPressureInfoOpen] = useState(false)
    const [stateInfoOpen, setStateInfoOpen] = useState(false)
    const [heatOfReactionInfoOpen, setHeatOfReactionInfoOpen] = useState(false)
    const [cpMixInfoOpen, setCpMixInfoOpen] = useState(false)
    const [numCompoundsInfoOpen, setNumCompoundsInfoOpen] = useState(false)

    const saveReaction = () => {
        save({
            nameOfResearcher,
            projectTitle,
            principalInvestigator,
            labLocation,
            organization,
            chemicalScheme,
            description,
            temperatureInfoOpen,
            pressureInfoOpen,
            stateInfoOpen,
            heatOfReactionInfoOpen,
            cpMixInfoOpen,
            numCompoundsInfoOpen,
        })
    }

    const loadReaction = event => {
        const reader = new FileReader()

        // hacky way to get the return value from this load callback.
        // this is gonna return the title, location from the reaction
        // and set everything else to the store
        reader.onload = (file => {
            const data = load(file)

            setNameOfResearcher(data.nameOfResearcher)
            setProjectTitle(data.projectTitle)
            setPrincipalInvestigator(data.principalInvestigator)
            setLabLocation(data.labLocation)
            setOrganization(data.organization)
            setChemicalScheme(data.chemicalScheme)
            setDescription(data.description)
        })

        reader.readAsText(event.target.files[0])
    }

    const setSideReactions = event => {
        props.setNumSideReactions(event.target.value)
    }

    const renderSideReactions = () => {
        const arr = []

        for (let i = 0; i < props.numSideReactions; i++) {
            arr.push(
                <SideReaction
                    key={i}
                    index={i}
                    number={i + 1}
                />
            )
        }

        return arr
    }

    return (
        <div className="Params" style={styles.main}>
            <div className="ParamsFlex" style={styles.flexTop}>
                <div className="TopWrapper">
                    <div className="TitleLocation" style={{ paddingBottom: '2em' }}>
                        <h4 style={{ textAlign: 'center', paddingBottom: '10px' }}>General Information</h4>
                        <div className="nameOfResearcher" style={styles.titleLocation}>

                            <h6 className='Name' style={{ paddingRight: '1em' }}>Name of the Researcher: </h6>
                            <Input type="text" name="nameOfResearcher" value={nameOfResearcher} onChange={e => setNameOfResearcher(e.target.value)} />
                        </div>
                        <div className="projectTitle" style={styles.titleLocation}>
                            <h6 style={{ paddingRight: '1em' }}>Project Title: </h6>
                            <Input type="text" name="projectTitle" value={projectTitle} onChange={e => setProjectTitle(e.target.value)} />
                        </div>
                        <div className="principalInvestigator" style={styles.titleLocation}>
                            <h6 style={{ paddingRight: '1em' }}>Principal Investigator: </h6>
                            <Input type="text" name="principalInvestigator" value={principalInvestigator} onChange={e => setPrincipalInvestigator(e.target.value)} />
                        </div>
                        <div className="labLocation" style={styles.titleLocation}>
                            <h6 style={{ paddingRight: '1em' }}>Lab Location: </h6>
                            <Input type="text" name="labLocation" value={labLocation} onChange={e => setLabLocation(e.target.value)} />
                        </div>
                        <div className="organization" style={styles.titleLocation}>
                            <h6 style={{ paddingRight: '1em' }} >Organization: </h6>
                            <Input type="text" name="organization" value={organization} onChange={e => setOrganization(e.target.value)} />
                        </div>
                        <Button className='rheact-btn' color="primary" onClick={saveReaction}>Save Reaction</Button>
                        <label className="customFileInput" style={styles.customFileInput}>
                            <Input
                                type="file"
                                name="file"
                                encType="multipart/form-data"
                                style={{ display: 'none' }}
                                onChange={loadReaction}
                            />
                                Load Reaction
                            </label>
                    </div>
                </div>

                <div className="OperatingParams">
                    <h4 style={{ textAlign: 'center' }}> Operating Parameters </h4>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="Params" style={styles.operatingParams}>
                            <h6>
                                Temperature (&deg;C)
                                    <span
                                    id='temperatureInfo'
                                    className={css(infoIconStyles.operatingParams)}
                                    onMouseOver={() => setTemperatureInfoOpen(true)}
                                    onMouseOut={() => setTemperatureInfoOpen(false)}
                                >
                                    <i className="far fa-question-circle fa-1x"></i>
                                </span>
                            </h6>
                            <Input type="text" name="temperature" onChange={e => props.setTemperature(e.target.value)} value={props.temperature} />

                            <h6
                                style={{ paddingTop: '1em' }}
                            >
                                Pressure (bar)
                                    <span
                                    id='pressureInfo'
                                    className={css(infoIconStyles.operatingParams)}
                                    onMouseOver={() => setPressureInfoOpen(true)}
                                    onMouseOut={() => setPressureInfoOpen(false)}
                                >
                                    <i className="far fa-question-circle fa-1x"></i>
                                </span>
                            </h6>
                            <Input type="text" name="pressure" onChange={e => props.setPressure(e.target.value)} value={props.pressure} />


                            <h6
                                style={{ paddingTop: '1em' }}
                            >
                                State
                                    <span
                                    id='stateInfo'
                                    className={css(infoIconStyles.operatingParams)}
                                    onMouseOver={() => setStateInfoOpen(true)}
                                    onMouseOut={() => setStateInfoOpen(false)}
                                >
                                    <i className="far fa-question-circle fa-1x"></i>
                                </span>
                            </h6>
                            <Input type="select" name="st" id="exampleSelect" onChange={e => props.setPhysicalState(e.target.value)} value={props.physicalState}>
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
                                    onMouseOver={() => setHeatOfReactionInfoOpen(true)}
                                    onMouseOut={() => setHeatOfReactionInfoOpen(false)}
                                >
                                    <i className="far fa-question-circle fa-1x"></i>
                                </span>
                            </h6>
                            <Input type="text" name="heatOfReaction" onChange={e => props.setHeatOfReaction(e.target.value)} value={props.heatOfReaction} />
                        </div>

                        <div style={{ ...styles.operatingParams, color: 'black' }}>
                            <h6>Reaction Class</h6>
                            <Input type="text" name="reactionClass" onChange={e => props.setReactionClass(e.target.value)} value={props.reactionClass} />
                            <h6 style={{ paddingTop: '1em' }}>Reaction Scale (kg)</h6>
                            <Input type="text" name="reactionScale" onChange={e => props.setReactionScale(e.target.value)} value={props.reactionScale} />
                            <h6 style={{ paddingTop: '1em' }}>Key Reactant quantity (moles)</h6>
                            <Input type="text" name="keyReactantQuantity" onChange={e => props.setKeyReactantQuantity(e.target.value)} value={props.keyReactantQuantity} />
                            <h6
                                style={{ paddingTop: '1em', color: '#c71e1e' }}
                            >
                                Cp (mix) (cal/g/&deg;C)
                                    <span
                                    id='cpMixInfo'
                                    className={css(infoIconStyles.operatingParams)}
                                    onMouseOver={() => setCpMixInfoOpen(true)}
                                    onMouseOut={() => setCpMixInfoOpen(false)}
                                >
                                    <i className="far fa-question-circle fa-1x"></i>
                                </span>
                            </h6>
                            <Input type="text" name="cp" onChange={e => props.setCp(e.target.value)} value={props.cp} />
                        </div>
                    </div>

                </div>



            </div>

            <h4 style={{ textAlign: 'center' }}>Additional Information</h4>
            <TextArea 
                    setValue={setDescription}
                    value={description}
                    label={'Paste the complete, balanced chemical reaction scheme including ALL the by-products'}
                />
            {/* <ReactionScheme /> */}
            <div className="textArea" style={styles.textArea}>
                
                {/* <Form>
                    <FormGroup>
                        <Label for="chemicalScheme">Paste the complete, balanced chemical reaction scheme including ALL the by-products</Label>
                        <Input type="textarea" name="chemicalScheme" id="chemicalScheme" onChange={this.onChange} value={this.state.chemicalScheme} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Provide a brief description of scope of the experiment highlighting key unit operations, sequences, hazards, etc.</Label>
                        <Input style={{ height: `${this.scrollHeight}px` }} type="textarea" name="description" id="description" onChange={e => {
                            //console.log('hi')
                            this.onChange(e);
                            //e.target.style.height = 'inherit';
                            //e.target.style.height = `${e.target.scrollHeight}px`; 

                        }} value={this.state.description} onKeyDown={e => {

                        }} />
                    </FormGroup>
                </Form> */}
            </div>

            {/* # of Side Reactions known*/}

            <Label for="SideReactions">Number of known side reactions</Label>
            <div className="SideReactions" style={{ display: 'flex', justifyContent: 'center' }}>
                <Input
                    type="select"
                    name="SideReactions"
                    id="SideReactions"
                    onChange={e => props.setNumSideReactions(e.target.value)}
                    value={Number(props.numSideReactions)}
                >
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </Input>
            </div>

            { renderSideReactions()}

            {/* <SideReaction num={parseInt(this.state.sideReactions)} /> */}

            <div className="ReactantsProductsDiluents" style={styles.rpd}>
                <span style={styles.rpd.element}>
                    <Label for="Reactants">
                        Reactants
                            <span
                            id='compoundInfo'
                            className={css(infoIconStyles.operatingParams)}
                            onMouseOver={e => setNumCompoundsInfoOpen(true)}
                            onMouseOut={e => setNumCompoundsInfoOpen(false)}
                        >
                            <i className="far fa-question-circle fa-1x"></i>
                        </span>
                    </Label>
                    <Input type="select" name="Reactants" id="Reactants" onChange={e => props.setNumReactants(parseInt(e.target.value))} value={props.numReactants}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </Input>
                </span>

                <span style={styles.rpd.element}>
                    <Label for="Products">Products</Label>
                    <Input type="select" name="Products" id="Products" onChange={e => props.setNumProducts(parseInt(e.target.value))} value={props.numProducts}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </Input>
                </span>

                <span style={styles.rpd.element}>
                    <Label for="Diluents">Diluents</Label>
                    <Input type="select" name="Diluents" id="Diluents" onChange={e => props.setNumDiluents(parseInt(e.target.value))} value={props.numDiluents}>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                    </Input>
                </span>
            </div>
            <span style={{ color: '#c71e1e' }}>* Inputs in red are required user inputs *</span> */}

            {/* Popovers */}
            <Popover placement="right" isOpen={temperatureInfoOpen} target="temperatureInfo">
                <PopoverBody>Enter reaction system temperature (in &deg;C)</PopoverBody>
            </Popover>

            <Popover placement="right" isOpen={pressureInfoOpen} target="pressureInfo">
                <PopoverBody> Enter reaction system pressure (in bar) </PopoverBody>
            </Popover>

            <Popover placement="right" isOpen={stateInfoOpen} target="stateInfo">
                <PopoverBody> Enter the physical state of the system (Liquid/Gas) </PopoverBody>
            </Popover>

            <Popover placement="right" isOpen={heatOfReactionInfoOpen} target="heatOfReactionInfo">
                <PopoverBody> Enter the heat of the reaction for this system (in cal/g) </PopoverBody>
            </Popover>

            <Popover placement="right" isOpen={cpMixInfoOpen} target="cpMixInfo">
                <PopoverBody> Enter the specific heat capacity of the reaction mixture (in cal/g/&deg;C) at the operating temperature. Enter a value here or input the individual weight fractions and specific heat capacities for the reaction components. </PopoverBody>
            </Popover>

            <Popover placement="right" isOpen={numCompoundsInfoOpen} target="compoundInfo">
                <PopoverBody> Enter the number of reactants, products and diluents involved in the system </PopoverBody>
            </Popover>
        </div >

    )
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
    },

    textArea: {
        display: 'flex',
        justifyContent: 'center',
    },

    nav: {
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '1em',
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
    numSideReactions: state.operatingParams.numSideReactions,

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
    setNumSideReactions: actions.operatingParams.setNumSideReactions
}

export default connect(mapStateToProps, mapDispatchToProps)(Params)