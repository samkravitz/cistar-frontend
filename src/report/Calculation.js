import React from 'react'
import { connect } from 'react-redux'

const styles = {
    main: {
        padding: '1rem',
        paddingTop: '2rem',
        width: '100vw',
        textAlign: 'center',
    },
}

const Calculation = ({ reactionInfo, calculationErrors }) => {
    // return null on error
    if (calculationErrors !== '')
        return null

    return (
        <div className='Calculation' style={styles.main}>
            <h4>Calculation</h4>
            <span>Adiabatic temperature change: {Number(reactionInfo.adiabaticTemp).toFixed(3)} °C</span> <br/>
            <span>Calculated final temperature: {Number(reactionInfo.finalTemp).toFixed(3)} °C</span> <br/>
            <span>Calculated final pressure: {Number(reactionInfo.adiabaticPressure).toFixed(3)} bar</span>
        </div>
    )
}

const mapStateToProps = state => ({
    reactionInfo: state.report.reactionInfo,
    calculationErrors: state.report.calculationErrors
})

export default connect(mapStateToProps)(Calculation)