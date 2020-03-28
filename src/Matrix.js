import React from 'react'
import { useTable } from 'react-table'

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
        borderRight: '1px solid black'
    },

    td: {
        margin: '0',
        padding: '0.5rem',
        borderBottom: '1px solid black',
        borderRight: '1px solid black'
    }
}

const Matrix = ({ matrix }) => {
    const columns = React.useMemo(
        () => [
            { Header: 'Name', accessor: 'name'},
            { Header: 'Flammability', accessor: 'flammability' },
            { Header: 'Reactivity', accessor: 'reactivity' },
            { Header: 'Skin absorption', accessor: 'skinAbsorption' },
            { Header: 'Skin contact', accessor: 'skinContact' },
            { Header: 'Eye contact', accessor: 'eyeContact' },
            { Header: 'Respiratory', accessor: 'respiratory' },
            { Header: 'Carcinogen', accessor: 'carcinogen' },
            { Header: 'Reproductive hazard', accessor: 'reproductiveHazard' },
            { Header: 'Sensitizer', accessor: 'sensitizer' },
            { Header: 'Other', accessor: 'other' },
            { Header: 'Ingestion', accessor: 'ingestion' }
        ],
        []
    )

    const data = React.useMemo(() => [...matrix], [matrix])

    console.log(data)

    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })

    return (
        <div className='Matrix' style={styles.main}>
            <table style={styles.table} {...getTableProps()}>
                <thead style={styles.th}>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th style={styles.th} {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td style={{ ...styles.th, color: cell.value, backgroundColor: cell.value }} {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Matrix