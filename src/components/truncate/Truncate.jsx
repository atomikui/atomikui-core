import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../button';

const Truncate = ({ children, expanded, afterEllipses, maxWords }) => {
  const [originalText] = useState(children);
  const [truncatedText] = useState(() =>
    children.split(' ').splice(0, maxWords).join(' '),
  );

  const [isTruncated, setIsTruncated] = useState(!expanded);

  const toggleContent = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <>
      {isTruncated ? truncatedText : originalText}
      {' ... '}
      {afterEllipses || (
        <>
          <Button theme="link" onClick={toggleContent}>
            Show {isTruncated ? 'more' : 'less'}
          </Button>
        </>
      )}
    </>
  );
};

Truncate.propTypes = {
  /** Specifies custom content after ellipses */
  afterEllipses: PropTypes.node,
  /** Content that will be truncated */
  children: PropTypes.string,
  /** Controls whether content is initially expanded */
  expanded: PropTypes.bool,
  /** The maximum number of words to display before truncating */
  maxWords: PropTypes.number,
};

Truncate.defaultProps = {
  afterEllipses: null,
  children: '',
  expanded: false,
  maxWords: 100,
};

export default Truncate;
