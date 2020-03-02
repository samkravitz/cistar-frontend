import React, { Component } from 'react'

import {
    FormGroup,
    Input,
    Jumbotron,
    Button,
    Container,
    Row
} from 'reactstrap'

class Product extends Component {

    constructor() {
        super()
        this.state = {
            
        }
    }

    getBackgroundColor = number => {
        return number % 2 === 0 ? '' : '#f1f1f1'
    }

    render() {
        const { number } = this.props
        const backgroundColor = this.getBackgroundColor(number)
        return (
            <div className="Product" style={{ ...styles, backgroundColor: `${backgroundColor}`}}>
                <h4 sm="4">Product {number}</h4>
                
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
    //backgroundColor: '#f1f1f1'
}

export default Product