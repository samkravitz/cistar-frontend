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

const Calculation = ({ reactionInfo }) => {
    return (
        <div className='Calculation' style={styles.main}>
            <h4>Calculation</h4>
            <span>Adiabatic temperature change: {Number(reactionInfo.adiabaticTemp).toFixed(3)} °C</span> <br/>
            <span>Final temperature: {Number(reactionInfo.finalTemp).toFixed(3)} °C</span> <br/>
            <span>Adiabatic pressure change: {Number(reactionInfo.adiabaticPressure).toFixed(3)} bar</span>
        </div>
    )
}

const mapStateToProps = state => ({
    reactionInfo: state.report.reactionInfo,
})

export default connect(mapStateToProps)(Calculation)