import React from 'react'

import Header from './header/Header'
import Body from './body/Body'
import Report from './report/Report'

const Main = props => {
    return (
        <div className="Main">
            <Header />
            <Body />
            <Report />
        </div>
    )
}

export default Main