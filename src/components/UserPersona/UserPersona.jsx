import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Avatar from '../avatar';
import initialsFromName from '../../utilities/initialsFromName';

const UserPersona = ({
  avatar,
  avatarOnly,
  name,
  size,
  status,
  statusMessage,
  theme,
}) => (
  <div
    className={classnames('atomikui-user-persona', {
      [`atomikui-user-persona--${size}`]: size,
    })}
  >
    <div className="atomikui-user-persona__avatar">
      <Avatar size={size} theme={theme} src={avatar}>
        {!avatar && name && initialsFromName(name)}
      </Avatar>
      <span
        className={classnames('atomikui-user-persona__status-icon', {
          [`is-${status}`]: status,
        })}
      />
    </div>
    {!avatarOnly && (
      <div>
        <div className="atomikui-user-persona__user-name">{name}</div>
        <div
          data-test-id="user-persona-status-message"
          className="atomikui-user-persona__status-message"
        >
          {statusMessage || (
            <span style={{ textTransform: 'capitalize' }}>{status}</span>
          )}
        </div>
      </div>
    )}
  </div>
);

UserPersona.propTypes = {
  /** User image URL */
  avatar: PropTypes.string,
  /** Displays only the user avatar */
  avatarOnly: PropTypes.bool,
  /** User name */
  name: PropTypes.string.isRequired,
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
  avatarOnly: false,
  size: null,
  status: 'Offline',
  statusMessage: '',
  theme: 'blue-gray',
};

export default UserPersona;
