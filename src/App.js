import React, { Component } from 'react';
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




class App extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        
        this.r2p2 = this.r2p2.bind(this);
        this.sr1 = this.sr1.bind(this);


        this.state = {
            isOpen: false,
            n_r : 2,
            n_p : 2,
            fr1: '',
            r1: ['','','']
            
        };
        
    }
changef(event) {
  this.setState({fr1:event.target.value.replace("C:\\fakepath\\", "")})
  
}

sr1(event){
	const url = "http://localhost:5000/pdf/";
	fetch(url + this.state.fr1).then(response => response.json()).then(data => this.setState({ r1: data.a }));
}


 r2p2() {
  return (

  	<Container fluid="1">
  	<Row noGutters="0">
  	<Col sm ="7">

  	<Container>
                    <Row>
                        <Col style={{textAlign: 'center'}} sm="2"> <h3>Properties</h3></Col>                  


                        <Col style={{backgroundColor: '#f1f1f1',textAlign: 'center'}} sm="2"><h5>Reactant 1</h5></Col>                      
                        <Col style={{backgroundColor: '#f1f1f1',textAlign: 'center'}} sm="2"><h5>Reactant 2</h5></Col>
                        <Col style={{textAlign: 'center'}} sm="2"><h5>Product 1</h5></Col>
                        <Col style={{textAlign: 'center'}} sm="2"><h5>Product 2</h5></Col>
                        <Col style={{textAlign: 'center'}} sm="2"><h5>Diluent</h5></Col>


                    </Row>



                    <Row>
                        <Col style={{textAlign: 'center'}} sm="2">
                        
                       
                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}} sm="2">
                            <FormGroup row>
                               <Col sm={12}>          
                               <Input size="sm" type="file" name="fr1"  id="exampleFile" onChange={this.changef.bind(this)} />
                               </Col>
                            </FormGroup>
                            
                            
                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}}sm="2">
                            <FormGroup>          
                               <Input size="sm" type="file" name="file" id="exampleFile" />
                            </FormGroup>
                            
                        </Col>
                        

                        <Col sm="2">
                            <FormGroup>          
                               <Input type="file" size="sm" name="file" id="exampleFile" />
                            </FormGroup>
                            
                        </Col>


	                    <Col sm="2">
                            <FormGroup>          
                               <Input type="file" size="sm" name="file" id="exampleFile" />
                            </FormGroup>
	                            
	                     </Col>

	                      <Col sm="2">
                            <FormGroup>          
                               <Input type="file" size="sm" name="file" id="exampleFile" />
                            </FormGroup>
	                            
	                     </Col>




                    </Row>



                           <Row>
                        <Col style={{textAlign: 'center'}} sm="2">
                        
                       
                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}} sm="2">
                            
                               <Col sm={12}>          
                                <Button color="primary" onClick={this.sr1.bind(this)}>Submit</Button>
                               </Col>
                            
                            
                            
                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}}sm="2">
                                  <Col sm={12}>   
                                <Button color="primary">Submit</Button>
                             </Col>
                            
                        </Col>
                        

                        <Col sm="2">
                             <Col sm={12}>  
                                <Button color="primary">Submit</Button>
                             </Col>
                            
                        </Col>


	                    <Col sm="2">
                            <Col sm={12}>  
                                   <FormGroup>   
                               <Button color="primary">Submit</Button>
                             </FormGroup> 
	                            </Col>
	                     </Col>


	                    <Col sm="2">
                            <Col sm={12}>  
                                   <FormGroup>   
                               <Button color="primary">Submit</Button>
                             </FormGroup> 
	                            </Col>
	                     </Col>




                    </Row>

                    <Row>
                        <Col style={{textAlign: 'center'}} sm="2">
                        <h7>Product Name </h7> 
                       





                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}} sm="2">
                            <FormGroup>          
                               <Input type="text" name="r1[0]" value={this.state.r1[0]}  onChange={(e) => {let r1 = [...this.state.r1];r1[0] = e.target.value ;this.setState({ r1 }); }}/>
                               	
                            </FormGroup>
                            
                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}}sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>
                        

                        <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


	                    <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>



	                    <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>




                    </Row>


                    <Row>
                      <Col style={{textAlign: 'center'}} sm="2">

                        <h7>Mol. Weight (g/mol) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="2">
                            <FormGroup>          
                               <Input type="text" name="r1[1]" value={this.state.r1[1]}  onChange={(e) => {let r1 = [...this.state.r1];r1[1] = e.target.value ;this.setState({ r1 }); }}/>
                            </FormGroup>
                            
                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}}sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>
                        

                        <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


	                    <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>


	                    <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>




                    </Row>



                    <Row>
                      <Col style={{textAlign: 'center'}} sm="2">

                        <h7>CAS-No. </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="2">
                            <FormGroup>          
                               <Input type="text" name="r1[2]" value={this.state.r1[2]}  onChange={(e) => {let r1 = [...this.state.r1];r1[2] = e.target.value ;this.setState({ r1 }); }}/>
                            </FormGroup>
                            
                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}}sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>
                        

                        <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


	                    <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>



	                    <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>




                    </Row>

                     <Row>
                      <Col style={{textAlign: 'center'}} sm="2">

                        <h7>Mole Fraction</h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}}sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>
                        

                        <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


	                    <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>

	                        <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>

	                     






                    </Row>


                    <Row>
                      <Col style={{textAlign: 'center'}} sm="12">

                        <h5>Physical and Chemical Properties</h5>
                      </Col>
                      











                    </Row>


                    <Row>
                      <Col style={{textAlign: 'center'}} sm="2">

                        <h7>pH at 20&deg;C (g/l) </h7>
                      </Col>
                      





 


                        <Col style={{backgroundColor: '#f1f1f1'}} sm="2">
                            <FormGroup>          
                               <Input type="text" name="r1[6]" value={this.state.r1[6]}  onChange={(e) => {let r1 = [...this.state.r1];r1[6] = e.target.value ;this.setState({ r1 }); }}/>
                            </FormGroup>
                            
                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}}sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>
                        

                        <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


	                    <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>


	                    <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>




                    </Row>
                        


                    <Row>
                      <Col style={{textAlign: 'center'}} sm="2">

                        <h7>Initial boiling point (&deg;C) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="2">
                            <FormGroup>          
                               <Input type="text" name="r1[8]" value={this.state.r1[8]}  onChange={(e) => {let r1 = [...this.state.r1];r1[8] = e.target.value ;this.setState({ r1 }); }}/>
                            </FormGroup>
                            
                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}}sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>
                        

                        <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


	                    <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>

	                            <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>




                    </Row>


                    <Row>
                      <Col style={{textAlign: 'center'}} sm="2">

                        <h7>Flash point (&deg;C) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="2">
                            <FormGroup>          
                              <Input type="text" name="r1[9]" value={this.state.r1[9]}  onChange={(e) => {let r1 = [...this.state.r1];r1[9] = e.target.value ;this.setState({ r1 }); }}/>
                            </FormGroup>
                            
                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}}sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>
                        

                        <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


	                    <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>


	                    <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>




                    </Row>



                    <Row>
                      <Col style={{textAlign: 'center'}} sm="2">

                        <h7>Upper explosion limit (% V) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="2">
                            <FormGroup>          
                               <Input type="text" name="r1[12]" value={this.state.r1[12]}  onChange={(e) => {let r1 = [...this.state.r1];r1[12] = e.target.value ;this.setState({ r1 }); }}/>
                            </FormGroup>
                            
                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}}sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>
                        

                        <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


	                    <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>

	                         <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>




                    </Row>


                     <Row>
                      <Col style={{textAlign: 'center'}} sm="2">

                        <h7>Lower explosion limit (% V) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}}sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>
                        

                        <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


	                    <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>


	                        <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>




                    </Row>


                     <Row>
                      <Col style={{textAlign: 'center'}} sm="2">

                        <h7>Vapour pressure at 20&deg;C (hPa) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="2">
                            <FormGroup>          
                              <Input type="text" name="r1[13]" value={this.state.r1[13]}  onChange={(e) => {let r1 = [...this.state.r1];r1[13] = e.target.value ;this.setState({ r1 }); }}/>
                            </FormGroup>
                            
                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}}sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>
                        

                        <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


	                    <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>

	                           <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>




                    </Row>


                     <Row>
                      <Col style={{textAlign: 'center'}} sm="2">

                        <h7>Vapour density (Air = 1.0) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="2">
                            <FormGroup>          
                               <Input type="text" name="r1[14]" value={this.state.r1[14]}  onChange={(e) => {let r1 = [...this.state.r1];r1[14] = e.target.value ;this.setState({ r1 }); }}/>
                            </FormGroup>
                            
                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}}sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>
                        

                        <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


	                    <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>

	                             <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>





                    </Row>



                     <Row>
                      <Col style={{textAlign: 'center'}} sm="2">

                        <h7>Relative density at 25&deg;C (g/cm3) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="2">
                            <FormGroup>          
                               <Input type="text" name="r1[15]" value={this.state.r1[15]}  onChange={(e) => {let r1 = [...this.state.r1];r1[15] = e.target.value ;this.setState({ r1 }); }}/>
                            </FormGroup>
                            
                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}}sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>
                        

                        <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


	                    <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>


	                    <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>





                    </Row>



                     <Row>
                      <Col style={{textAlign: 'center'}} sm="2">

                        <h7>Auto ignition temperature (&deg;C) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="2">
                            <FormGroup>          
                              <Input type="text" name="r1[18]" value={this.state.r1[18]}  onChange={(e) => {let r1 = [...this.state.r1];r1[18] = e.target.value ;this.setState({ r1 }); }}/>
                            </FormGroup>
                            
                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}}sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>
                        

                        <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


	                    <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>

	                    <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>







                    </Row>



                     <Row>
                      <Col style={{textAlign: 'center'}} sm="2">

                        <h7>Decomposition temperature (&deg;C) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="2">
                            <FormGroup>          
                               <Input type="text" name="r1[19]" value={this.state.r1[19]}  onChange={(e) => {let r1 = [...this.state.r1];r1[19] = e.target.value ;this.setState({ r1 }); }}/>
                            </FormGroup>
                            
                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}}sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>
                        

                        <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


	                    <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>



	                    <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>




                    </Row>


                    <Row>
                      <Col style={{textAlign: 'center'}} sm="2">

                        <h7>Viscosity () </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="2">
                            <FormGroup>          
                               <Input type="text" name="r1[20]" value={this.state.r1[20]}  onChange={(e) => {let r1 = [...this.state.r1];r1[20] = e.target.value ;this.setState({ r1 }); }}/>
                            </FormGroup>
                            
                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}}sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>
                        

                        <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


	                    <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>



	                    <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>




                    </Row>


                    <Row>
                      <Col style={{textAlign: 'center'}} sm="2">

                        <h7>Thermal Conductivity - K  </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}}sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>
                        

                        <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


	                    <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>

	                             <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>





                    </Row>


                    <Row>
                      <Col style={{textAlign: 'center'}} sm="2">

                        <h7>Specific heat capacity - Cp </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}}sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>
                        

                        <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


	                    <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>

	                     

	                    <Col sm="2">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>




                    </Row>


                   



                         <Row>
                      <Col style={{textAlign: 'center',marginTop:'1em'}} sm="4">

                        <h7>Notes</h7>
                      </Col>
                             <Col style={{textAlign: 'center',marginTop:'1em'}} sm="8">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>

	                     </Row>



               </Container>
               </Col>
               <Col sm="1">
               </Col>
               <Col sm="4">
               <Container>
               <Row>
               <Col  style={{textAlign: 'center',marginBottom:'1em'}}><h2> Mixture Properties </h2> </Col>  
               </Row>
               
               <Row>
                   <Col  sm="4">

                        <h7>Flash point(&deg;C) </h7>
                      </Col>

                          <Col sm="4">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>




               </Row>

                <Row>
                   <Col  sm="4">

                        <h7>Boiling point(&deg;C) </h7>
                      </Col>

                          <Col sm="4">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>




               </Row>


                               <Row>
                   <Col  sm="4">

                        <h7>Auto ignition temperature(&deg;C) </h7>
                      </Col>

                          <Col sm="4">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>




               </Row>


                 <Row>
                   <Col  sm="4">

                        <h7>Density(Kg/cm3) </h7>
                      </Col>

                          <Col sm="4">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>




               </Row>



                <Row>
                   <Col  sm="4">

                        <h7>Viscosity() </h7>
                      </Col>

                          <Col sm="4">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>




               </Row>


                <Row>
                   <Col  sm="4">

                        <h7>Thermal conductivity</h7>
                      </Col>

                          <Col sm="4">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>




               </Row>


                 <Row>
                   <Col  sm="4">

                        <h7>Cp</h7>
                      </Col>

                          <Col sm="4">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>




               </Row>          













               </Container>





               </Col>

               </Row>
               </Container>

  	);




}


