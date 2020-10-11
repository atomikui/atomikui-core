import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Link = ({
  active,
  className,
  children,
  disabled,
  href,
  target,
  ...others
}) => {
  return (
    <a
      className={classnames('atomikui-link', className, {
        'is-disabled': disabled,
      })}
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : null}
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
  className: PropTypes.string,
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
  className: '',
  disabled: false,
  href: null,
  children: null,
  target: null,
};

export default Link;
