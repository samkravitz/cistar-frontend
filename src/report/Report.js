import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'
import axios from 'axios'
import server from '../server'
import download from 'downloadjs'
import { store } from '../index'

import { renderToString } from 'react-dom/server'

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
                onClick={async () => {

                    try {
                        const component = <div className='Report' id='Report' style={styles.main}>
                            <h2>Report</h2>
                            <Calculation store={store} />
                            <Alert       store={store} />
                            <HTable      store={store} />
                            <Matrix      store={store} />
                            <Cameo       store={store} />
                        </div>

                        const report = await axios.get(`${server}/save`, {
                            params: {
                                data: encodeURI(renderToString(component)),
                            },
                            responseType: 'blob'
                        })

                        download(new Blob([report.data]), 'report.pdf', 'application/pdf')
                    } catch (error) {
                        alert('Unable to save report as PDF')
                    }
                }}
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