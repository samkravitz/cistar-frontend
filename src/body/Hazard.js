import React, { useState } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { Popover, PopoverBody } from 'reactstrap'

const Hazard = () => {

    const [numberInfoOpen, setNumberInfoOpen] = useState(false)
    const [statementInfoOpen, setStatementInfoOpen] = useState(false)

    return (
        <div className='Hazard'>
            <div style={style}>
                <h6>Hazard Numbers</h6>
                <span
                    id='numinfo'
                    className={css(infoIconStyles.infoIconStyles)}
                    onMouseOver={() => setNumberInfoOpen(true)}
                    onMouseOut={() => setNumberInfoOpen(false)}
                >
                    <i className="far fa-question-circle fa-1x"></i>
                </span>
            </div>


            <div style={style}>
                <h6>Hazard Statements</h6>
                <span
                    id='statementinfo'
                    className={css(infoIconStyles.infoIconStyles)}
                    onMouseOver={() => setStatementInfoOpen(true)}
                    onMouseOut={() => setStatementInfoOpen(false)}
                >
                    <i className="far fa-question-circle fa-1x"></i>
                </span>
            </div>

            {/* Popovers */}
            <Popover placement='right' isOpen={numberInfoOpen} target='numinfo'>
                <PopoverBody>Please sepparate H-Numbers with a comma</PopoverBody>
            </Popover>

            <Popover placement='right' isOpen={statementInfoOpen} target='statementinfo'>
                <PopoverBody>Please sepparate H-Statements with a comma</PopoverBody>
            </Popover>
        </div>
    )
}

const infoIconStyles = StyleSheet.create({
    infoIconStyles: {
        paddingLeft: '0.5em',

        ':hover': {
            color: '#3366ff',
            cursor: 'pointer'
        },
    }
})

const style = {
    display: 'flex'
}

export default Hazard