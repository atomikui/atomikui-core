import React, { useCallback, useState, useRef } from 'react';
import PropTypes from 'prop-types';

const IframeProps = ({ component }) => {
  const [iframeState, setIframeState] = useState();
  const [loading, setLoading] = useState(true);
  const container = useRef();

  const iframe = useCallback(
    (ref) => {
      if (ref) {
        setIframeState(ref);
      }
    },
    [setIframeState],
  );

  const getPropsTable = () => {
    if (iframeState) {
      const innerDoc =
        iframeState.contentDocument || iframeState.contentWindow.document;
      const table = innerDoc.getElementsByTagName('table')[0];
      container.current.innerHTML = table.outerHTML;
      setLoading(false);
    }
  };

  const title = component.match(/[A-Z][a-z]+|[0-9]+/g).join('.');

  return (
    <>
      <h3 className="text-size-24 margin-bottom-12">{title}</h3>
      {loading && (
        <>
          Loading...
          <iframe
            style={{ display: 'none' }}
            ref={iframe}
            title={title}
            onLoad={getPropsTable}
            src={`/#/Hidden%20Compounds/${component}`}
          />
        </>
      )}
      <div ref={container} />
    </>
  );
};

IframeProps.propTypes = {
  component: PropTypes.string,
};

IframeProps.defaultProps = {
  component: '',
};

export default IframeProps;
