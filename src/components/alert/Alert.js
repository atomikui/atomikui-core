import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  faExclamationCircle,
  faInfoCircle,
  faCheckCircle,
  faTimes,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../button';

const Alert = ({
  align,
  className,
  children,
  icon,
  theme,
  onClose,
  ...others
}) => {
  const icons = {
    info: faInfoCircle,
    dark: faInfoCircle,
    warning: faExclamationCircle,
    error: faTimesCircle,
    success: faCheckCircle,
  };

  return (
    <div
      className={classnames('atomikui-alert', className, {
        [`atomikui-alert--${theme}`]: theme,
        [`atomikui-alert--${align}`]: align,
      })}
      role="alert"
      aria-live={theme === 'error' ? 'assertive' : 'polite'}
      aria-atomic="true"
      {...others}
    >
      {icon || (
        <Icon
          id={`icon-${theme}`}
          icon={!theme ? icons.info : icons[theme]}
          size="lg"
          color={!theme ? '#027abf' : 'white'}
        />
      )}
      <div className="atomikui-alert__body">{children}</div>
      {onClose && (
        <div className="atomikui-alert__footer">
          <Button
            className="atomikui-alert__btn"
            theme="hollow"
            onClick={onClose}
            aria-label="close button"
          >
            <Icon
              id="icon-close"
              icon={faTimes}
              size="lg"
              color={!theme ? '#027abf' : 'white'}
            />
          </Button>
        </div>
      )}
    </div>
  );
};

Alert.propTypes = {
  /** Vertically aligns the alert content. */
  align: PropTypes.oneOf(['middle', 'bottom']),
  /** Specifies custom component classes. */
  className: PropTypes.string,
  /** A custom icon to be displayed to the left of the alert body text */
  icon: PropTypes.node,
  /** onClose Callback */
  onClose: PropTypes.func,
  /** Alert content. */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Specifies the  theme variation. */
  theme: PropTypes.oneOf(['dark', 'info', 'warning', 'error', 'success']),
};

Alert.defaultProps = {
  align: null,
  className: '',
  icon: null,
  onClose: null,
  children: null,
  text: '',
  theme: null,
};

export default Alert;
