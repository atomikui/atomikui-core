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

const Alert = ({ align, className, children, theme, onClose, ...others }) => {
  return (
    <div
      className={classnames('rcl-alert', className, {
        [`rcl-alert--${theme}`]: theme,
        [`rcl-alert--${align}`]: align,
      })}
      role="alert"
      aria-live={theme === 'error' ? 'assertive' : 'polite'}
      aria-atomic="true"
      {...others}
    >
      {(theme === 'info' || theme === 'dark' || !theme) && (
        <Icon
          id="icon-info"
          icon={faInfoCircle}
          size="lg"
          color={!theme ? '#027abf' : 'white'}
        />
      )}
      {theme === 'success' && (
        <Icon id="icon-success" icon={faCheckCircle} size="lg" color="white" />
      )}
      {theme === 'warning' && (
        <Icon
          id="icon-warning"
          icon={faExclamationCircle}
          size="lg"
          color="white"
        />
      )}
      {theme === 'error' && (
        <Icon id="icon-error" icon={faTimesCircle} size="lg" color="white" />
      )}
      <div className="rcl-alert__body">{children}</div>
      {onClose && (
        <div className="rcl-alert__footer">
          <Button
            className="rcl-alert__btn"
            theme="hollow"
            onClick={onClose}
            aria-hidden="true"
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
  /** Aligns the text inside of the alert. */
  align: PropTypes.oneOf(['right', 'center']),
  /** Specifies custom component classes. */
  className: PropTypes.string,
  /** onClose Callback */
  onClose: PropTypes.func,
  /** Alert content. */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Specifies the alert theme variation. */
  theme: PropTypes.oneOf(['dark', 'info', 'warning', 'error', 'success']),
};

Alert.defaultProps = {
  align: null,
  className: '',
  onClose: null,
  children: <></>,
  text: '',
  theme: null,
};

export default Alert;
