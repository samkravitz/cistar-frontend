import React, { Component } from 'react'
import { Input } from 'reactstrap'
import axios from 'axios'

class Product extends Component {

    constructor() {
        super()
        this.state = {
            properties: {},
            molWtFraction: '',
            specificHeat: '',
        }
    }

    // when a file is uploaded
    handleFileSelect = async e => {
        if (!e.target.files[0]) return

        const formData = new FormData()
        formData.set('file', e.target.files[0], e.target.files[0].name)
        const response = await axios.post('http://localhost:5000/pdf', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .catch(err => console.log(err))
        this.setState({ properties: response.data })
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleChangeProp = e => {
        const { properties } = this.state
        properties[e.target.name] = e.target.value
        this.setState({ properties })
    }

    render() {
        const { number } = this.props
        const { properties, specificHeat, molWtFraction } = this.state
        return (
            <div className="Product" style={{ ...styles }}>
                <h4 sm="4">Product {number}</h4>

                <Input
                    type="file"
                    name="file"
                    encType="multipart/form-data"
                    id="file"
                    onChange={this.handleFileSelect}
                />
                <Input type="text" name="productName" id="productName" value={properties.productName || ''} onChange={this.handleChangeProp}/>
                <Input type="text" name="molWtFraction" id="molWtFraction" value={molWtFraction} onChange={this.handleChange} />
                <Input type="text" name="molWt" id="molWt" value={properties.molWt || ''} onChange={this.handleChangeProp}/>
                <Input type="text" name="casNo" id="casNo" value={properties.casNo || ''} onChange={this.handleChangeProp}/>
                <br />

                <Input type="text" name="ph" id="ph" value={properties.ph || ''} onChange={this.handleChangeProp}/>
                <Input type="text" name="boilingPt" id="boilingPt" value={properties.boilingPt || ''} onChange={this.handleChangeProp}/>
                <Input type="text" name="flashPt" id="flashPt" value={properties.flashPt || ''}onChange={this.handleChangeProp} />
                <Input type="text" name="upperExplosionLim" id="upperExplosionLim" value={properties.explosiveProperties || ''} onChange={this.handleChangeProp}/> {/* upper explosion limit */}
                <Input type="text" name="lowerExplosionLim" id="lowerExplosionLim" value={properties.explosiveProperties || ''} onChange={this.handleChangeProp}/> {/* lower explosion limit  */}
                <Input type="text" name="vapourPressure" id="vapourPressure" value={properties.vapourPressure || ''} onChange={this.handleChangeProp}/>
                <Input type="text" name="vapourDensity" id="vapourDensity" value={properties.vapourDensity || ''} onChange={this.handleChangeProp}/>
                <Input type="text" name="relDensity" id="relDensity" value={properties.relDensity || ''} onChange={this.handleChangeProp}/>
                <Input type="text" name="autoIgnitionTemp" id="autoIgnitionTemp" value={properties.autoIgnitionTemp || ''} onChange={this.handleChangeProp}/>
                <Input type="text" name="decompositionTemp" id="decompositionTemp" value={properties.decompositionTemp || ''} onChange={this.handleChangeProp}/>
                <Input type="text" name="viscosity" id="viscosity" value={properties.viscosity || ''} onChange={this.handleChangeProp}/>
                <Input type="text" name="thermalConductivity" id="thermalConductivity" value={properties.viscosity || ''} onChange={this.handleChangeProp}/> {/* Thermal conductivity */}
                <Input type="text" name="specificHeat" id="specificHeat" value={specificHeat} onChange={this.handleChange} /> {/* CP */}
            </div>
        )
    }
}

const styles = {
    display: 'grid',
    gridTemplateRows: 'repeat(6, 1fr) 1fr repeat(13, minmax(auto, 1fr))',
    textAlign: 'center',
    alignItems: 'start',
    backgroundColor: '#f1f1f1'
}

export default Product