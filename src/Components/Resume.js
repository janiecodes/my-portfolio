import React, {Component, useState} from 'react';
import ReactDOM from "react-dom";
import PDF from "react-pdf-js";

export default class Resume extends Component{
    state = {};
    handlePrevious = this.handlePrevious.bind(this);
    handleNext = this.handleNext.bind(this);
    onDocumentComplete = this.onDocumentComplete.bind(this);

    onDocumentComplete(pages) {
        this.setState({ page: 1, pages });
      }
    
      handlePrevious() {
        this.setState({ page: this.state.page - 1 });
      }
    
      handleNext() {
        this.setState({ page: this.state.page + 1 });
      }
    
      renderPagination() {
        return (
          <>
            <button onClick={this.handlePrevious}>&lt;</button>
            <button onClick={this.handleNext}>&gt;</button>
          </>
        );
      }

  render() {
    let pagination = null;

    if (this.state.pages) {
      pagination = this.renderPagination();
    }
    return (
        <div className='resume-component'>
          <PDF
          file="Janie_Kim_Resume.pdf"
          page={this.state.page}
          onDocumentComplete={this.onDocumentComplete}
        />
        {pagination}
        </div>
    )

  }
}



// import React, {useState} from 'react';
// import { Document, Page, pdfjs  } from 'react-pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// export default function Resume(){
//     const [numPages, setNumPages] = useState(null);
//     const [pageNumber, setPageNumber] = useState(1);
    
//     function onDocumentLoadSuccess({ numPages }) {
//         setNumPages(numPages);
//       }
//     const  goToPrevPage = () =>
//       setPageNumber(state => ({ pageNumber: pageNumber - 1 }));
//     const  goToNextPage = () =>
//       setPageNumber(state => ({ pageNumber: pageNumber + 1 }));

//     return (
//         <div className='resume-component'>
//                     <nav>
//           <button onClick={goToPrevPage}>Prev</button>
//           <button onClick={goToNextPage}>Next</button>
//         </nav>
//         <Document 
//         file='Janie_Kim_Resume.pdf'
//         onLoadSuccess={onDocumentLoadSuccess}
//         >
//             <Page pageNumber={pageNumber} />
//         </Document>
//         <p>Page {pageNumber} of {numPages}</p>
//         {/* <img alt='resume' className='resume-file' src={`/assets/Janie_Kim_Resume.pdf`}/> */}
//         </div>
//     )
// }