import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'

import Matrix from './Matrix'
import HTable from './HTable'
import Calculation from './Calculation'
import Cameo from './Cameo'
import Alert from './Alert'

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
    if (!props.reportComplete)
        return null;

    return (
        <div className='Report' id='Report' style={styles.main}>
            <h2>Report</h2>
            <Calculation />
            <Alert />
            <HTable />
            <Matrix />
            <Cameo />

            <Button
                color="primary"
                style={{ margin: '2em 0' }}
                onClick={props.saveAsPdf}
            >
                Save Report
            </Button>
        </div>
    )
}

const mapStateToProps = state => ({
    cameoTable: state.report.cameoTable,
    reportComplete: state.status.reportComplete,
})

export default connect(mapStateToProps)(Report)