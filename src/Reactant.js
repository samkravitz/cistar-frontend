import React, { Component } from 'react'
import {
    FormGroup,
    Input,
    Jumbotron,
    Button,
    Container,
    Row
} from 'reactstrap'
import axios from 'axios'

class Reactant extends Component {

    constructor() {
        super()
        this.state = {
            
        }
    }

    // when a file is uploaded
    handleChange = e => {
        const name = e.target.files[0].name
        console.log('name is ', name)
        console.log('http://localhost:5000/pdf/' + name)
        const formData = new FormData()
        formData.append("file", e.target.files[0])
        formData.append('fileName', name)
        console.log(formData)
        axios.get('http://localhost:5000/').then(res => console.log(res))
        axios.post('http://localhost:5000/pdf', {
            body: formData
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    getBackgroundColor = number => {
        return number % 2 === 0 ? '' : '#f1f1f1'
    }

    render() {
        const { number } = this.props
        const backgroundColor = this.getBackgroundColor(number)
        return (
            <div className="Reactant" style={{ ...styles }}>
                <h4 sm="4">Reactant {number}</h4>
                
                <Input
                    type="file"
                    name="file"
                    id="exampleFile"
                    onChange={this.handleChange}
                />     
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

export default Reactant