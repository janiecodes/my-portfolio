import React, {useState} from 'react';


export default function Resume(){
   
    return (
        <div className='resume-component'>
            <div className='education'>
            Education:
            </div>
        <div className='work'>
        Work:
        </div>

           
        </div>
    )
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