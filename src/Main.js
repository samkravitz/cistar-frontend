/*
 * Main component - houses the 3 main components of the app
 * and the modal with calculation status information
 *
 */

import React from 'react'
import { connect } from 'react-redux'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
import actions from './redux/actions'

import Header from './header/Header'
import Body from './body/Body'
import Report from './report/Report'

const Main = props => {

    const toggle = () => {
        props.toggleModal()
    }

    return (
        <div className="Main">
            <Header />
            <Body />
            <Report />

            {/* calculation status information modal */}
            <Modal
                className='reactionInfoModal'
                isOpen={props.modalOpen}
                size='lg'
                style={{ cursor: 'wait' }}
            >
                <ModalHeader>Generating report</ModalHeader>
                <ModalBody>
                    <div>
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
                            {
                                props.cameoTableComplete &&
                                <span>done</span>
                            }
                        </div>
                        {
                            props.cameoErrors.map(err => 
                                <span style={styles.error}>{err}</span>
                            )
                        }
                    </div>
                </ModalBody>
                <ModalFooter>
                    { 
                    props.reportComplete && 
                    <Button color="primary" onClick={toggle}>Okay</Button>
                    }
                </ModalFooter>
            </Modal>
        </div>
    )
}

const styles = {
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
})

const mapDispatchToProps = {
    toggleModal: actions.status.toggleModal
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)