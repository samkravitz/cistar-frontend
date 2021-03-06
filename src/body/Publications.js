import React from 'react'

const Publications = () => {
    return (
        <div className='Publications' style={style}>
            <h1>Publications</h1>
            <a
                href='https://pubs.acs.org/doi/full/10.1021/acs.chas.1c00006'
                style={{ fontSize: '1.25em' }}
            >
                Promoting a Safe Laboratory Environment Using the Reactive Hazard Evaluation and Analysis Compilation Tool
            </a>
        </div>
    )
}

const style = {
    textAlign: 'center',
    height: '85vh',
    paddingTop: '2em',
}

export default Publications