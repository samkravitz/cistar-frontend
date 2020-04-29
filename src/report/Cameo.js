import React from 'react'

import { connect } from 'react-redux'
import './cameo.css'

import green from '../images/reactivity/green_compatible.png'
import yellow from '../images/reactivity/yellow_caution.png'
import red from '../images/reactivity/red_incompatible.png'

const Cameo = ({ cameoTable }) => {
    console.log(green)
    console.log(yellow)
    console.log(red)

    cameoTable = cameoTable.replace('/images/reactivity/green_compatible.png', green)
    cameoTable = cameoTable.replace('/images/reactivity/yellow_caution', yellow)
    cameoTable = cameoTable.replace('/images/reactivity/red_incompatible.png', red)

    console.log(cameoTable)
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