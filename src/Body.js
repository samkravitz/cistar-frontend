import React, { Component } from 'react'

import Reactant from './Reactant'
import Properties from './Properties'

class Body extends Component {

    render() {
        return (
            <div className="Body" style={{ display: 'flex' }}>
                <Properties />
                <Reactant />
            </div>
        )
    }
}

export default Body