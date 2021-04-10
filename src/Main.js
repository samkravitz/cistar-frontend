/*
 * Main component - houses the 3 main components of the app
 * and the modal with calculation status information
 *
 */

import React from 'react'
import { connect } from 'react-redux'
import Modal from './components/Modal'
import actions from './redux/actions'

import Header from './header/Header'
import Body from './body/Body'
import Params from './header/Params'
import Report from './report/Report'
import UserGuide from './body/UserGuide'
import Publications from './body/Publications'

const Main = props => {

    const home = props.route === 'HOME' ? true : false
    const userGuide = props.route === 'USER_GUIDE' ? true : false
    const publications = props.route === 'PUBLICATIONS' ? true : false

    return (
        <div className="Main">
            <Header />
            { home  &&
            <>
                <Params />
                <Body />
                <Report saveAsPdf={props.saveAsPdf}/>
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
            <Modal />
            
        </div>
    )
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