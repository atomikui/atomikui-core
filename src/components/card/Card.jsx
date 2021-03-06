import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, className, footer, title, ...others }) => (
  <div className="atomikui-card" {...others}>
    {title && (
      <div className="atomikui-card__header" data-test-id="card-header">
        {title}
      </div>
    )}
    <div className="atomikui-card__body" data-test-id="card-body">
      {children}
    </div>
    {footer && (
      <div className="atomikui-card__footer" data-test-id="card-footer">
        {footer}
      </div>
    )}
  </div>
);

Card.propTypes = {
  /** Card body content */
  children: PropTypes.node,
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Card footer */
  footer: PropTypes.node,
  /** Card title */
  title: PropTypes.node,
};

Card.defaultProps = {
  children: null,
  className: '',
  footer: null,
  title: <></>,
};

export default Card;
