import React, { Component } from 'react'
import { Input } from 'reactstrap'

import { connect } from 'react-redux'
import actions from '../redux/actions'

class Reactant extends Component {

    constructor() {
        super()
        this.state = {
            properties: {},
            molWtFraction: '',
        }
    }

    // when a file is uploaded, parse it
    handleFileSelect = async e => {
        e.persist()
        if (!e.target.files[0]) return

        const formData = new FormData()
        formData.set('file', e.target.files[0], e.target.files[0].name)
        try {
            // const response = await axios.post(`${server}/pdf`, formData, {
            //     headers: { 'Content-Type': 'multipart/form-data' },
            //     params: { temperature: this.props.temperature }
            // })
            // this.setState({ properties: response.data })
            // this.props.addReactant(this.props.number, response.data)
            // this.props.setHNums(response.data.productName, response.data.hNumbers)
            this.props.parseReactantFile(this.props.number - 1, this.props.temperature, formData)
        } catch (error) {
            console.log('hi')
            // Error 😨
            const message = error.response ? error.response.data.error : error
            e.target.value = ""
            this.resetState()
            alert(message)
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
        this.props.addReactantWtFraction(this.props.number, e.target.value)
    }

    handleChangeProp = e => {
        const { properties } = this.state
        properties[e.target.name] = e.target.value
        this.setState({ properties })
        
    }

    resetState = () => {
        this.setState({
            properties: {},
            molWtFraction: '',
            specificHeat: '',
        })
    }

    render() {
        const { number } = this.props
        const { properties, molWtFraction } = this.state
        return (
            <div className="Reactant" style={{ ...styles }}>
                <h4 sm="4">Reactant {number}</h4>

                <Input
                    type="file"
                    name="file"
                    encType="multipart/form-data"
                    onChange={this.handleFileSelect}
                />
                <Input type="text" name="productName" value={properties.productName || ''} onChange={this.handleChangeProp} />
                <Input type="text" name="molWtFraction" value={molWtFraction} onChange={this.handleChange} />
                <Input type="text" name="molWt" value={properties.molWt || ''} onChange={this.handleChangeProp} />
                <Input type="text" name="casNo" value={properties.casNo || ''} onChange={this.handleChangeProp} />
                <br />

                <Input type="text" name="ph" value={properties.ph || ''} onChange={this.handleChangeProp} />
                <Input type="text" name="boilingPt" value={properties.boilingPt || ''} onChange={this.handleChangeProp} />
                <Input type="text" name="flashPt" value={properties.flashPt || ''} onChange={this.handleChangeProp} />
                <Input type="text" name="upperExplosionLim" value={properties.upperExplosionLim || ''} onChange={this.handleChangeProp} /> {/* upper explosion limit */}
                <Input type="text" name="lowerExplosionLim" value={properties.lowerExplosionLim || ''} onChange={this.handleChangeProp} /> {/* lower explosion limit  */}
                <Input type="text" name="vapourPressure" value={properties.vapourPressure || ''} onChange={this.handleChangeProp} />
                <Input type="text" name="vapourDensity" value={properties.vapourDensity || ''} onChange={this.handleChangeProp} />
                <Input type="text" name="relDensity" value={properties.relDensity || ''} onChange={this.handleChangeProp} />
                <Input type="text" name="autoIgnitionTemp" value={properties.autoIgnitionTemp || ''} onChange={this.handleChangeProp} />
                <Input type="text" name="decompositionTemp" value={properties.decompositionTemp || ''} onChange={this.handleChangeProp} />
                <Input type="text" name="viscosity" value={properties.viscosity || ''} onChange={this.handleChangeProp} />
                <Input type="text" name="thermalConductivity" value={properties.viscosity || ''} onChange={this.handleChangeProp} /> {/* Thermal conductivity */}
                <Input type="text" name="cp" value={properties.cp || ''} onChange={this.handleChangeProp} /> {/* CP */}
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

const mapStateToProps = state => ({
    temperature: state.operatingParams.temperature,
})

const mapDispatchToProps = {
    parseReactantFile: actions.compound.parseReactantFile,
}

export default connect(mapStateToProps, mapDispatchToProps)(Reactant)