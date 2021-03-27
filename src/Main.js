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
import Params from './header/Params'
import Report from './report/Report'
import UserGuide from './body/UserGuide'
import Publications from './body/Publications'

const Main = props => {

    const toggle = () => {
        props.toggleModal()
    }

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

    // color of cameoProgress
    const cameoColor = (cameoProgress === '' || cameoProgress === 'done') ? '' : '#c71e1e'

    const home = props.route === 'HOME' ? true : false
    const userGuide = props.route === 'USER_GUIDE' ? true : false
    const publications = props.route === 'PUBLICATIONS' ? true : false

    return (
        <div className="Main">
            <Header />
            {home  &&
            <>
                <Params />
                <Body />
                <Report />
            </>
            }

            {
                userGuide &&
                <UserGuide />
            }

            {
                publications &&
                <Publications />
            }

            <div className='Survey' style={{ textAlign: 'center' }}>
                Please help us improve this tool by taking this <a href='https://docs.google.com/forms/d/e/1FAIpQLSetuP7QoIw6GYkwH9Ji7yP5WD4BWb85heafLaojoJ92zqXuvg/viewform?usp=sf_link'>survey</a>.
            </div>

            {/* <a href='https://purdue.ca1.qualtrics.com/jfe/form/SV_9EMVzeLuuLq27rv'>survey</a>. */}
            
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
                            <span style={{ color: cameoColor }}>{cameoProgress}</span>
                        </div>
                        {
                            props.cameoErrors.map((err, i) =>
                                <span style={styles.error} key={i}>{err}</span>
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

    route: state.route.route,
})

const mapDispatchToProps = {
    toggleModal: actions.status.toggleModal
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)