r1p1() {
  return (

  	<Container>
                    <Row>
                        <Col style={{textAlign: 'center'}} sm="4"> <h2>Properties</h2></Col>                  


                        <Col style={{backgroundColor: '#f1f1f1',textAlign: 'center'}} sm="4"><h4>Reactant 1</h4></Col>                      
                        
                        <Col style={{textAlign: 'center'}} sm="4"><h4>Product 1</h4></Col>
                        


                    </Row>



                    <Row>
                        <Col style={{textAlign: 'center'}} sm="4">
                        
                       
                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}} sm="4">
                            <FormGroup row>
                               <Col sm={12}>          
                               <Input size="sm" type="file" name="file" id="exampleFile" />
                               </Col>
                            </FormGroup>
                            
                        </Col>


                     
                        

                        <Col sm="4">
                            <FormGroup>          
                               <Input type="file" size="sm" name="file" id="exampleFile" />
                            </FormGroup>
                            
                        </Col>


	              




                    </Row>

                    <Row>
                        <Col style={{textAlign: 'center'}} sm="4">
                        <h7>Product Name </h7> 
                       






                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}} sm="4">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText"  />
                            </FormGroup>
                            
                        </Col>


                  
                        

                        <Col sm="4">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


	              




                    </Row>


                    <Row>
                      <Col style={{textAlign: 'center'}} sm="4">

                        <h7>Mol. Weight (g/mol) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="4">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


                
                        

                        <Col sm="4">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


	       



                    </Row>



                    <Row>
                      <Col style={{textAlign: 'center'}} sm="4">

                        <h7>CAS-No. </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="4">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


               
                        

                        <Col sm="4">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


	   




                    </Row>


                    <Row>
                      <Col style={{textAlign: 'center'}} sm="4">

                        <h5>Physical and Chemical Properties</h5>
                      </Col>
                      











                    </Row>


                    <Row>
                      <Col style={{textAlign: 'center'}} sm="4">

                        <h7>pH at 20&deg;C (g/l) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="4">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


                 
                        

                        <Col sm="4">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


	



                    </Row>
                        


                    <Row>
                      <Col style={{textAlign: 'center'}} sm="4">

                        <h7>Initial boiling point (&deg;C) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="4">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


              
                        

                        <Col sm="4">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>






                    </Row>


                    <Row>
                      <Col style={{textAlign: 'center'}} sm="4">

                        <h7>Flash point (&deg;C) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="4">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


             
                        

                        <Col sm="4">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


	          



                    </Row>



                    <Row>
                      <Col style={{textAlign: 'center'}} sm="4">

                        <h7>Upper explosion limit (% V) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="4">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


            
                        

                        <Col sm="4">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


	          




                    </Row>


                     <Row>
                      <Col style={{textAlign: 'center'}} sm="4">

                        <h7>Lower explosion limit (% V) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="4">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


               
                        

                        <Col sm="4">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>







                    </Row>


                     <Row>
                      <Col style={{textAlign: 'center'}} sm="4">

                        <h7>Vapour pressure at 20&deg;C (hPa) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="4">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


                        

                        <Col sm="4">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>







                    </Row>


                     <Row>
                      <Col style={{textAlign: 'center'}} sm="4">

                        <h7>Vapour density (Air = 1.0) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="4">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


                        

                        <Col sm="4">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>







                    </Row>



                     <Row>
                      <Col style={{textAlign: 'center'}} sm="4">

                        <h7>Relative density at 25&deg;C (g/cm3) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="4">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>



                        

                        <Col sm="4">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>






                    </Row>



                     <Row>
                      <Col style={{textAlign: 'center'}} sm="4">

                        <h7>Auto ignition temperature (&deg;C) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="4">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>



                        

                        <Col sm="4">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>



	                   








                    </Row>



                     <Row>
                      <Col style={{textAlign: 'center'}} sm="4">

                        <h7>Decomposition temperature (&deg;C) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="4">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


                        <Col sm="4">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>






                    </Row>


                    <Row>
                      <Col style={{textAlign: 'center'}} sm="4">

                        <h7>Viscosity () </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="4">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>



                        

                        <Col sm="4">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>





                    </Row>


                    <Row>
                      <Col style={{textAlign: 'center'}} sm="4">

                        <h7>Thermal Conductivity - K  </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="4">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


    
                        

                        <Col sm="4">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>






                    </Row>


                    <Row>
                      <Col style={{textAlign: 'center'}} sm="4">

                        <h7>Specific heat capacity - Cp </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="4">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


     

                        <Col sm="4">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>






                    </Row>


                    <Row>
                      <Col style={{textAlign: 'center'}} sm="4">

                        <h7>Heat of reaction </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="4">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>



                        <Col sm="4">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>






                    </Row>



                    <Row>
                      <Col style={{textAlign: 'center'}} sm="4">

                        <h5>Operating Parameters </h5>
                      </Col>
                      








                 




                    </Row>


                    <Row>
                      <Col style={{textAlign: 'center'}} sm="4">

                        <h7>Temperature (&deg;C) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="4">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


    

                        <Col sm="4">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>








                    </Row>



                    <Row>
                      <Col style={{textAlign: 'center'}} sm="4">

                        <h7>Pressure (Pa) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="4">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>



                        

                        <Col sm="4">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>

                  </Row>

               </Container>

  	);




}

