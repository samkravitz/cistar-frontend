import React, { Component } from 'react'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    FormGroup,
    Form,
    Label,
    Input,
    FormText,
    Jumbotron,
    Button
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
        const numReactants = event.target.value
        this.setState({ numReactants })
        this.props.changeNumProducts(numReactants)
    }

    handleChangeP = event => {
        const numProducts = event.target.value
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
                        <Col sm='2'> <h7>Temperature (&deg;C)</h7> </Col>
                        <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>

	                     <Col sm="1"> <h7>State </h7> </Col>
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
                        <Col sm='2'> <h7>Pressure (bar)</h7> </Col>
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