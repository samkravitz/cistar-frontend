import React from 'react'
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

import Main from './Main'

const App = () => {

    const saveAsPdf = () => {
        window.scrollTo(0, 0)
        //https://stackoverflow.com/questions/24069124/how-to-save-a-image-in-multiple-pages-of-pdf-using-jspdf
        const app = document.getElementById('App')
        html2canvas(app)
            .then(canvas => {
                const doc = new jsPDF('p', 'mm')
                doc.deletePage(1)

                const image = canvas.toDataURL('image/png')

                // width, height of a4 paper in mm
                const width = 210
                const height = 297
                const imgHeight = canvas.height * width / canvas.width

                let heightLeft = imgHeight
                let position = 0

                do {
                    position = heightLeft - imgHeight
                    doc.addPage()
                    doc.addImage(image, 'PNG', 0, position, width, imgHeight)
                    heightLeft -= height
                } while (heightLeft >= 0)

                doc.save('report.pdf');
            })
    }

    return (
        <div className='App' id='App'>
            <Main saveAsPdf={saveAsPdf}/>
        </div>
    )
}

export default App