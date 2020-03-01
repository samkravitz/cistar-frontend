import React from 'react'

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

const Properties = props => {
    return (
        <div className="Properties" style={{ textAlign: 'center' }}>  
            <h2>Properties</h2>
            <h7>Product Name</h7><br/>
            <h7>Mol. Weight (g/mol)</h7><br/>
            <h7>CAS-No.</h7><br/>

            <h5>Physical and Chemical Properties</h5>
            <h7>pH at 20°C (g/l)</h7><br/>
            <h7>Initial boiling point (°C)</h7><br/>
            <h7>Flash point (°C)</h7><br/>
            <h7>Upper explosion limit (% V)</h7><br/>
            <h7>Lower explosion limit (% V)</h7><br/>
            <h7>Vapour pressure at 20°C (hPa)</h7><br/>
            <h7>Vapour density (Air = 1.0)</h7><br/>
            <h7>Relative density at 25°C (g/cm3)</h7><br/>
            <h7>Auto ignition temperature (°C)</h7><br/>
            <h7>Decomposition temperature (°C)</h7><br/>
            <h7>Viscosity ()</h7><br/>
            <h7>Thermal Conductivity - K</h7><br/>
            <h7>Specific heat capacity - Cp</h7><br/>
            <h7> Heat of Reaction</h7><br/>

            <h5>Operating Parameters</h5>
            <h7>Temperature (°C)</h7><br/>
            <h7>Pressure (Pa)</h7><br/>

        </div>
    )
}

export default Properties