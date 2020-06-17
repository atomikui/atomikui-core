import React, { useRef, useState } from 'react';

const Tests = () => {
  const iframeRef = useRef();
  const [iframeHeight, setIframeHeight] = useState('0px');

  const setIframeContentStyles = () => {
    const iframeDocument = iframeRef.current.contentWindow.document;
    const reportTable = iframeDocument.body.querySelector('table');

    const linkTag = iframeDocument.createElement('link');
    linkTag.rel = 'stylesheet';
    linkTag.href =
      'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap';
    iframeDocument.head.appendChild(linkTag);
    const styleTag = iframeDocument.createElement('style');
    styleTag.type = 'text/css';
    styleTag.appendChild(
      document.createTextNode(`
      body { 
        font-family: 'Lato', Arial, Helvetica, sans-serif !important; 
      }
      .quiet,
      .footer,
      .push {
        display: none;
      }
    `),
    );

    iframeDocument.head.appendChild(styleTag);

    setIframeHeight(
      `${reportTable.offsetHeight + reportTable.offsetTop + 20}px`,
    );
  };

  return (
    <div style={{ height: iframeHeight }}>
      <iframe
        ref={iframeRef}
        onLoad={setIframeContentStyles}
        height="100%"
        width="100%"
        frameBorder="no"
        title="jest coverage report"
        src={
          process.env.NODE_ENV === 'production'
            ? 'https://alaneicker1975.github.io/atomik-ui/coverage/lcov-report/'
            : '/coverage/lcov-report/'
        }
      />
    </div>
  );
};

export default Tests;
