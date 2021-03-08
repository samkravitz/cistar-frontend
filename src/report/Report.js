import React, { Component } from 'react'
import { connect, Provider } from 'react-redux'
import { Button } from 'reactstrap'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import ReactDOMServer from 'react-dom/server'
import ReactToPdf from 'react-to-pdf'
import ReactPDF, { PDFDownloadLink, Document, Page } from '@react-pdf/renderer'
import { store } from '../index'
import 'jspdf-autotable'

import Matrix from './Matrix'
import HTable from './HTable'
import Calculation from './Calculation'
import Cameo from './Cameo'
import Alert from './Alert'

const styles = {
    main: {
        padding: '1rem',
        paddingTop: '2rem',
        width: '100vw',
        textAlign: 'center',
    },
}

const saveReport = () => {
    // get information we want to save from the store
    const { cameoTable, rawCameoTable, hNums, matrix } = store.getState().report

   console.log(cameoTable)

   const html = `<table id="compat_chart" cellspacing="0" cellpadding="0" summary="lookup table for mixing pairs of chemicals">

<tbody><tr>
	<td>&nbsp;</td>
	<th id="col0" axis="chemical two">
        
Ethyl Alcohol, pure 
    </th>
</tr>
<tr>
	<th id="row1" axis="chemical one">
        
Calcium hypochlorite 
    </th>

<td id="cell_1" class="compatChartCell">



<div><strong>Incompatible</strong>&nbsp;<img src="/images/reactivity/red_incompatible.png" alt="(Red)" width="12" height="12"></div>

	Corrosive<br>
	Explosive<br>
	Flammable<br>
	Generates&nbsp;gas<br>
	Generates&nbsp;heat<br>
	Intense&nbsp;or&nbsp;explosive&nbsp;reaction<br>
	Toxic<br>

&nbsp;
</td>
	<th id="col1" axis="chemical two">
        
Calcium hypochlorite 
    </th>
</tr>
<tr>
	<th id="row2" axis="chemical one">
        
Calcium chloride 
    </th>

<td id="cell_2" class="compatChartCell">



<div><strong>Compatible</strong>&nbsp;<img src="/images/reactivity/green_compatible.png" alt="(Green)" width="12" height="12"></div>


&nbsp;
</td>

<td id="cell_3" class="compatChartCell">



<div><strong>Incompatible</strong>&nbsp;<img src="/images/reactivity/red_incompatible.png" alt="(Red)" width="12" height="12"></div>

	Explosive<br>
	Generates&nbsp;gas<br>
	Generates&nbsp;heat<br>
	Intense&nbsp;or&nbsp;explosive&nbsp;reaction<br>

&nbsp;
</td>
	<th id="col2" axis="chemical two">
        
Calcium chloride 
    </th>
</tr>
<tr>
	<th id="row3" axis="chemical one">
        
Carbon dioxide 
    </th>

<td id="cell_4" class="compatChartCell">



<div><strong>Compatible</strong>&nbsp;<img src="/images/reactivity/green_compatible.png" alt="(Green)" width="12" height="12"></div>


&nbsp;
</td>

<td id="cell_5" class="compatChartCell">



<div><strong>Caution</strong>&nbsp;<img src="/images/reactivity/yellow_caution.png" alt="(Yellow)" width="12" height="12"></div>

	Generates&nbsp;heat<br>

&nbsp;
</td>

<td id="cell_6" class="compatChartCell">



<div><strong>Compatible</strong>&nbsp;<img src="/images/reactivity/green_compatible.png" alt="(Green)" width="12" height="12"></div>


&nbsp;
</td>
	<th id="col3" axis="chemical two">
        
Carbon dioxide 
    </th>
</tr>
<tr>
	<th id="row4" axis="chemical one">
        
Water 
    </th>

<td id="cell_7" class="compatChartCell">



<div><strong>Compatible</strong>&nbsp;<img src="/images/reactivity/green_compatible.png" alt="(Green)" width="12" height="12"></div>


&nbsp;
</td>

<td id="cell_8" class="compatChartCell">



<div><strong>Incompatible</strong>&nbsp;<img src="/images/reactivity/red_incompatible.png" alt="(Red)" width="12" height="12"></div>

	Corrosive<br>
	Flammable<br>
	Generates&nbsp;gas<br>
	Generates&nbsp;heat<br>
	Intense&nbsp;or&nbsp;explosive&nbsp;reaction<br>
	Toxic<br>

&nbsp;
</td>

<td id="cell_9" class="compatChartCell">



<div><strong>Caution</strong>&nbsp;<img src="/images/reactivity/yellow_caution.png" alt="(Yellow)" width="12" height="12"></div>

	Corrosive<br>
	Generates&nbsp;gas<br>
	Generates&nbsp;heat<br>

&nbsp;
</td>

<td id="cell_10" class="compatChartCell">



<div><strong>Caution</strong>&nbsp;<img src="/images/reactivity/yellow_caution.png" alt="(Yellow)" width="12" height="12"></div>

	Corrosive<br>
	Generates&nbsp;heat<br>

&nbsp;
</td>
</tr>
</tbody></table>`


const css = `.div {
    display: flex;
    justify-content: center;
}

.table {
    background-color: white;
}

.tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
}

.tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
}

.td {
    border: 1px solid #B4B4B4;
    padding-top: 6px;
    padding-left: 18px;
    padding-bottom: 6px;
    padding-right: 6px;
    text-align: left;
    vertical-align: top;
}

.th {
    border: 1px solid #B4B4B4;
    background-color: #E0EEE0;
    padding: 6px;
    font-weight: normal;
    text-align: left;
    vertical-align: middle;
}

.caption {
    caption-side: top;
    color: black;
    display: flex;
    justify-content: center;
}`

    const table = document.createElement('table')
    table.innerHTML = html.trim()
    table.style = css;
    table.id = 'cameo'
    document.body.appendChild(table)
    console.log(table)

    //const report = new jsPDF()

    // report.html(table, {
    //     callback: report => {
    //         report.save()
    //     },
    //     image: {
    //         type: 'jpeg'
    //     },
    //     html2canvas: {
    //         width: '180',
    //         height: '180',
    //         windowWidth: '180',
    //         windowHeight: '180',
    //         scale: '.1'
    //     },
    //     x: 10,
    //     y: 100,
    //     width: '180',
    //         height: '180',
    //         windowWidth: '180',
    //         windowHeight: '180',
    // })

    // html2canvas(table).then(canvas => {
    //     //console.log('hello world')
    //     //console.log(canvas)
    //     //console.log()
    //     canvas.toBlob(function(blob) {
    //         // Generate file download
    //         window.saveAs(blob, "yourwebsite_screenshot.png");
    //     });
    //         var myImage = canvas.toDataURL("image/jpeg,1.0");
    //         //console.log(myImage);
    //         //console.log(canvas.width, canvas.height)
            
    //                 // Adjust width and height
    //                 var imgWidth = (canvas.width * 20) / 120;
    //                 var imgHeight = (canvas.height * 20) / 120; 
    //                 //console.log(imgWidth, imgHeight);
    //                 //console.log(document.getElementById("cap"))
    //                 // jspdf changes
    //                 //var pdf = new jsPDF('p', 'pt', 'a4');
    //                 report.addImage(myImage, 'JPEG', 15, 2, imgWidth, imgHeight); // 2: 19
    //                 report.save('Report1.pdf');
    //                 console.log('saved')
    //                 //pdf.setFontSize(1)
    //                 // pdf.html(document.getElementById('cap'), {
    //                 //     callback: function(pdf) { pdf.save('web.pdf') },
    //                 //     x: 0,
    //                 //     y: 0
    //                 // })
    // })

    //report.save()
    const w = table.offsetWidth
    const h = table.offsetHeight
    html2canvas(table, {
        dpi: 300, // Set to 300 DPI
        scale: .1, // Adjusts your resolution
        onrendered: function(canvas) {
            console.log('hi')
          var img = canvas.toDataURL("image/jpeg", 1);
          var doc = new jsPDF('L', 'px', [w, h]);
          doc.addImage(img, 'JPEG', 0, 0, w, h);
          console.log('hi')
          doc.save('sample-file.pdf');
          console.log('hi')
        }
      });

}

