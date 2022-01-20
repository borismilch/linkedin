import React from 'react';
import { doc } from '@/lib/tspdf'

import ReactDomServer from 'react-dom/server'
import { IResume } from '@/models/index'
import { PdfView } from '@/components/pages/resume'; 

const usePdf = (resume: IResume) => {

  const View = <PdfView resume={resume} />

  const donwloadPDF = () => {
    doc.html(ReactDomServer.renderToStaticMarkup(View), {
      callback: () => {
        doc.save("myDocument.pdf");
      },
      windowWidth: 2000
    });
  
  }

  return {donwloadPDF}
};

export default usePdf;
