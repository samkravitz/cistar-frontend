import React from 'react'

import { connect } from 'react-redux'

const styles = {
    main: {
        padding: '1rem',
        width: '100vw',
    },

    table: {
        borderCollapse: 'separate',
        borderSpacing: '0px',
        border: '1px solid black',
        align: 'center'
    },

    th: {
        margin: '0',
        padding: '0.5rem',
        borderBottom: '1px solid black',
        borderRight: '1px solid black',
        lineHeight: '1.5',
    },

    td: {
        margin: '0',
        padding: '0.5rem',
        borderBottom: '1px solid black',
        borderRight: '1px solid black'
    },

    caption: {
        captionSide: 'top',
        color: 'black'
    }
}

const HTable = ({ hNums }) => {
    const columns = [
        'Name',
        'H-Number',
        'H-Statement',
    ]

    return (
        <div className='HTable' style={styles.main}>
            <table align='center' style={styles.table}>
                <caption style={styles.caption}>Hazard Statements</caption>
                <thead>
                    <tr>
                        {columns.map((column, i) => (
                            <th style={styles.th} key={i}>{column}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {Object.keys(hNums).map((row, i) => (
                        <tr key={i}>
                            <td style={styles.td}>{row}</td>

                            <td style={styles.td}>
                                <div style={{display: 'flex', flexDirection: 'column' }}>
                                    {Object.keys(hNums[row]).map((hNum, j) => (
                                        <span key={j}>{hNum}</span>
                                    ))}
                                </div>     
                            </td>

                            <td style={styles.td}>
                                <div style={{display: 'flex', flexDirection: 'column' }}>
                                    {Object.values(hNums[row]).map((hNum, j) => (
                                        <span key={j}>{hNum}</span>
                                    ))}
                                </div>     
                            </td>
                            {/* <td>
                                <table>
                                    <tbody style={{ align: 'center' }}>
                                        {Object.keys(hNums[row]).map((hNum, j) => (
                                            <tr key={j}><td>{hNum}</td></tr>
                                        ))}
                                    </tbody>
                                </table>
                            </td>
                
                            <td style={styles.td}>
                                <table>
                                    <tbody>
                                        {Object.values(hNums[row]).map((hNum, j) => (
                                            <tr key={j}><td>{hNum}</td></tr>
                                        ))}
                                    </tbody>
                                </table>
                            </td> */}
                        </tr>

                    ))}
                </tbody>
            </table>

        </div>
    )
}

const mapStateToProps = state => ({
    hNums: state.report.hNums,
})

export default connect(mapStateToProps)(HTable)