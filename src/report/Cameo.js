import React from 'react'

import { connect } from 'react-redux'
import './cameo.css'

import green from '../images/reactivity/green_compatible.png'
import yellow from '../images/reactivity/yellow_caution.png'
import red from '../images/reactivity/red_incompatible.png'

const Cameo = ({ cameoTable, cameoTableComplete }) => {
    cameoTable = cameoTable.split('/images/reactivity/green_compatible.png').join(green)
    cameoTable = cameoTable.split('/images/reactivity/yellow_caution.png').join(yellow)
    cameoTable = cameoTable.split('/images/reactivity/red_incompatible.png').join(red)

    return cameoTableComplete ? 
    (
        <div className='Cameo'>
            <caption>Cameo Matrix</caption>
            <div dangerouslySetInnerHTML={{ __html: cameoTable }}></div>
        </div>
    ) :
    null
}

const mapStateToProps = state => ({
    cameoTable: state.report.cameoTable,
    cameoTableComplete: state.status.cameoTableComplete,
})

export default connect(mapStateToProps)(Cameo)