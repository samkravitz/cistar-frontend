import React, { Component } from 'react';
import Main from './Main'
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
} from 'reactstrap'




class App extends Component {
    constructor(props) {
        super(props);

        //this.toggle = this.toggle.bind(this);
        
        //this.r2p2 = this.r2p2.bind(this);
        //this.sr1 = this.sr1.bind(this);


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

toggle() {
   this.setState({
      isOpen: !this.state.isOpen
   });
}
    render() { 
        return (
            <div className="App">
                <Main />
            </div> 
        )
    }


}

export default App