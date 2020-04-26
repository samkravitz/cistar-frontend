import React, { Component } from 'react'
import actions from './redux/actions'
import { connect } from 'react-redux'
import axios from 'axios'
import server from './server'

import Header from './header/Header'
import Body from './body/Body'
import Report from './report/Report'

class Main extends Component {

    constructor() {
        super()
        this.state = {
           
        }
    }

    render() {
        return (
            <div className="Main">
                <Header />
                <Body />
                <Report />
            </div>
        )
    }
}

export default Main