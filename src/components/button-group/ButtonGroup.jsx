import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Label from '../label';
import Hint from '../hint';

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
  theme,
  themeVariant,
  ...others
}) => {
  const uid = shortid.generate();
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
        className={classnames('atomikui-button-group', className, {
          [`atomikui-button-group--${theme}${
            themeVariant ? `-${themeVariant}` : ''
          }`]: theme,
          [`atomikui-button-group--${size}`]: size,
          'atomikui-button-group--stretch': stretch,
          'has-error': hasError,
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
  errorText: PropTypes.string,
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
  /** Specifies the color variation. */
  theme: PropTypes.oneOf([
    'red',
    'pink',
    'purple',
    'deep-purple',
    'indigo',
    'blue',
    'sky-blue',
    'cyan',
    'teal',
    'green',
    'light-green',
    'lime',
    'yellow',
    'light-orange',
    'orange',
    'deep-orange',
    'amber',
    'brown',
    'gray',
    'blue-gray',
    'black',
    'white',
  ]),
  /** The theme color variant */
  themeVariant: PropTypes.oneOf(['light']),
};

ButtonGroup.defaultProps = {
  className: '',
  children: null,
  errorText: '',
  hasError: false,
  helpText: '',
  label: '',
  required: false,
  size: null,
  stretch: false,
  theme: null,
  themeVariant: null,
};

export default ButtonGroup;
