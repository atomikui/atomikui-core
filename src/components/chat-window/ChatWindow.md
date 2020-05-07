```jsx
import { useState } from 'react';
import moment from 'moment';
import { ChatWindow, Button } from '@alaneicker/react-component-library';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const incomingMessage = {
  sender: 'Paul Smith',
  senderStatus: 'available',
  senderImg: 'https://avatars0.githubusercontent.com/u/56617615',
  messages: [
    {
      message: 'Hello there!',
      dateTimeStamp: 'Tuesday, March 10, 2020 3:36 PM',
      originIpAddress: '73.247.96.88',
    },
  ],
};

const outgoingMessages = {
  incomingSenderName: 'Paul Smith',
  incomingSenderImg: 'https://avatars0.githubusercontent.com/u/56617615',
  messages: [
    {
      message: "Hi!, What's up?",
      dateTimeStamp: 'Tuesday, March 10, 2020 3:36 PM',
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
