import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Link = ({
  active,
  classes,
  children,
  disabled,
  href,
  target,
  ...others
}) => {
  return (
    <a
      className={classnames('link', classes, {
        'is-disabled': disabled,
      })}
      {...(href && { href })}
      {...(target && { target })}
      {...(target === '_blank' && { rel: 'noopener noreferrer' })}
      {...others}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  /** Specifies as active link */
  active: PropTypes.bool,
  /** Custom classes to be added to Label component.. */
  classes: PropTypes.string,
  /** Disabled a link */
  disabled: PropTypes.bool,
  /** Specifies the URL of the page the link goes to.. */
  href: PropTypes.string,
  /** Hint content.. */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Specifies where to open the linked document. Taget `__blank` will automatically add `rel="noopener noreferrer"` to the link.. */
  target: PropTypes.string,
};

Link.defaultProps = {
  active: false,
  classes: '',
  disabled: false,
  href: '',
  children: null,
  target: '',
};

export default Link;
