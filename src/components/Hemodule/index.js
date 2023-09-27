import React, { useRef, useEffect } from 'react';
import WebViewer from '@pdftron/pdfjs-express';


const Excellency = () => {
  const viewer = useRef(null);


useEffect(() => {
    WebViewer(
      {
        path: '/webviewer/lib',
        initialDoc: '/files/pdftron_about.pdf',
      },
      viewer.current,
    ).then((instance) => {
        // now you can access APIs through the WebViewer instance
        const { Core } = instance;

        // adding an event listener for when a document is loaded
        Core.documentViewer.addEventListener('documentLoaded', () => {
          console.log('document loaded');
        });

        // adding an event listener for when the page number has changed
        Core.documentViewer.addEventListener('pageNumberUpdated', (pageNumber) => {
          console.log(`Page number is: ${pageNumber}`);
        });
      });
    }, []);

  return (
    <div className="MyComponent">
      <div className="header">KWARA DOCUMENT MANAGEMENT SYSTEM</div>
      <div className="webviewer" ref={viewer}></div>
    </div>
  );
};

export default Excellency;