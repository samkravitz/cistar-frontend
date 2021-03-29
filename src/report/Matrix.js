import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Popover, PopoverBody } from 'reactstrap'
import { StyleSheet, css } from 'aphrodite'

import green from '../images/reactivity/safe_thick.png'
import yellow from '../images/reactivity/caution_thick.png'
import orange from '../images/reactivity/warning_thick.png'
import red from '../images/reactivity/danger_thick.png'

const links = [
    'https://www.osha.gov/Publications/osha3151.pdf',
    'https://ehs.ucmerced.edu/researchers-labs/ppe/selection',
    'https://www.era-environmental.com/blog/personal-protective-equipment-how-to-read-an-sds',
    'https://www.usf.edu/administrative-services/environmental-health-safety/documents/hazard_control_ppe_guide.pdf',
    'https://www.ehs.washington.edu/system/files/resources/ppeguidelines.pdf',
    'https://www.purdue.edu/ehps/rem/laboratory/Personal/PPE/gloveselection.pdf',
]

const Matrix = ({ matrix, matrixErrors }) => {

    const [open, setOpen] = useState(false)

    // return null on error
    if (matrixErrors !== '')
        return null

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

    const newMatrix = []

    matrix.forEach(element => {
        newMatrix.push({ ...element })
    })

    newMatrix.forEach(element => {
        switch (element.carcinogen) {
            case '#7fd13b':
                element.carcinogenPic = green
                break
            case '#ffff00':
                element.carcinogenPic = yellow
                break
            case '#ffa500':
                element.carcinogenPic = orange
                break
            case '#c00000':
                element.carcinogenPic = red
                break
            default:
                console.log('Error: Unknown value')
        }

        switch (element.eyeContact) {
            case '#7fd13b':
                element.eyeContactPic = green
                break
            case '#ffff00':
                element.eyeContactPic = yellow
                break
            case '#ffa500':
                element.eyeContactPic = orange
                break
            case '#c00000':
                element.eyeContactPic = red
                break
            default:
                console.log('Error: Unknown value')
        }

        switch (element.flammability) {
            case '#7fd13b':
                element.flammabilityPic = green
                break
            case '#ffff00':
                element.flammabilityPic = yellow
                break
            case '#ffa500':
                element.flammabilityPic = orange
                break
            case '#c00000':
                element.flammabilityPic = red
                break
            default:
                console.log('Error: Unknown value')
        }

        switch (element.ingestion) {
            case '#7fd13b':
                element.ingestionPic = green
                break
            case '#ffff00':
                element.ingestionPic = yellow
                break
            case '#ffa500':
                element.ingestionPic = orange
                break
            case '#c00000':
                element.ingestionPic = red
                break
            default:
                console.log('Error: Unknown value')
        }

        switch (element.other) {
            case '#7fd13b':
                element.otherPic = green
                break
            case '#ffff00':
                element.otherPic = yellow
                break
            case '#ffa500':
                element.otherPic = orange
                break
            case '#c00000':
                element.otherPic = red
                break
            default:
                console.log('Error: Unknown value')
        }

        switch (element.reactivity) {
            case '#7fd13b':
                element.reactivityPic = green
                break
            case '#ffff00':
                element.reactivityPic = yellow
                break
            case '#ffa500':
                element.reactivityPic = orange
                break
            case '#c00000':
                element.reactivityPic = red
                break
            default:
                console.log('Error: Unknown value')
        }

        switch (element.reproductiveHazard) {
            case '#7fd13b':
                element.reproductiveHazardPic = green
                break
            case '#ffff00':
                element.reproductiveHazardPic = yellow
                break
            case '#ffa500':
                element.reproductiveHazardPic = orange
                break
            case '#c00000':
                element.reproductiveHazardPic = red
                break
            default:
                console.log('Error: Unknown value')
        }

        switch (element.respiratory) {
            case '#7fd13b':
                element.respiratoryPic = green
                break
            case '#ffff00':
                element.respiratoryPic = yellow
                break
            case '#ffa500':
                element.respiratoryPic = orange
                break
            case '#c00000':
                element.respiratoryPic = red
                break
            default:
                console.log('Error: Unknown value')
        }

        switch (element.sensitizer) {
            case '#7fd13b':
                element.sensitizerPic = green
                break
            case '#ffff00':
                element.sensitizerPic = yellow
                break
            case '#ffa500':
                element.sensitizerPic = orange
                break
            case '#c00000':
                element.sensitizerPic = red
                break
            default:
                console.log('Error: Unknown value')
        }

        switch (element.skinAbsorption) {
            case '#7fd13b':
                element.skinAbsorptionPic = green
                break
            case '#ffff00':
                element.skinAbsorptionPic = yellow
                break
            case '#ffa500':
                element.skinAbsorptionPic = orange
                break
            case '#c00000':
                element.skinAbsorptionPic = red
                break
            default:
                console.log('Error: Unknown value')
        }

        switch (element.skinContact) {
            case '#7fd13b':
                element.skinContactPic = green
                break
            case '#ffff00':
                element.skinContactPic = yellow
                break
            case '#ffa500':
                element.skinContactPic = orange
                break
            case '#c00000':
                element.skinContactPic = red
                break
            default:
                console.log('Error: Unknown value')
        }
    })

    return (
        <div className='Matrix' style={styles.main}>
            <table align='center' style={styles.table}>
                <caption style={styles.caption}>
                    Hazard Matrix
                    <span
                        id='matrixInfo'
                        className={css(infoIconStyles.main)}
                        onMouseOver={() => setOpen(true)}
                        onMouseOut={() => setOpen(false)}
                    >
                        <i className="far fa-question-circle fa-1x"></i>
                    </span>    
                </caption>
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
                            <td style={{ ...styles.th, color: row.flammability, backgroundColor: row.flammability }}><img src={newMatrix[i].flammabilityPic} alt="green" style={styles.image}/></td>
                            <td style={{ ...styles.th, color: row.reactivity, backgroundColor: row.reactivity }}><img src={newMatrix[i].reactivityPic} alt="green" style={styles.image}/></td>
                            <td style={{ ...styles.th, color: row.skinAbsorption, backgroundColor: row.skinAbsorption }}><img src={newMatrix[i].skinAbsorptionPic} alt="green" style={styles.image}/></td>
                            <td style={{ ...styles.th, color: row.skinContact, backgroundColor: row.skinContact }}><img src={newMatrix[i].skinContactPic} alt="green" style={styles.image}/></td>
                            <td style={{ ...styles.th, color: row.eyeContact, backgroundColor: row.eyeContact }}><img src={newMatrix[i].eyeContactPic} alt="green" style={styles.image}/></td>
                            <td style={{ ...styles.th, color: row.respiratory, backgroundColor: row.respiratory }}><img src={newMatrix[i].respiratoryPic} alt="green" style={styles.image}/></td>
                            <td style={{ ...styles.th, color: row.carcinogen, backgroundColor: row.carcinogen }}><img src={newMatrix[i].carcinogenPic} alt="green" style={styles.image}/></td>
                            <td style={{ ...styles.th, color: row.reproductiveHazard, backgroundColor: row.reproductiveHazard }}><img src={newMatrix[i].reproductiveHazardPic} alt="green" style={styles.image}/></td>
                            <td style={{ ...styles.th, color: row.sensitizer, backgroundColor: row.sensitizer }}><img src={newMatrix[i].sensitizerPic} alt="green" style={styles.image}/></td>
                            <td style={{ ...styles.th, color: row.other, backgroundColor: row.other }}><img src={newMatrix[i].otherPic} alt="green" style={styles.image}/></td>
                            <td style={{ ...styles.th, color: row.ingestion, backgroundColor: row.ingestion }}><img src={newMatrix[i].ingestionPic} alt="green" style={styles.image}/></td>
                        </tr>

                    ))}
                </tbody>
            </table>
            <div className="Legend" style={styles.legend} >
                <span>Legend:</span>
                <div style={styles.legendItem}>
                    <img src={green} alt="green" style={styles.image}/>
                    Safe
                </div>
                <div style={styles.legendItem}>
                    <img src={yellow} alt="yellow" style={styles.image}/>
                    Caution
                </div>
                <div style={styles.legendItem}>
                    <img src={orange} alt="orange" style={styles.image}/>
                    Warning
                </div>
                <div style={styles.legendItem}>
                    <img src={red} alt="red" style={styles.image}/>
                    Danger
                </div>
            </div>

            <div className='Links' style={{ textAlign: 'center', padding: '35px 0' }}>
                The following links can guide the PPE selection process:
                {
                    links.map((link, i) => <React.Fragment key={i}><br/><a href={link}>{link}</a></React.Fragment>)
                }
            </div>

            {/* Popovers */}
            <Popover placement="right" isOpen={open} target='matrixInfo'>
                <PopoverBody>Generated by parsing the H-phrases from the SDS and classifying the system components based on the handling hazards.</PopoverBody>
            </Popover>
        </div>
    )
}

const styles = {
    main: {
        padding: '1rem',
        width: '100vw',
    },

    table: {
        borderSpacing: '0',
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
        color: 'black',
    },

    legend: {
        display: 'flex',
        justifyContent: 'center',
        color: 'black',
    },

    legendItem: {
        padding: '0em 1em',
    },

    image: {
        margin: '0px 6px',
        width: '20px',
        height: '20px',
    }
}

const infoIconStyles = StyleSheet.create({
    main: {
        paddingLeft: '0.5em',

        ':hover': {
            color: '#3366ff',
            cursor: 'pointer'
        },
    },
})

const mapStateToProps = state => ({
    matrix: state.report.matrix,
    matrixErrors: state.report.matrixErrors,
})

export default connect(mapStateToProps)(Matrix)