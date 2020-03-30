import React from 'react'

const styles = {
    main: {
        padding: '1rem',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',

    },

    table: {
        borderSpacing: '0',
        border: '1px solid black',
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
    }
}

const Matrix = ({ matrix }) => {
    const columns = [
        'Name',
        'Flammability',
        'Reactivity',
        'Skin absorption',
        'Skin contact',
        'Eye contact',
        'Respiratory',
        'Carcinogen',
        'Reproductive hazard',
        'Sensitizer',
        'Other',
        'Ingestion',
    ]

    return (
        <div className='Matrix' style={styles.main}>
            <table style={styles.table}>
                <thead>
                    <tr>
                        {columns.map((column, i) => (
                            <th style={styles.th} key={i}>{column}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {matrix.map((row, i) => (
                        <tr key={i}>
                            <td style={{ ...styles.th, }}>{row.name}</td>
                            <td style={{ ...styles.th, color: row.flammability, backgroundColor: row.flammability }}>{row.flammability}</td>
                            <td style={{ ...styles.th, color: row.reactivity, backgroundColor: row.reactivity }}>{row.reactivity}</td>
                            <td style={{ ...styles.th, color: row.skinAbsorption, backgroundColor: row.skinAbsorption }}>{row.skinAbsorption}</td>
                            <td style={{ ...styles.th, color: row.skinContact, backgroundColor: row.skinContact }}>{row.skinContact}</td>
                            <td style={{ ...styles.th, color: row.eyeContact, backgroundColor: row.eyeContact }}>{row.eyeContact}</td>
                            <td style={{ ...styles.th, color: row.respiratory, backgroundColor: row.respiratory }}>{row.respiratory}</td>
                            <td style={{ ...styles.th, color: row.carcinogen, backgroundColor: row.carcinogen }}>{row.carcinogen}</td>
                            <td style={{ ...styles.th, color: row.reproductiveHazard, backgroundColor: row.reproductiveHazard }}>{row.reproductiveHazard}</td>
                            <td style={{ ...styles.th, color: row.sensitizer, backgroundColor: row.sensitizer }}>{row.sensitizer}</td>
                            <td style={{ ...styles.th, color: row.other, backgroundColor: row.other }}>{row.other}</td>
                            <td style={{ ...styles.th, color: row.ingestion, backgroundColor: row.ingestion }}>{row.ingestion}</td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Matrix