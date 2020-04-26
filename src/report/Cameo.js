import React from 'react'

import { connect } from 'react-redux'
import './cameo.css'

const Cameo = ({ cameoTable }) => {
    console.log(cameoTable)
    return (
        <div className='Cameo'>
            <div dangerouslySetInnerHTML={{ __html: cameoTable }}></div>
        </div>
    )
}

const mapStateToProps = state => ({
    cameoTable: state.report.cameoTable,
})

export default connect(mapStateToProps)(Cameo)