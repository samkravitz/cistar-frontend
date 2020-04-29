import React from 'react'
import { connect } from 'react-redux'

import Matrix from './Matrix'
import HTable from './HTable'
import Calculation from './Calculation'
import Cameo from './Cameo'

const styles = {
    main: {
        padding: '1rem',
        paddingTop: '2rem',
        width: '100vw',
        textAlign: 'center',
    },
}

const Report = props => {
    // if report has not been submitted yet return
    if (props.cameoTable === '') return null;

    return (
        <div className='Report' style={styles.main}>
            <h2>Report</h2>
            <Calculation />
            <HTable />
            <Matrix />
            <Cameo />
        </div>
    )
}

const mapStateToProps = state => ({
    cameoTable: state.report.cameoTable,
})

export default connect(mapStateToProps)(Report)