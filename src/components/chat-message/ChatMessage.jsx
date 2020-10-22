import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ChatMessage = ({ dateTimeStamp, message, isOutgoing }) => {
  return (
    <div
      className={classnames('atomikui-chat-message', {
        'is-outgoing': isOutgoing,
      })}
    >
      {dateTimeStamp && (
        <div
          className="atomikui-chat-message__item__timestamp"
          data-test-id="chat-message-timestamp"
        >
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
  isOutgoing: PropTypes.bool,
};

ChatMessage.defaultProps = {
  dateTimeStamp: '',
  message: '',
  isOutgoing: false,
};

export default ChatMessage;
