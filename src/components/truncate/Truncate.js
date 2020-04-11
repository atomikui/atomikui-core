import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from '../link';

const Truncate = ({ children, expanded, afterEllipses, maxWords }) => {
  const [originalText] = useState(children);
  const [truncatedText] = useState(() => {
    return children.split(' ').splice(0, maxWords).join(' ');
  });

  const [isTruncated, setIsTruncated] = useState(!expanded);

  const toggleContent = (e) => {
    e.preventDefault();
    setIsTruncated(!isTruncated);
  };

  return (
    <>
      {isTruncated ? truncatedText : originalText}
      {' ... '}
      {afterEllipses || (
        <>
          <Link href="#" role="button" onClick={toggleContent}>
            Show {isTruncated ? 'more' : 'less'}
          </Link>
        </>
      )}
    </>
  );
};

Truncate.propTypes = {
  /** Specifies custom content after ellipses */
  afterEllipses: PropTypes.any,
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
