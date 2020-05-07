```jsx
import { useState } from 'react';
import { ChatWindow, Button } from '@alaneicker/react-component-library';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const messageData = [
  {
    message: 'Hello there!',
    dateTimeStamp: 'Tuesday, March 10, 2020 3:36 PM',
  },
  {
    originIpAddress: '73.247.96.88',
    message: 'Hi',
    dateTimeStamp: 'Tuesday, March 10, 2020 3:36 PM',
  },
  {
    originIpAddress: '73.247.96.88',
    message: 'How are you!',
    dateTimeStamp: 'Tuesday, March 10, 2020 3:36 PM',
  },
  {
    message: "I'm well. Thanks for asking!",
    dateTimeStamp: 'Tuesday, March 10, 2020 3:36 PM',
  },
  {
    originIpAddress: '73.247.96.88',
    message:
      "Sorry I haven't been in touch lately. I've been busy moving. Spent the past week packing and just settled into my new place. I'm exhausted",
    dateTimeStamp: 'Tuesday, March 10, 2020 3:36 PM',
  },
  {
    message: "That's great!",
    dateTimeStamp: 'Tuesday, March 10, 2020 3:36 PM',
  },
  {
    message:
      "I'm glad your move went well. I'll have to stop over and see your new place.",
    dateTimeStamp: 'Tuesday, March 10, 2020 3:36 PM',
  },
  {
    originIpAddress: '73.247.96.88',
    message: "Definitely! Yeah, it wasn't as bad as I thought it would be.",
    dateTimeStamp: 'Tuesday, March 10, 2020 3:36 PM',
  },
  {
    message: 'When are you free?',
    dateTimeStamp: 'Tuesday, March 10, 2020 3:36 PM',
  },
  {
    message: "I'll breing the beer!",
    dateTimeStamp: 'Tuesday, March 10, 2020 3:36 PM',
  },
  {
    originIpAddress: '73.247.96.88',
    message: 'How about Friday night? 7ish?',
    dateTimeStamp: 'Tuesday, March 10, 2020 3:36 PM',
  },
  {
    message: 'Sounds great! See you then!',
    dateTimeStamp: 'Tuesday, March 10, 2020 3:36 PM',
  },
  {
    originIpAddress: '73.247.96.88',
    message: "Can't wait. See ya!",
    dateTimeStamp: 'Tuesday, March 10, 2020 3:36 PM',
  },
];

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
  <Button theme="hollow" onClick={() => setIsOpen(!isOpen)}>
    <Icon icon={faComment} size="lg" className="margin-right-8" />
    Chat
  </Button>
  <ChatWindow
    isOpen={isOpen}
    messages={messages}
    onClose={handleClose}
    onMessageSent={handleMessageSent}
    incomingSenderName="Alan Eicker"
    incomingSenderImg="https://avatars0.githubusercontent.com/u/56617615"
  />
</>;
```
