import React, { Component } from 'react'
import axios from 'axios'
import server from './server'

import Header from './Header'
import Body from './Body'
import Report from './Report'

class Main extends Component {

    constructor() {
        super()
        this.state = {
            numReactants: 1,
            numProducts: 1,
            numDiluents: 0,
            hNums: {},
            matrix: [],
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

    calculate = async () => {
        const { hNums } = this.state
        const promises = Object.keys(hNums).map(async name => {
            const res = await axios.post(`${server}/graph`, Object.keys(hNums[`${name}`]))
            const data = res.data
            data['name'] = name
            return data
        })

        const matrix =  await Promise.all(promises)
        
        this.setState({ matrix })
    }

    render() {
        return (
            <div className="Main">
                <Header
                    changeNumReactants={this.changeNumReactants}
                    changeNumProducts={this.changeNumProducts}
                    changeNumDiluents={this.changeNumDiluents}
                    calculate={this.calculate}
                />
                <Body
                    numReactants={this.state.numReactants}
                    numProducts={this.state.numProducts}
                    numDiluents={this.state.numDiluents}
                    setHNums={this.setHNums}
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