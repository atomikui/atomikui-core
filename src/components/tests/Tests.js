import React, { useRef, useState } from 'react';

const Tests = () => {
  const iframeRef = useRef();
  const [iframeHeight, setIframeHeight] = useState('0px');

  const setIframeContentStyles = () => {
    const iframeDocument = iframeRef.current.contentWindow.document;
    const reportTable = iframeDocument.body.querySelector('table');
    setIframeHeight(
      `${reportTable.offsetHeight + reportTable.offsetTop + 100}px`,
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
