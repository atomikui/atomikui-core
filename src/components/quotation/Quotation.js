import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Quotation = ({
  bordered,
  className,
  children,
  footer,
  pullquote,
  ...others
}) => {
  return (
    <blockquote
      className={classnames('atomikui-quotation', className, {
        'atomikui-blockquote--bordered': bordered,
      })}
      {...others}
    >
      <p>{children}</p>
      {footer && <footer>{footer}</footer>}
    </blockquote>
  );
};

Quotation.propTypes = {
  /** Blockquote content */
  children: PropTypes.node.isRequired,
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Adds a footer to the quote */
  footer: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Makes the quotationa a pull quote */
  pullquote: PropTypes.bool,
};

Quotation.defaultProps = {
  className: '',
  footer: '',
  pullquote: false,
};

export default Quotation;
