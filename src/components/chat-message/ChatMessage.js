import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import moment from 'moment';

const ChatMessage = ({ dateTimeStamp, message, isSameOrigin }) => {
  return (
    <div
      className={classnames('atomikui-chat-message', {
        'is-same-origin': isSameOrigin,
      })}
    >
      {dateTimeStamp && (
        <div className="atomikui-chat-message__item__timestamp">
          {dateTimeStamp}
        </div>
      )}
      <div className="atomikui-chat-message__item">
        <span className="atomikui-chat-message__item__text">{message}</span>
      </div>
    </div>
  );
};

ChatMessage.propTypes = {
  dateTimeStamp: PropTypes.string,
  message: PropTypes.string,
  isSameOrigin: PropTypes.bool,
};

ChatMessage.defaultProps = {
  dateTimeStamp: '',
  message: '',
  isSameOrigin: false,
};

export default ChatMessage;
