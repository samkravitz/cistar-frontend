import React, { Component } from 'react'

import Header from './Header'
import Body from './Body'
import Matrix from './Matrix'

class Main extends Component {

    constructor() {
        super()
        this.state = {
            numReactants: 1,
            numProducts: 1,
            numDiluents: 0,
            graphs: [],
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

    showGraphs = graph => {
        const graphs = [...this.state.graphs]
        graphs.push(graph)
        this.setState({ graphs })
    }

    render() {
        const showMatrix = this.state.graphs.length > 0
        return (
            <div className="Main">
                <Header
                    changeNumReactants={this.changeNumReactants}
                    changeNumProducts={this.changeNumProducts}
                    changeNumDiluents={this.changeNumDiluents}
                />
                <Body
                    numReactants={this.state.numReactants}
                    numProducts={this.state.numProducts}
                    numDiluents={this.state.numDiluents}
                    showGraphs={this.showGraphs}
                />
                {
                    showMatrix &&
                    <Matrix
                        matrix={this.state.graphs}
                    />
                }
            </div>
        )
    }
}

export default Main