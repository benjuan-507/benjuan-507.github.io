import React, { Component } from 'react';
import {Document, Page} from 'react-pdf';
import resumePDF from '../pdf/BenJuan_Resume.pdf';

export class Resume extends Component {
  render() {
    return <Document file = {resumePDF}>
      <Page pageNumber = {1} />
    </Document>
  }
}

export default Resume;
