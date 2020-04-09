import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Media = ({ align, body, classes, header, inline, footer, ...others }) => {
  return (
    <div
      className={classnames('media', classes, {
        'media--inline': inline,
        [`media--align-${align}`]: align,
      })}
      {...others}
    >
      <div className="media__hd">{header}</div>
      <div className="media__bd">{body}</div>
      <div className="media__ft">{footer}</div>
    </div>
  );
};

Media.propTypes = {
  /** Specifies media content alignment */
  align: PropTypes.oneOf(['', 'middle', 'bottom']),
  /** Adds custom component CSS classes */
  classes: PropTypes.string,
  /** Media body content */
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Media footer content */
  footer: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Media header content */
  head: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Displays media content as inline-flex */
  inline: PropTypes.bool,
};

Media.defaultProps = {
  align: '',
  classes: '',
  body: '',
  header: '',
  footer: '',
  inline: false,
};

export default Media;
