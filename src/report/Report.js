import React from 'react'
import { connect } from 'react-redux'

import Matrix from './Matrix'
import HTable from './HTable'
import Calculation from './Calculation'

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
    if (props.matrix.length === 0) return null;

    return (
        <div className='Report' style={styles.main}>
            <h2>Report</h2>
            <Calculation />
            <HTable />
            <Matrix />
        </div>
    )
}

const mapStateToProps = state => ({
    matrix: state.report.matrix,
})

export default connect(mapStateToProps)(Report)