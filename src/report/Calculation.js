import React, { useState } from 'react'
import { Popover, PopoverBody } from 'reactstrap'
import { connect } from 'react-redux'
import { StyleSheet, css } from 'aphrodite'

const Calculation = ({ reactionInfo, calculationErrors }) => {

    const [open, setOpen] = useState(false)

    // return null on error
    if (calculationErrors !== '')
        return null
    
    return (
        <div className='Calculation' style={styles.main}>
            <h4>
                Calculation
                <span
                    id='calculationInfo'
                    className={css(infoIconStyles.main)}
                    onMouseOver={() => setOpen(true)}
                    onMouseOut={() => setOpen(false)}
                >
                    <i className="far fa-question-circle fa-1x"></i>
                </span>
            </h4>

            <span>Adiabatic temperature change: {Number(reactionInfo.adiabaticTemp).toFixed(3)} &deg;C</span> <br/>
            <span>Calculated final temperature: {Number(reactionInfo.finalTemp).toFixed(3)} &deg;C</span> <br/>
            {/* <span>Calculated final pressure: {Number(reactionInfo.adiabaticPressure).toFixed(3)} bar</span> */}

            {/* Popovers */}
            <Popover placement="right" isOpen={open} target='calculationInfo'>
                <PopoverBody>Adiabatic temperature and pressure changes for the system assuming contributions from the heat of the reaction alone.</PopoverBody>
            </Popover>
        </div>
    )
}

const styles = {
    main: {
        padding: '1rem',
        paddingTop: '2rem',
        width: '100vw',
        textAlign: 'center',
    },
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
    reactionInfo: state.report.reactionInfo,
    calculationErrors: state.report.calculationErrors
})

export default connect(mapStateToProps)(Calculation)