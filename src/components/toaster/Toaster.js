import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import generateId from '../../utilities/generateId';

const Toaster = ({ classes, toasts, ...others }) => {
  const [toastMessages, setToastMessages] = useState(toasts);

  return (
    <ul className={classnames('toaster', classes, {})} {...others}>
      {toastMessages.map(({ type, message }) => {
        return (
          <li
            key={generateId()}
            className={classnames('toaster__toast', {
              [`toaster__toast--${type}`]: type,
            })}
          >
            {message}
          </li>
        );
      })}
    </ul>
  );
};

Toaster.propTypes = {
  /** Adds custom component CSS classes */
  classes: PropTypes.string,
  /** Array of toast messages to be displayed in the toaster */
  toasts: PropTypes.arrayOf(
    PropTypes.shape({
      /** Type of toast - oneOf: info, warning, error, success */
      type: PropTypes.oneOf(['info', 'earning', 'error', 'success']),
      /** Toast message text */
      message: PropTypes.string,
    }),
  ),
};

Toaster.defaultProps = {
  classes: '',
  toasts: [],
};

export default Toaster;
