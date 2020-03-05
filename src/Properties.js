import React from 'react'

const Properties = props => {
    return (
        <div className="Properties" style={styles.main}>
            
                <h2>Property</h2>
                <div></div>
                <h6>Product Name</h6>
                <h6>Mol. Weight (g/mol)</h6>
                <h6>CAS-No.</h6>

                <h5>Physical and Chemical Properties</h5>
                <h6>pH at 20°C (g/l)</h6>
                <h6>Initial boiling point (°C)</h6>
                <h6>Flash point (°C)</h6>
                <h6>Upper explosion limit (% V)</h6>
                <h6>Lower explosion limit (% V)</h6>
                <h6>Vapour pressure at 20°C (hPa)</h6>
                <h6>Vapour density (Air = 1.0)</h6>
                <h6>Relative density at 25°C (g/cm3)</h6>
                <h6>Auto ignition temperature (°C)</h6>
                <h6>Decomposition temperature (°C)</h6>
                <h6>Viscosity ()</h6>
                <h6>Thermal Conductivity - K</h6>
                <h6>Specific heat capacity - Cp</h6>
                <h6> Heat of Reaction</h6>

                <h5>Operating Parameters</h5>
                <h6>Temperature (°C)</h6>
                <h6>Pressure (Pa)</h6>
            
        </div>
        
    )
}

const styles = {
    main: {
        display: 'grid',
        //gridTemplateRows: '100px 200px',
        //gridTemplateRows: 'repeat(23, minmax(auto, 1fr))',
        gridTemplateRows: 'repeat(5, 1fr) 1fr repeat(17, minmax(auto, 1fr))',
        margin: '0',
        alignItems: 'center',
        textAlign: 'center',
    },
}

export default Properties