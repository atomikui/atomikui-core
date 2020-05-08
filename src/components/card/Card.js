import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Card = ({ children, className, footer, title, ...others }) => {
  return (
    <div className="rcl-card" {...others}>
      {title && <div className="rcl-card__header">{title}</div>}
      {children && <div className="rcl-card__body">{children}</div>}
      {footer && <div className="rcl-card__footer">{footer}</div>}
    </div>
  );
};

Card.propTypes = {
  /** Card body content */
  children: PropTypes.node,
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Card footer */
  footer: PropTypes.node,
  /** Card title */
  title: PropTypes.string,
};

Card.defaultProps = {
  children: <></>,
  className: '',
  footer: <></>,
  title: '',
};

export default Card;
