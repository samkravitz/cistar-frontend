import React, { Component } from 'react'

import {
    FormGroup,
    Input,
    Jumbotron,
    Button,
    Container,
    Row
} from 'reactstrap'

class Diluent extends Component {

    constructor() {
        super()
        this.state = {
            
        }
    }

    render() {
        return (
            <div className="Diluent" style={{ ...styles }}>
                <h4 sm="4">Diluent </h4>
                
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
    display: 'grid',
    //gridTemplateRows: '100px 200px',
    //gridTemplateRows: 'repeat(23, 1fr)',
    textAlign: 'center',
    alignItems: 'center',
    //height: '100%',
    backgroundColor: '#f1f1f1'
}

export default Diluent