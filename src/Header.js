import React, { Component } from 'react'
import { Label, Input, Button } from 'reactstrap';

class Header extends Component {

    constructor() {
        super()
        this.state = {
            numReactants: 1,
            numProducts: 1,
            numDiluents: 0,
            operatingParams: {
                temperature: '0',
                pressure: '',
                heatOfReaction: '',
            },
        }
    }

    handleChange = e => {
        const { operatingParams } = this.state
        operatingParams[e.target.name] = e.target.value
        this.setState({ operatingParams })
    }

    handleChangeR = event => {
        const numReactants = parseInt(event.target.value, 10)
        this.setState({ numReactants })
        this.props.changeNumReactants(numReactants)
    }

    handleChangeP = event => {
        const numProducts = parseInt(event.target.value)
        this.setState({ numProducts })
        this.props.changeNumProducts(numProducts)
    }

    handleChangeD = event => {
        const numDiluents = parseInt(event.target.value)
        this.setState({ numDiluents })
        this.props.changeNumDiluents(numDiluents)
    }

    render() {
        const { temperature, pressure, heatOfReaction } = this.state.operatingParams

        return (
            <div className="Header" style={styles.main}>
                <div className="HeaderFlex" style={styles.flexTop}>
                    <div className="TopWrapper">
                        <h1 style={{ paddingBottom: '.5em' }}>CISTAR Web Tool</h1>
                        <div className="TitleLocation" style={{ paddingLeft: '1em' }}>
                            <div className="Title" style={styles.titleLocation}>
                                <h6 style={{ paddingRight: '1em' }}>Title: </h6>
                                <Input type="text" name="title" />
                            </div>
                            <div className="Location" style={styles.titleLocation}>
                                <h6 style={{ paddingRight: '1em' }} >Location: </h6>
                                <Input type="text" name="title" />
                            </div>
                            <Button color="primary" onClick={this.props.calculate}>Calculate</Button>
                        </div>
                    </div>

                    <div className="OperatingParams">
                        <h4>Operating Parameters: </h4>
                        <div className="Params" style={styles.operatingParams}>
                            <h6>Temperature (&deg;C)</h6>
                            <Input type="text" name="temperature" id="temperature" value={temperature} onChange={this.handleChange}/>
                            <h6 style={{ paddingTop: '1em' }}>Pressure (bar)</h6>
                            <Input type="text" name="pressure" id="pressure" value={pressure} onChange={this.handleChange}/>
                            <h6 style={{ paddingTop: '1em' }}>State</h6>
                            <Input type="select" name="st" id="exampleSelect" >
                                <option>Liquid</option>
                                <option>Gas</option>
                            </Input>
                            <h6 style={{ paddingTop: '1em' }}>Heat of Reaction (cal / g)</h6>
                            <Input type="text" name="heatOfReaction" id="heatOfReaction" value={heatOfReaction} onChange={this.handleChange}/>
                        </div>
                    </div>
                </div>
                <div className="ReactantsProductsDiluents" style={styles.rpd}>
                    <span style={styles.rpd.element}>
                        <Label for="Reactants">Reactants</Label>
                        <Input type="select" name="Reactants" id="Reactants" value={this.state.numReactants} onChange={this.handleChangeR}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </Input>
                    </span>
                    
                    <span style={styles.rpd.element}>
                        <Label for="Products">Products</Label>
                        <Input type="select" name="Products" id="Products" value={this.state.numProducts} onChange={this.handleChangeP}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </Input>
                    </span>
                        
                    <span style={styles.rpd.element}>
                        <Label for="Diluents">Diluents</Label>
                        <Input type="select" name="Diluents" id="Diluents" value={this.state.numDiluents} onChange={this.handleChangeD}>
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                        </Input>
                    </span>
                </div>
                <span style={{ color: '#c71e1e' }}>* Inputs in red are required user inputs *</span>
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
        justifyContent: 'space-between',
    },

    flexBottom: {

    },

    titleLocation: {
        display: 'flex',
        alignItems: 'center',
        paddingBottom: '1em'
    },

    operatingParams: {
        color: '#c71e1e',
        padding: '1em'
    },

    rpd: {
        display: 'flex',
        justifyContent: 'space-evenly',
        element: {
            width: '33%',
            padding: '1em'
        },
    }
    
}

export default Header