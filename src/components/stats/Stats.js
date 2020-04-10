import React, { useRef, useState } from 'react';
import Spinner from '../spinner';
import './stats.scss';

const Stats = () => {
  const [loading, setLoading] = useState(true);
  const iframeRef = useRef();

  const setIframeContentStyles = () => {
    const iframeDoc = iframeRef.current.contentWindow.document;
    const footer = iframeDoc.getElementsByTagName('footer')[0];
    const main = iframeDoc.getElementsByTagName('main')[0];

    footer.style.display = 'none';
    main.style.background = 'white';

    const linkTag = iframeDoc.createElement('link');
    linkTag.rel = 'stylesheet';
    linkTag.href =
      'https://fonts.googleapis.com/css?family=Noto+Sans:400,700|Bree+Serif&display=swap';

    iframeDoc.head.appendChild(linkTag);

    const styleTag = iframeDoc.createElement('style');
    styleTag.type = 'text/css';
    styleTag.appendChild(
      document.createTextNode(`
      body { font-family: 'Montserrat', Arial, Helvetica, sans-serif !important; }
      h1, h2, h3, h4, h5, h6, .header { font-family: 'Bree Serif', serif !important; }
      .header { font-size: 36px !important; }
    `),
    );

    iframeDoc.head.appendChild(styleTag);

    setLoading(false);
  };

  return (
    <div className="stats-container">
      {loading && (
        <div className="stats-container__loading">
          <Spinner size="xlg" color="blue" />
          <div>LOADING REPORT...</div>
        </div>
      )}
      <iframe
        style={{ display: loading ? 'none' : 'block' }}
        ref={iframeRef}
        width="100%"
        height="100%"
        frameBorder="no"
        title="jest coverage report"
        src="http://localhost:6060/src/components/stats/coverage-report.html"
        onLoad={setIframeContentStyles}
      />
    </div>
  );
};

export default Stats;
