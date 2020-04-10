import React, { useRef } from 'react';

const Stats = () => {
  const iframeRef = useRef();

  const setIframeContentStyles = () => {
    const iframeDoc = iframeRef.current.contentWindow.document;
    const footer = iframeDoc.getElementsByTagName('footer')[0];
    const main = iframeDoc.getElementsByTagName('main')[0];
    footer.style.display = 'none';
    main.style.background = 'white';
  };

  return (
    <iframe
      ref={iframeRef}
      width="100%"
      height="100%"
      frameBorder="no"
      title="jest coverage report"
      src="http://localhost:6060/src/components/stats/coverage-report.html"
      onLoad={setIframeContentStyles}
    />
  );
};

export default Stats;