r1p2() {
  return (

  	<Container>
                    <Row>
                        <Col style={{textAlign: 'center'}} sm="3"> <h2>Properties</h2></Col>                  


                        <Col style={{backgroundColor: '#f1f1f1',textAlign: 'center'}} sm="3"><h4>Reactant 1</h4></Col>                      
                        
                        <Col style={{textAlign: 'center'}} sm="3"><h4>Product 1</h4></Col>
                        <Col style={{textAlign: 'center'}} sm="3"><h4>Product 2</h4></Col>


                    </Row>



                    <Row>
                        <Col style={{textAlign: 'center'}} sm="3">
                        
                       
                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}} sm="3">
                            <FormGroup row>
                               <Col sm={12}>          
                               <Input size="sm" type="file" name="file" id="exampleFile" />
                               </Col>
                            </FormGroup>
                            
                        </Col>


                   

                        <Col sm="3">
                            <FormGroup>          
                               <Input type="file" size="sm" name="file" id="exampleFile" />
                            </FormGroup>
                            
                        </Col>


	                    <Col sm="3">
                            <FormGroup>          
                               <Input type="file" size="sm" name="file" id="exampleFile" />
                            </FormGroup>
	                            
	                     </Col>




                    </Row>

                    <Row>
                        <Col style={{textAlign: 'center'}} sm="3">
                        <h7>Product Name </h7> 
                       






                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}} sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText"  />
                            </FormGroup>
                            
                        </Col>




                        <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


	                    <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>




                    </Row>


                    <Row>
                      <Col style={{textAlign: 'center'}} sm="3">

                        <h7>Mol. Weight (g/mol) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


                        

                        <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


	                    <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>




                    </Row>



                    <Row>
                      <Col style={{textAlign: 'center'}} sm="3">

                        <h7>CAS-No. </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>




                        <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


	                    <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>




                    </Row>


                    <Row>
                      <Col style={{textAlign: 'center'}} sm="3">

                        <h5>Physical and Chemical Properties</h5>
                      </Col>
                      











                    </Row>


                    <Row>
                      <Col style={{textAlign: 'center'}} sm="3">

                        <h7>pH at 20&deg;C (g/l) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


   
                        

                        <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


	                    <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>




                    </Row>
                        


                    <Row>
                      <Col style={{textAlign: 'center'}} sm="3">

                        <h7>Initial boiling point (&deg;C) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>



                        

                        <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


	                    <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>




                    </Row>


                    <Row>
                      <Col style={{textAlign: 'center'}} sm="3">

                        <h7>Flash point (&deg;C) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>



                        

                        <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


	                    <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>




                    </Row>



                    <Row>
                      <Col style={{textAlign: 'center'}} sm="3">

                        <h7>Upper explosion limit (% V) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>



                        

                        <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


	                    <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>




                    </Row>


                     <Row>
                      <Col style={{textAlign: 'center'}} sm="3">

                        <h7>Lower explosion limit (% V) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>



                        

                        <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


	                    <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>




                    </Row>


                     <Row>
                      <Col style={{textAlign: 'center'}} sm="3">

                        <h7>Vapour pressure at 20&deg;C (hPa) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


 
                        

                        <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


	                    <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>




                    </Row>


                     <Row>
                      <Col style={{textAlign: 'center'}} sm="3">

                        <h7>Vapour density (Air = 1.0) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>



                        

                        <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


	                    <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>




                    </Row>



                     <Row>
                      <Col style={{textAlign: 'center'}} sm="3">

                        <h7>Relative density at 25&deg;C (g/cm3) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>



                        

                        <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


	                    <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>




                    </Row>



                     <Row>
                      <Col style={{textAlign: 'center'}} sm="3">

                        <h7>Auto ignition temperature (&deg;C) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>



                        

                        <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


	                    <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>








                    </Row>



                     <Row>
                      <Col style={{textAlign: 'center'}} sm="3">

                        <h7>Decomposition temperature (&deg;C) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>



                        

                        <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


	                    <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>




                    </Row>


                    <Row>
                      <Col style={{textAlign: 'center'}} sm="3">

                        <h7>Viscosity () </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>



                        

                        <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


	                    <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>




                    </Row>


                    <Row>
                      <Col style={{textAlign: 'center'}} sm="3">

                        <h7>Thermal Conductivity - K  </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>



                        

                        <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


	                    <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>




                    </Row>


                    <Row>
                      <Col style={{textAlign: 'center'}} sm="3">

                        <h7>Specific heat capacity - Cp </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>



                        

                        <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


	                    <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>




                    </Row>


                    <Row>
                      <Col style={{textAlign: 'center'}} sm="3">

                        <h7>Heat of reaction </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>



                        

                        <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


	                    <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>




                    </Row>



                    <Row>
                      <Col style={{textAlign: 'center'}} sm="3">

                        <h5>Operating Parameters </h5>
                      </Col>
                      








                 




                    </Row>


                    <Row>
                      <Col style={{textAlign: 'center'}} sm="3">

                        <h7>Temperature (&deg;C) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>




                        <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


	                    <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>







                    </Row>



                    <Row>
                      <Col style={{textAlign: 'center'}} sm="3">

                        <h7>Pressure (Pa) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>




                        <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


	                    <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
	                            
	                     </Col>




                    </Row>

               </Container>

  	);




}

