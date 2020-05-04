/*
 * Main component - houses the 3 main components of the app
 * and the modal with calculation status information
 *
 */

import React from 'react'
import { connect } from 'react-redux'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'

import Header from './header/Header'
import Body from './body/Body'
import Report from './report/Report'

const Main = props => {
    const modal = false;
    const toggle = () => {}
    return (
        <div className="Main">
            <Header />
            <Body />
            <Report />

            {/* calculation status information modal */}
            <Modal className='reactionInfoModal' isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

const mapStateToProps = state => ({
    calculationInProgress: state.status.calculationInProgress,
    reportComplete: state.status.reportComplete,
})

export default connect(mapStateToProps)(Main)