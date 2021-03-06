import React, { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import { Button } from 'reactstrap'

import guide from '../images/RHEACT-USER-GUIDE.pdf'

const UserGuide = () => {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }

    const forward = () => {
        if (pageNumber < numPages)
            setPageNumber(pageNumber + 1)
    }

    const back = () => {
        if (pageNumber > 1)
            setPageNumber(pageNumber - 1)
    }

    return (
        <div className='UserGuide' style={{ paddingTop: '2em' }}>
            <div className='ButtonBar' style={styles.buttonBar}>
                <Button
                    color='primary'
                    onClick={back}>
                    <i class="fas fa-chevron-left"></i>
                </Button>
                <p style={{ padding: '15px 15px 0px 15px', textAlign: 'center' }}>Page {pageNumber} of {numPages}</p>
                <Button
                    color='primary'
                    onClick={forward}
                >
                    <i class="fas fa-chevron-right"></i>
                </Button>
            </div>



            <div className='Document' style={styles.document}>
                <Document
                    file={guide}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page
                        pageNumber={pageNumber}
                        scale={1.5}
                    />
                </Document>
            </div>
        </div >
    )
}

const styles = {
    document: {
        display: 'flex',
        justifyContent: 'center'
    },

    buttonBar: {
        display: 'flex',
        justifyContent: 'center',
    },

}

export default UserGuide