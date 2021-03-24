import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Avatar from '../avatar';

const intials = (name) => {
  const parts = name.split(' ');
  if (parts.length === 3) {
    parts.splice(1, 1);
  }
  return (parts[0].charAt(0) + parts[1].charAt(0)).toUpperCase();
};

const UserPersona = ({ avatar, name, size, status, statusMessage, theme }) => (
  <div
    className={classnames('atomikui-user-persona', {
      [`atomikui-user-persona--${size}`]: size,
    })}
  >
    <div className="atomikui-user-persona__avatar">
      <Avatar size={size} theme={theme} src={avatar}>
        {!avatar && name && intials(name)}
      </Avatar>
      <span
        className={classnames('atomikui-user-persona__status-icon', {
          [`is-${status}`]: status,
        })}
      />
    </div>
    <div>
      <div className="atomikui-user-persona__user-name">{name}</div>
      <div className="atomikui-user-persona__status-message">
        {statusMessage}
      </div>
    </div>
  </div>
);

UserPersona.propTypes = {
  /** User image URL */
  avatar: PropTypes.string,
  /** User name */
  name: PropTypes.string,
  /** Specifies the size */
  size: PropTypes.oneOf(['sm', 'lg']),
  /** User status */
  status: PropTypes.oneOf(['available', 'busy', 'away', 'offline']),
  /** Message text associated with user status */
  statusMessage: PropTypes.string,
  /** If rendering avatar with intitals, this sets the Avatar background color */
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
};

UserPersona.defaultProps = {
  avatar: '',
  name: '',
  size: null,
  status: 'offline',
  statusMessage: '',
  theme: null,
};

export default UserPersona;
