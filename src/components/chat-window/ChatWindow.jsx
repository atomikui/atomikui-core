import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import createFocusTrap from 'focus-trap';
import shortid from 'shortid';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faTimes, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import ChatMessage from '../chat-message';
import Button from '../button';

const ChatWindow = ({
  className,
  isOpen,
  messages,
  onClose,
  onMessageSent,
  position,
  incomingSenderName,
  incomingSenderImg,
  incomingSenderStatus,
}) => {
  const chatWindowRef = useRef();
  const chatWindowBodyRef = useRef();
  const userInputRef = useRef();

  const [message, setMessage] = useState('');
  const [focusTrap, setFocusTrap] = useState(null);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    onMessageSent({ message, isOutgoing: true });
    setMessage('');
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      if (message) {
        handleSubmit();
      }
    }
  };

  const setChatWindowScrollPosition = () => {
    const chatWindowBody = chatWindowBodyRef.current;
    chatWindowBody.scrollTop = chatWindowBody.scrollHeight;
  };

  const autExpandInput = () => {
    const userInput = userInputRef.current;
    userInput.style.height = 'auto';
    userInput.style.height = `${userInput.scrollHeight}px`;
  };

  useEffect(() => {
    setFocusTrap(
      createFocusTrap(chatWindowRef.current, {
        clickOutsideDeactivates: true,
        fallbackFocus: chatWindowRef.current,
      }),
    );
  }, []);

  useEffect(() => {
    if (!focusTrap) return;

    if (isOpen) {
      focusTrap.activate();
    } else {
      focusTrap.deactivate();
    }
  }, [isOpen, focusTrap]);

  useEffect(() => {
    setChatWindowScrollPosition();
  }, [messages]);

  useEffect(() => {
    autExpandInput();
  }, [message]);

  return (
    <div
      ref={chatWindowRef}
      className={classnames('atomikui-chat-window', className, {
        'is-open': isOpen,
        [`atomikui-chat-window--${position}`]: position,
      })}
    >
      <div className="atomikui-chat-window__header">
        <div className="atomikui-chat-window__title">
          {incomingSenderImg ? (
            <img
              className="atomikui-chat-window__avatar"
              src={incomingSenderImg}
              alt="Avatar"
            />
          ) : (
            <Icon
              className="atomikui-chat-window__avatar-icon"
              icon={faUserCircle}
              size="2x"
              color="white"
            />
          )}
          {incomingSenderName}
          <span
            aria-label={`Status: ${incomingSenderStatus}`}
            className={classnames('atomikui-chat-window__sender-status', {
              [`atomikui-chat-window__sender-status--${incomingSenderStatus}`]: incomingSenderStatus,
            })}
          />
        </div>
        <button
          data-test-id="chat-window-close-btn"
          className="atomikui-chat-window__close-btn"
          onClick={() => {
            return onClose();
          }}
          aria-label="close button"
        >
          <Icon icon={faTimes} size="2x" color="white" />
        </button>
      </div>
      <div ref={chatWindowBodyRef} className="atomikui-chat-window__body">
        {messages.map(({ isOutgoing, ...props }) => {
          return (
            <ChatMessage
              key={shortid.generate()}
              isOutgoing={isOutgoing}
              {...props}
            />
          );
        })}
      </div>
      <div className="atomikui-chat-window__footer">
        <textarea
          data-test-id="chat-window-user-input"
          aria-label="Enter a Message"
          id="chat-message-input"
          ref={userInputRef}
          className="atomikui-chat-window__input"
          rows="1"
          placeholder="Enter your message..."
          value={message}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <Button
          data-test-id="chat-window-send-btn"
          className="atomikui-chat-window__send-btn"
          onClick={() => {
            return handleSubmit();
          }}
          theme="sky-blue"
          disabled={!message}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

ChatWindow.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Sets the chat window opne state */
  isOpen: PropTypes.bool,
  /** Array of messages */
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      originIpAddress: PropTypes.string,
      message: PropTypes.string,
      dateTimeStamp: PropTypes.string,
    }),
  ),
  /** Callback triggeed on close */
  onClose: PropTypes.func,
  /** Callback triggered after message is sent */
  onMessageSent: PropTypes.func,
  /** Sets the position of the chat window */
  position: PropTypes.oneOf([
    'top-right',
    'top-left',
    'bottom-right',
    'bottom-left',
  ]),
  /** Profile image of incoming sender */
  incomingSenderImg: PropTypes.string,
  /** Name of incoming sender */
  incomingSenderName: PropTypes.string,
  /** Status of incoming sender */
  incomingSenderStatus: PropTypes.oneOf(['available', 'away', 'offline']),
};

ChatWindow.defaultProps = {
  className: '',
  isOpen: false,
  messages: [],
  onClose: null,
  onMessageSent: null,
  position: 'bottom-right',
  incomingSenderImg: '',
  incomingSenderName: '',
  incomingSenderStatus: 'available',
};

export default ChatWindow;
