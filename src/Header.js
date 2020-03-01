import React, { Component } from 'react'

import {
    Container,
    Row,
    Col,
    FormGroup,
    Label,
    Input,
    Jumbotron
} from 'reactstrap';


class Header extends Component {

    constructor() {
        super()
        this.state = {
            numReactants: 1,
            numProducts: 1,
        }
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

    render() {
        return (
            <div className="Header">
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col>
                                <h1>CISTAR Web Tool</h1>
                            </Col>
                        </Row>

                        <Row>
                        <Col sm='2'> <h6>Temperature (&deg;C)</h6> </Col>
                        <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>

	                     <Col sm="1"> <h6>State </h6> </Col>
                        <Col sm="2">
         		          <FormGroup>
			        
			          <Input type="select" name="st" id="exampleSelect" >
			            <option>Liquid</option>
			            <option>Gas</option>

			          </Input>
			        </FormGroup>
	                            
	                     </Col>


                        </Row>
                        <Row>
                        <Col sm='2'> <h6>Pressure (bar)</h6> </Col>
                        <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>


                        </Row>                        

			        <Row>

			        <Col sm="4">
			          <FormGroup>
			          <Label for="exampleSelect">Reactants</Label>
			          <Input type="select" name="n_r" id="exampleSelect" value={this.state.numReactants} onChange={this.handleChangeR}>
			            <option>1</option>
			            <option>2</option>
                        <option>3</option>
                        <option>4</option>
			          </Input>
			        </FormGroup>
			        </Col>
			            <Col sm="4">
			          <FormGroup>
			          <Label for="exampleSelect">Products</Label>
			          <Input type="select" name="n_p" id="exampleSelect" value={this.state.numProducts} onChange={this.handleChangeP} >
			            <option>1</option>
			            <option>2</option>
                        <option>3</option>
                        <option>4</option>
			          </Input>
			        </FormGroup>
			        </Col>
			        </Row>
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}

export default Header