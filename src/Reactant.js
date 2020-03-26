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
            a: [],
        }
    }

    // when a file is uploaded
    handleChange = async e => {
        if (!e.target.files[0]) return

        const formData = new FormData()
        formData.set('file', e.target.files[0], e.target.files[0].name)
        const response = await axios.post('http://localhost:5000/pdf', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
        .catch(err => console.log(err))
        this.setState({ a: response.data })
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
                    encType="multipart/form-data"
                    id="exampleFile"
                    onChange={this.handleChange}
                />
                <Input type="text" name="text" id="exampleText" value={this.state.a[0] || ''}/>
                <Input type="text" name="text" id="exampleText" />
                <Input type="text" name="text" id="exampleText" />
                <Input type="text" name="text" id="exampleText" />
                <br />

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

export default Reactant