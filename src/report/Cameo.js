import React, { useState } from 'react'
import { Popover, PopoverBody } from 'reactstrap'
import { StyleSheet, css } from 'aphrodite'
import { connect } from 'react-redux'

import './cameo.css'

import green from '../images/reactivity/safe_thick.png'
import yellow from '../images/reactivity/caution_thick.png'
import orange from '../images/reactivity/warning_thick.png'
import red from '../images/reactivity/danger_thick.png'

const Cameo = ({ cameoTable, cameoTableComplete }) => {
    cameoTable = cameoTable.split('/images/reactivity/green_compatible.png').join(green)
    cameoTable = cameoTable.split('/images/reactivity/yellow_caution.png').join(yellow)
    cameoTable = cameoTable.split('/images/reactivity/yellow_caution.png').join(orange)
    cameoTable = cameoTable.split('/images/reactivity/red_incompatible.png').join(red)

    const [open, setOpen] = useState(false)

    return cameoTableComplete ? 
    (
        <div className='Cameo'>
            <caption>
                Cameo Matrix
                <span
                        id='cameoInfo'
                        className={css(infoIconStyles.main)}
                        onMouseOver={() => setOpen(true)}
                        onMouseOut={() => setOpen(false)}
                    >
                        <i className="far fa-question-circle fa-1x"></i>
                </span>    
            </caption>
            <div dangerouslySetInnerHTML={{ __html: cameoTable }}></div>

            {/* Popovers */}
            <Popover placement="right" isOpen={open} target='cameoInfo'>
                <PopoverBody>Generated using the CAMEO chemicals tool available online. For more information, check https://cameochemicals.noaa.gov/</PopoverBody>
            </Popover>
        </div>
    ) :
    null
}

const infoIconStyles = StyleSheet.create({
    main: {
        paddingLeft: '0.5em',

        ':hover': {
            color: '#3366ff',
            cursor: 'pointer'
        },
    },
})

const mapStateToProps = state => ({
    cameoTable: state.report.cameoTable,
    cameoTableComplete: state.status.cameoTableComplete,
})

export default connect(mapStateToProps)(Cameo)