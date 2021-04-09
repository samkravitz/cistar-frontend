import React from 'react'
import { connect } from 'react-redux'
import actions from './redux/actions'
import { Button } from 'reactstrap'

const Modal = props => {
    if (!props.modalOpen)
        return null

    // color of cameoProgress
    // word to far right of cameo table progress
    let cameoProgress = ''
    if (props.cameoErrors.length === 0) {
        if (props.cameoTableComplete)
            cameoProgress = 'done'
    } else if (props.cameoErrors.includes('No compatiblity matrix formed')) {
        cameoProgress = 'failed'
    } else {
        cameoProgress = 'check errors'
    }

    const cameoColor = (cameoProgress === '' || cameoProgress === 'done') ? '' : '#c71e1e'

    return (
        <div className="rheact-modal" style={styles.main}>
            <div className="modal-main" style={styles.content}>
                <h3>Generating Report</h3>

                <div style={styles.modalItem}>
                    <span>Calculations</span>
                    {
                        props.calculationBlockComplete &&
                        <span>done</span>
                    }
                </div>

                <div style={styles.modalItem}>
                    <span>Hazard Statements</span>
                    <span>done</span>
                </div>

                <div style={styles.modalItem}>
                    <span>Hazard Matrix</span>
                    {
                        props.hazardMatrixComplete &&
                        <span>done</span>
                    }
                </div>

                <div style={styles.modalItem}>
                    <span>Cameo Table</span>
                    <span style={{ color: cameoColor }}>{cameoProgress}</span>
                </div>

                <div style={{ ...styles.modalItem, justifyContent: 'flex-end', paddingTop: '1em' }}>
                    {
                        props.reportComplete &&
                        <Button
                            onClick={props.toggleModal}
                            color='primary'
                        >
                            Okay
                    </Button>
                    }
                </div>

            </div>
        </div>
    )
}

const styles = {
    main: {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.6)',
        display: 'block',
    },

    content: {
        position: 'fixed',
        background: 'white',
        width: '50vw',
        height: 'auto',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        borderRadius: '5px',
        cursor: 'wait',
        padding: '2em 1em',
    },

    modalItem: {
        display: 'flex',
        justifyContent: 'space-between'
    },

    error: {
        display: 'flex',
        fontSize: '85%',
        color: '#c71e1e',
        padding: '0 2em',
    }
}

const mapStateToProps = state => ({
    calculationInProgress: state.status.calculationInProgress,
    reportComplete: state.status.reportComplete,
    modalOpen: state.status.modalOpen,

    hazardMatrixComplete: state.status.hazardMatrixComplete,
    calculationBlockComplete: state.status.calculationBlockComplete,
    cameoTableComplete: state.status.cameoTableComplete,

    cameoErrors: state.report.cameoErrors,

    route: state.route.route,
})

const mapDispatchToProps = {
    toggleModal: actions.status.toggleModal
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)