r2p1() {
  return (

  	<Container>
                    <Row>
                        <Col style={{textAlign: 'center'}} sm="3"> <h2>Properties</h2></Col>                  


                        <Col style={{backgroundColor: '#f1f1f1',textAlign: 'center'}} sm="3"><h4>Reactant 1</h4></Col>                      
                        <Col style={{backgroundColor: '#f1f1f1',textAlign: 'center'}} sm="3"><h4>Reactant 2</h4></Col>
                        <Col style={{textAlign: 'center'}} sm="3"><h4>Product 1</h4></Col>
                        


                    </Row>



                    <Row>
                        <Col style={{textAlign: 'center'}} sm="3">
                        
                       
                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}} sm="3">
                            <FormGroup row>
                               <Col sm={12}>          
                               <Input size="sm" type="file" name="file" id="exampleFile" />
                               </Col>
                            </FormGroup>
                            
                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}}sm="3">
                            <FormGroup>          
                               <Input size="sm" type="file" name="file" id="exampleFile" />
                            </FormGroup>
                            
                        </Col>
                        

                        <Col sm="3">
                            <FormGroup>          
                               <Input type="file" size="sm" name="file" id="exampleFile" />
                            </FormGroup>
                            
                        </Col>







                    </Row>

                    <Row>
                        <Col style={{textAlign: 'center'}} sm="3">
                        <h7>Product Name </h7> 
                       






                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}} sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText"  />
                            </FormGroup>
                            
                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}}sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>
                        

                        <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


	          



                    </Row>


                    <Row>
                      <Col style={{textAlign: 'center'}} sm="3">

                        <h7>Mol. Weight (g/mol) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}}sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>
                        

                        <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


	  



                    </Row>



                    <Row>
                      <Col style={{textAlign: 'center'}} sm="3">

                        <h7>CAS-No. </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}}sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>
                        

                        <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>






                    </Row>


                    <Row>
                      <Col style={{textAlign: 'center'}} sm="3">

                        <h5>Physical and Chemical Properties</h5>
                      </Col>
                      











                    </Row>


                    <Row>
                      <Col style={{textAlign: 'center'}} sm="3">

                        <h7>pH at 20&deg;C (g/l) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}}sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>
                        

                        <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>





                    </Row>
                        


                    <Row>
                      <Col style={{textAlign: 'center'}} sm="3">

                        <h7>Initial boiling point (&deg;C) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}}sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>
                        

                        <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>







                    </Row>


                    <Row>
                      <Col style={{textAlign: 'center'}} sm="3">

                        <h7>Flash point (&deg;C) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}}sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>
                        

                        <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>





                    </Row>



                    <Row>
                      <Col style={{textAlign: 'center'}} sm="3">

                        <h7>Upper explosion limit (% V) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}}sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>
                        

                        <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


	 



                    </Row>


                     <Row>
                      <Col style={{textAlign: 'center'}} sm="3">

                        <h7>Lower explosion limit (% V) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}}sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>
                        

                        <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>







                    </Row>


                     <Row>
                      <Col style={{textAlign: 'center'}} sm="3">

                        <h7>Vapour pressure at 20&deg;C (hPa) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}}sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>
                        

                        <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>







                    </Row>


                     <Row>
                      <Col style={{textAlign: 'center'}} sm="3">

                        <h7>Vapour density (Air = 1.0) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}}sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>
                        

                        <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>







                    </Row>



                     <Row>
                      <Col style={{textAlign: 'center'}} sm="3">

                        <h7>Relative density at 25&deg;C (g/cm3) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}}sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>
                        

                        <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>







                    </Row>



                     <Row>
                      <Col style={{textAlign: 'center'}} sm="3">

                        <h7>Auto ignition temperature (&deg;C) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}}sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>
                        

                        <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>










                    </Row>



                     <Row>
                      <Col style={{textAlign: 'center'}} sm="3">

                        <h7>Decomposition temperature (&deg;C) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}}sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>
                        

                        <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>






                    </Row>


                    <Row>
                      <Col style={{textAlign: 'center'}} sm="3">

                        <h7>Viscosity () </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}}sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>
                        

                        <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>






                    </Row>


                    <Row>
                      <Col style={{textAlign: 'center'}} sm="3">

                        <h7>Thermal Conductivity - K  </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}}sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>
                        

                        <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>







                    </Row>


                    <Row>
                      <Col style={{textAlign: 'center'}} sm="3">

                        <h7>Specific heat capacity - Cp </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}}sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>
                        

                        <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>







                    </Row>


                    <Row>
                      <Col style={{textAlign: 'center'}} sm="3">

                        <h7>Heat of reaction </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}}sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>
                        

                        <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>






                    </Row>



                    <Row>
                      <Col style={{textAlign: 'center'}} sm="3">

                        <h5>Operating Parameters </h5>
                      </Col>
                      








                 




                    </Row>


                    <Row>
                      <Col style={{textAlign: 'center'}} sm="3">

                        <h7>Temperature (&deg;C) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}}sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>
                        

                        <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>










                    </Row>



                    <Row>
                      <Col style={{textAlign: 'center'}} sm="3">

                        <h7>Pressure (Pa) </h7>
                      </Col>
                      








                        <Col style={{backgroundColor: '#f1f1f1'}} sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>


                        <Col style={{backgroundColor: '#f1f1f1'}}sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>
                        

                        <Col sm="3">
                            <FormGroup>          
                               <Input type="text" name="text" id="exampleText" />
                            </FormGroup>
                            
                        </Col>







                    </Row>

               </Container>

  	);




}

























































































