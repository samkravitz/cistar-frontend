import React, { Component } from 'react'
import axios from 'axios'
import server from './server'

import Header from './header/Header'
import Body from './body/Body'
import Report from './report/Report'

class Main extends Component {

    constructor() {
        super()
        this.state = {
            numReactants: 1,
            numProducts: 1,
            numDiluents: 0,
            hNums: {},
            matrix: [],
            operatingParams: {
                temperature: '0',
                pressure: '',
                heatOfReaction: '',
            },

        }
    }

    changeNumReactants = numReactants => {
        this.setState({ numReactants })
    }

    changeNumProducts = numProducts => {
        this.setState({ numProducts })
    }

    changeNumDiluents = numDiluents => {
        this.setState({ numDiluents })
    }

    setHNums = (name, hNum) => {
        const { hNums } = this.state
        hNums[`${name}`] = hNum
        this.setState({ hNums })
    }

    calculate = async reactants => {
        const { hNums } = this.state
        try {
            this.validateReactants(reactants)
        } catch (error) {
            const message = error.response ? error.response.data.error : error
            alert(message)
            return
        }

        const promises = Object.keys(hNums).map(async name => {
            const res = await axios.post(`${server}/graph`, Object.keys(hNums[`${name}`]))
            const data = res.data
            data['name'] = name
            return data
        })

        const matrix = await Promise.all(promises)

        this.setState({ matrix })
    }

    changeOperatingParams = e => {
        const { operatingParams } = this.state
        operatingParams[e.target.name] = e.target.value
        this.setState({ operatingParams })
    }

    // validate the initial weight fraction and cp for reactants
    validateReactants = reactants => {
        for (let i = 1; i <= this.state.numReactants; i++) {
            console.log('before')
            const reactant = reactants[i]
            console.log('after')
            if (! reactant) throw new Error('Please enter data for reactant ' + i)
            console.log(reactant)
            // cp validation
            const cp = reactant['cp']
            if (cp === '') throw new Error('Please enter a valid cp for reactant ' + i)
            if (isNaN(Number(cp)) || Number(cp) < 0)
                throw new Error('Please enter a valid cp for reactant ' + i)

            // initial weight fraction validation
        }
    }

    render() {
        return (
            <div className="Main">
                <Header
                    changeNumReactants={this.changeNumReactants}
                    changeNumProducts={this.changeNumProducts}
                    changeNumDiluents={this.changeNumDiluents}
                    changeOperatingParams={this.changeOperatingParams}
                />
                <Body
                    operatingParams={this.state.operatingParams}
                    numReactants={this.state.numReactants}
                    numProducts={this.state.numProducts}
                    numDiluents={this.state.numDiluents}
                    setHNums={this.setHNums}
                    calculate={this.calculate}
                />
                <Report
                    matrix={this.state.matrix}
                    hNums={this.state.hNums}
                />
            </div>
        )
    }
}

export default Main