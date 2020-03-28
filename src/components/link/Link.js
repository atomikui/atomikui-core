import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Link = ({ classes, children, href, target, ...others }) => (
  <a
    className={classnames('link', classes)}
    href={href}
    target={target}
    {...(target === '_blank' && { rel: 'noopener noreferrer' })}
    {...others}
  >
    {children}
  </a>
);

Link.propTypes = {
  /** Custom classes to be added to Label component.. */
  classes: PropTypes.string,
  /** Specifies the URL of the page the link goes to.. */
  href: PropTypes.string,
  /** Hint content.. */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Specifies where to open the linked document. Taget `__blank` will automatically add `rel="noopener noreferrer"` to the link.. */
  target: PropTypes.string,
};

Link.defaultProps = {
  classes: '',
  href: '',
  children: null,
  target: '',
};

export default Link;
