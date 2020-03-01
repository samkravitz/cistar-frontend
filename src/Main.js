import React, { Component } from 'react'

import Header from './Header'
import Body from './Body'


class Main extends Component {

    constructor() {
        super()
        this.state = {
            numReactants: 1,
            numProducts: 1,
        }
    }

    changeNumReactants = numReactants => {
        this.setState({ numReactants })
    }

    changeNumProducts = numProducts => {
        this.setState({ numProducts })
    }

    render() {
        return (
            <div className="Main">
                <Header
                    changeNumReactants={this.changeNumReactants}
                    changeNumProducts={this.changeNumProducts}
                />
                <Body />
            </div>
        )
    }
}

export default Main