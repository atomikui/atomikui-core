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

const UserPersona = ({ avatar, name, size, status, statusMessage }) => (
  <div className="atomikui-user-persona">
    <div className="atomikui-user-persona__avatar">
      <Avatar src={avatar}>{!avatar && name && intials(name)}</Avatar>
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

UserPersona.PropTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'lg']),
  status: PropTypes.oneOf(['available', 'busy', 'away', 'offline']),
  statusMessage: PropTypes.string,
};

UserPersona.defaultProps = {
  avatar: '',
  name: '',
  size: null,
  status: 'offline',
  statusMessage: '',
};

export default UserPersona;