handleChange(event) {
  this.setState({n_r: event.target.value});
  
}

handleChange2(event) {
  
  this.setState({n_p: event.target.value})
}
    

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() { let tab;

    	     if (this.state.n_r == 2 && this.state.n_p ==2)
            	{tab =<this.r2p2/>}
            else if (this.state.n_r == 1 && this.state.n_p ==2)
            {tab =<this.r1p2/>}
	         else if (this.state.n_r == 1 && this.state.n_p ==1)
	            {tab =<this.r1p1/>}
	            else if (this.state.n_r == 2 && this.state.n_p ==1)
	            {tab =<this.r2p1/>}


        return (
            <div>
                <Navbar color="inverse" light expand="md">
                    <NavbarBrand href="/">CISTAR</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/">Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
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
			          <Input type="select" name="n_r" id="exampleSelect" value={this.state.n_r} onChange={this.handleChange.bind(this)}>
			            <option>1</option>
			            <option>2</option>

			          </Input>
			        </FormGroup>
			        </Col>
			            <Col sm="4">
			          <FormGroup>
			          <Label for="exampleSelect">Products</Label>
			          <Input type="select" name="n_p" id="exampleSelect" value={this.state.n_p} onChange={this.handleChange2.bind(this)} >
			            <option>1</option>
			            <option>2</option>

			          </Input>
			        </FormGroup>
			        </Col>
			        </Row>
                    </Container>
                </Jumbotron>


                {tab}

                
                {this.state.n_r}
                {this.state.fr1}


            





     

        



            </div>


        );
    }


}

export default App;