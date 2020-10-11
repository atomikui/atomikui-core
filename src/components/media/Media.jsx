import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Media = ({
  align,
  body,
  className,
  header,
  inline,
  footer,
  reverse,
  ...others
}) => {
  return (
    <div
      className={classnames('atomikui-media', className, {
        'atomikui-media--inline': inline,
        'atomikui-media--reverse': reverse,
        [`media--${align}`]: align,
      })}
      {...others}
    >
      <div className="atomikui-media__hd">{header}</div>
      <div className="atomikui-media__bd">{body}</div>
      {footer && <div className="atomikui-media__ft">{footer}</div>}
    </div>
  );
};

Media.propTypes = {
  /** Specifies media content alignment */
  align: PropTypes.oneOf(['middle', 'bottom']),
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Media body content */
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Media footer content */
  footer: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Media header content */
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Displays media content as inline-flex */
  inline: PropTypes.bool,
  /** Reversed the order of the media component children */
  reverse: PropTypes.bool,
};

Media.defaultProps = {
  align: null,
  className: '',
  body: 'Insert media body',
  header: 'Insert media header',
  footer: '',
  inline: false,
  reverse: false,
};

export default Media;
