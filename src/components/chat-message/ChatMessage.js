import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ChatMessage = ({ dateTimeStamp, message, isSameOrigin }) => {
  return (
    <div
      className={classnames('rcl-chat-message', {
        'is-same-origin': isSameOrigin,
      })}
    >
      {dateTimeStamp && (
        <div className="rcl-chat-message__item__timestamp">{dateTimeStamp}</div>
      )}
      <div className="rcl-chat-message__item">
        <span className="rcl-chat-message__item__text">{message}</span>
      </div>
    </div>
  );
};

ChatMessage.propTypes = {
  message: PropTypes.string,
  fromMe: PropTypes.bool,
};

ChatMessage.defaultProps = {
  message: '',
  fromMe: false,
};

export default ChatMessage;
