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

const Alert = ({ align, className, children, type, onClose, ...others }) => {
  const icons = {
    info: faInfoCircle,
    dark: faInfoCircle,
    warning: faExclamationCircle,
    error: faTimesCircle,
    success: faCheckCircle,
  };

  return (
    <div
      className={classnames('rcl-alert', className, {
        [`rcl-alert--${type}`]: type,
        [`rcl-alert--${align}`]: align,
      })}
      role="alert"
      aria-live={type === 'error' ? 'assertive' : 'polite'}
      aria-atomic="true"
      {...others}
    >
      <Icon
        id={`icon-${type}`}
        icon={!type ? icons.info : icons[type]}
        size="lg"
        color={!type ? '#027abf' : 'white'}
      />
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
              color={!type ? '#027abf' : 'white'}
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
  type: PropTypes.oneOf(['dark', 'info', 'warning', 'error', 'success']),
};

Alert.defaultProps = {
  align: null,
  className: '',
  onClose: null,
  children: <></>,
  text: '',
  type: null,
};

export default Alert;
