```jsx
import { useState } from 'react';
import moment from 'moment';
import { ChatWindow, Button } from '@atomikui/core';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const incomingMessage = {
  sender: 'Paul Smith',
  senderStatus: 'available',
  senderImg: 'profile-image.png',
  messages: [
    {
      message: 'Hello there!',
      dateTimeStamp: 'Tuesday, March 10, 2020 3:36 PM',
    },
  ],
};

const outgoingMessages = {
  messages: [
    {
      message: "Hi!, What's up?",
      dateTimeStamp: 'Tuesday, March 10, 2020 3:36 PM',
      isOutgoing: true,
    },
  ],
};

const messageData = [...incomingMessage.messages, ...outgoingMessages.messages];

const [isOpen, setIsOpen] = useState(false);
const [messages, setMessages] = useState(messageData);

const handleClose = () => {
  setIsOpen(false);
};

const handleMessageSent = (message) => {
  setMessages([
    ...messages,
    { ...message, dateTimeStamp: moment().format('LLLL') },
  ]);
};

<>
  <Button onClick={() => setIsOpen(!isOpen)}>
    <Icon icon={faComment} size="lg" className="margin-right-8" />
    Chat
  </Button>
  <ChatWindow
    isOpen={isOpen}
    messages={messages}
    onClose={handleClose}
    onMessageSent={handleMessageSent}
    incomingSenderName={incomingMessage.sender}
    incomingSenderStatus={incomingMessage.senderStatus}
    incomingSenderImg={incomingMessage.senderImg}
  />
</>;
```