const Report = props => {

    // if report has not been submitted yet return
    //if (!props.reportComplete) return null;

    // const save = () => {
    //     html2canvas(document.getElementById("cap")).then(canvas => {
    //         document.body.appendChild(canvas)
    //         console.log(canvas);
    //         var myImage = canvas.toDataURL("image/jpeg,1.0");
    //         console.log(myImage);
    //         console.log(canvas.width, canvas.height)
    //                 // Adjust width and height
    //                 var imgWidth = (canvas.width * 20) / 120;
    //                 var imgHeight = (canvas.height * 20) / 120; 
    //                 console.log(imgWidth, imgHeight);
    //                 console.log(document.getElementById("cap"))
    //                 // jspdf changes
    //                 var pdf = new jsPDF('p', 'pt', 'a4');
    //                 // pdf.addImage(myImage, 'JPEG', 15, 2, imgWidth, imgHeight); // 2: 19
    //                 // pdf.save('Report.pdf');
    //                 pdf.setFontSize(1)
    //                 pdf.html(document.getElementById('cap'), {
    //                     callback: function(pdf) { pdf.save('web.pdf') },
    //                     x: 0,
    //                     y: 0
    //                 })
                    
    // })}
    

    //console.log(this.ref)
    return (
        <div className='Capture' id='Capture' style={styles.main}>
                <div id='cap'>
                <h2>Report</h2>
                <Calculation />
                <Alert />
                <HTable />
                </div>
                <Matrix />
                <Cameo />

                <Button onClick={saveReport}>
                Click me
            </Button>

            <div id='hello'> hello world </div>
    

            {/* <div>
                <ReactToPdf targetRef={this.ref} filename="div-blue.pdf" x={.5} y={.5} scale={0.8}>
                    {({toPdf}) => (
                        <button onClick={toPdf}>Generate pdf</button>
                    )}
                </ReactToPdf>
                <div style={{width: 500, height: 500, background: 'blue'}} />
            </div> */}

    {/* <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink> */}

            {/* <Button
                color="primary"
                onClick={save}//() => {
                    // const doc = new jsPDF();
                    // console.log(doc);
                    // doc.fromHTML(ReactDOMServer.renderToStaticMarkup(this.dummy()))
                    // doc.save('myDocument.pdf')
                    // html2canvas(document.getElementById('Report')).then(canvas => {
                    //         console.log(document.getElementById('#Report'))
                    //         console.log(document.getElementById('Report'))
                    //         console.log('document: ', document.body)
                    //         console.log(canvas)
                    //         console.log('hi')
                    //         const pdf = new jsPDF()
                    //         pdf.addImage(canvas.toDataURL(), 'JPEG', 0, 0)
                    //         window.open(canvas.toDataURL())
                    //         pdf.save('report.pdf')
                    // })
                    // }
                    // var pdf = new jsPDF('p','pt','a4');

                    // pdf.addHTML(document.body,function() {
                    //     pdf.output('datauri');
                    // });
                    
                        // html2canvas(document.querySelector("#Capture")).then(canvas => {
                        //     console.log(canvas);
                        //     var myImage = canvas.toDataURL("image/jpeg,1.0");
                        //     console.log(myImage);
                        //     console.log(canvas.width, canvas.height)
                        //             // Adjust width and height
                        //             var imgWidth = (canvas.width * 20) / 240;
                        //             var imgHeight = (canvas.height * 20) / 240; 
                        //             console.log(imgWidth, imgHeight);
                        //             // jspdf changes
                        //             var pdf = new jsPDF('p', 'mm', 'a4');
                        //             pdf.addImage(myImage, 'JPEG', 15, 2, imgWidth, imgHeight); // 2: 19
                        //             pdf.save('Report.pdf');
                        // });


                //}}
            >
                Save Report
            </Button> */}
        </div>
    )
}

const mapStateToProps = state => ({
    cameoTable: state.report.cameoTable,
    reportComplete: state.status.reportComplete,
})

export default connect(mapStateToProps)(Report)