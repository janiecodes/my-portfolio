import React, {useState} from 'react';
import { Document, Page } from 'react-pdf';


export default function Resume(){
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }


    return (
        <div className='resume-component'>
        <Document 
        file='Janie_Kim_Resume.pdf'
        onLoadSuccess={onDocumentLoadSuccess}
        >
            <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
        {/* <img alt='resume' className='resume-file' src={`/assets/Janie_Kim_Resume.pdf`}/> */}
        </div>
    )
}