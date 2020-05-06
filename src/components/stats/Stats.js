import React, { useRef, useState } from 'react';
import Spinner from '../spinner';
import './stats.scss';

const Stats = () => {
  const [loading, setLoading] = useState(true);
  const iframeRef = useRef();

  const setIframeContentStyles = () => {
    const iframeDoc = iframeRef.current.contentWindow.document;
    const linkTag = iframeDoc.createElement('link');
    linkTag.rel = 'stylesheet';
    linkTag.href =
      'https://fonts.googleapis.com/css?family=Hind+Madurai:300,300i,400,400i,500,500i,700,700i';
    iframeDoc.head.appendChild(linkTag);
    const styleTag = iframeDoc.createElement('style');
    styleTag.type = 'text/css';
    styleTag.appendChild(
      document.createTextNode(`
      body { 
        font-family: 'Lato', Arial, Helvetica, sans-serif !important; 
      }
      h1, h2, h3, h4, h5, h6, .header { 
        font-family: 'Lato', serif !important; 
        color: #222;
        font-weight: 500; 
        margin-top: 8px; 
      }
      main { background: white; }
      .header { font-size: 36px !important; }
      .ant-layout-footer { display: none; }
      .ant-spin-container { margin-bottom: 24px; }
    `),
    );
    iframeDoc.head.appendChild(styleTag);
    setLoading(false);
  };

  return (
    <div className="stats-container">
      {loading && (
        <div className="stats-container__loading">
          <Spinner size="xlg" theme="blue" />
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
        src={
          process.env.NODE_ENV === 'production'
            ? 'https://alaneicker1975.github.io/react-component-library/coverage-report.html'
            : '/coverage-report.html'
        }
        onLoad={setIframeContentStyles}
      />
    </div>
  );
};

export default Stats;
