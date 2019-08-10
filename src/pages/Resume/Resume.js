import React, { Component } from "react";

import { Document, Page, pdfjs } from "react-pdf";
import resumePdf from "./resume.pdf";
import "./Resume.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${
  pdfjs.version
}/pdf.worker.js`;

function ResumePage() {
  return (
    <div className="Page ResumePage">
      <Document file={resumePdf} className="PDF">
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}
export default ResumePage;
