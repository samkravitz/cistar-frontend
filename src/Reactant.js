import React, { Component } from 'react'

import {
    FormGroup,
    Input,
    Jumbotron,
    Button,
    Container,
    Row
} from 'reactstrap'

class Reactant extends Component {

    constructor() {
        super()
        this.state = {
            
        }
    }

    render() {
        const { number } = this.props
        return (
            <div className="Reactant" style={styles}>
                <h4 sm="4">Reactant {number}</h4>
                
                <Input type="file" name="file" id="exampleFile" />     
                <Input type="text" name="text" id="exampleText" />
                <Input type="text" name="text" id="exampleText" />   
                <Input type="text" name="text" id="exampleText" />
                <br/>
    
                <Input type="text" name="text" id="exampleText" />         
                <Input type="text" name="text" id="exampleText" />      
                <Input type="text" name="text" id="exampleText" />   
                <Input type="text" name="text" id="exampleText" />    
                <Input type="text" name="text" id="exampleText" />          
                <Input type="text" name="text" id="exampleText" />       
                <Input type="text" name="text" id="exampleText" />                    
                <Input type="text" name="text" id="exampleText" />                    
                <Input type="text" name="text" id="exampleText" />                 
                <Input type="text" name="text" id="exampleText" />         
                <Input type="text" name="text" id="exampleText" />         
                <Input type="text" name="text" id="exampleText" />
                <Input type="text" name="text" id="exampleText" />
                <Input type="text" name="text" id="exampleText" />
                <br/>
            
                <Input type="text" name="text" id="exampleText" />   
                <Input type="text" name="text" id="exampleText" />
            </div>
        )
    }
}

const styles = {
    display: 'flex',
    flexDirection: 'column',
    //height: '100%',
    //flexDirection: 'column',
    //textAlign: 'center',
    //marginTop: 'auto',
    //marginBottom: 'auto',
    justifyContent: 'space-evenly',
    textAlign: 'center',

    //height: '100%',
    //alignItems: 'center',
    backgroundColor: '#f1f1f1'
}

export default Reactant