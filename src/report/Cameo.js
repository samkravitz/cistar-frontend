import React from 'react'

import { connect } from 'react-redux'
import './cameo.css'

import green from '../images/reactivity/green_compatible.png'
import yellow from '../images/reactivity/yellow_caution.png'
import red from '../images/reactivity/red_caution.png'

const Cameo = ({ cameoTable }) => {
    console.log(cameoTable)

    console.log(green)
    console.log(yellow)
    console.log(red)
    return (
        <div className='Cameo'>
            <caption>Cameo Matrix</caption>
            <div dangerouslySetInnerHTML={{ __html: cameoTable }}></div>
        </div>
    )
}

const mapStateToProps = state => ({
    cameoTable: state.report.cameoTable,
})

export default connect(mapStateToProps)(Cameo)