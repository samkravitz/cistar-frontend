import React from 'react'
import {
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'
import { connect } from 'react-redux'
import actions from '../redux/actions'

const Header = props => {
    return (
        <div className="Header" style={styles.main}>
            <h1 style={styles.rheact}>RHEACT</h1>
            <h3 style={styles.rheactLabel}>Reactive Hazards Evaluation & Analysis Compilation Tool</h3>
            <Nav style={styles.nav}>
                <NavItem>
                    <NavLink href='#' onClick={props.setHome}>Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href='#' onClick={props.setUserGuide}>User Guide</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href='#' onClick={props.setPublications}>Publications</NavLink>
                </NavItem>
            </Nav>
        </div>
    )
}

const styles = {
    main: {
        backgroundColor: '#f1f1f1',
        padding: '1em 3em',
    },

    rheact: {
        fontSize: '3.5rem',
        textAlign: 'center',
        paddingBottom: '0'
    },

    rheactLabel: {
        textAlign: 'center',
        fontSize: '1.25rem',
    },

    nav: {
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '1em',
    }

}

const mapDispatchToProps = {
    setHome: actions.route.setHome,
    setUserGuide: actions.route.setUserGuide,
    setPublications: actions.route.setPublications,
}

export default connect(null, mapDispatchToProps)(Header)