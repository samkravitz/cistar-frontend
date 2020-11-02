import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

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
    if (! props.reportComplete) return null;

    return (
        <div className='Report' id='Report' style={styles.main}>
            <h2>Report</h2>
            <Calculation />
            <HTable />
            <Matrix />
            <Cameo />

            <Button
                color="primary"
                onClick={() => {
                    html2canvas(document.getElementById('Report')).then(canvas => {
                            console.log(document.getElementById('#Report'))
                            console.log(document.getElementById('Report'))
                            console.log('document: ', document.body)
                            console.log(canvas)
                            console.log('hi')
                            const pdf = new jsPDF()
                            pdf.addImage(canvas.toDataURL(), 'JPEG', 0, 0)
                            window.open(canvas.toDataURL())
                            pdf.save('report.pdf')
                    })
                    // }
                    // var pdf = new jsPDF('p','pt','a4');

                    // pdf.addHTML(document.body,function() {
                    //     pdf.output('datauri');
                    // });

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