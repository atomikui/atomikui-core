import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const Quotation = ({ className, children, footer, pullquote, ...others }) => (
  <blockquote
    className={classnames('atomikui-quotation', className, {
      'atomikui-quotation--pullquote': pullquote,
    })}
    {...others}
  >
    <p>
      {pullquote && <Icon icon={faQuoteLeft} size="4x" />}
      {children}
    </p>
    {footer && <footer>{footer}</footer>}
  </blockquote>
);

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
