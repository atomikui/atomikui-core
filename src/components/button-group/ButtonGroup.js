import React, { useContext } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Label from '../label';
import Hint from '../hint';
import generateId from '../../utilities/generateId';
import ThemeContext from '../../theme-context';

const ButtonGroup = ({
  children,
  className,
  errorText,
  hasError,
  helpText,
  label,
  required,
  size,
  stretch,
  ...others
}) => {
  const { theme } = useContext(ThemeContext);
  const uid = generateId();
  const inputHintId = `${uid}_hint`;
  const inputErrorId = `${uid}_error`;

  return (
    <>
      {label && (
        <div className="flex margin-bottom-4">
          <Label>{label}</Label>
        </div>
      )}
      <div
        className={classnames('rcl-button-group', className, {
          [`rcl-button-group--${size}`]: size,
          [`rcl-button-group--${theme}`]: theme,
          'rcl-button-group--stretch': stretch,
        })}
        role="group"
        {...others}
      >
        {children}
      </div>
      {(helpText || errorText) && (
        <div className="margin-top-2">
          {helpText && <Hint id={inputHintId}>{helpText}</Hint>}
          {hasError && (
            <Hint id={inputErrorId} type="error">
              {errorText}
            </Hint>
          )}
        </div>
      )}
    </>
  );
};

ButtonGroup.propTypes = {
  /** Specifies custom component classes. */
  className: PropTypes.string,
  /** Children to be rendered in the button group */
  children: PropTypes.node,
  /** Set the error text to be displayed */
  erroText: PropTypes.string,
  /** Set the error state of the button group */
  hasError: PropTypes.bool,
  /**  Set the help text to be displayed */
  helpText: PropTypes.string,
  /** Button group label */
  label: PropTypes.string,
  /** Specifies field as required */
  required: PropTypes.bool,
  /** Controls button group size */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** Makes button group fill width of parent */
  stretch: PropTypes.bool,
};

ButtonGroup.defaultProps = {
  className: '',
  children: <></>,
  errorText: '',
  hasError: false,
  helpText: '',
  label: '',
  required: false,
  size: null,
  stretch: false,
};

export default ButtonGroup;
