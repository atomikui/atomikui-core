import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import ChatMessage from './ChatMessage';

configure({ adapter: new Adapter() });

describe('<ChatMessage />', () => {
  let chatMessage;

  beforeEach(() => {
    chatMessage = shallow(
      <ChatMessage
        message="Hello!"
        isSameOrigin={true}
        dateTimeStamp="Tuesday, March 10, 2020 3:36 PM"
      />,
    );
  });

  it('Should render without errors', () => {
    expect(chatMessage.length).toBe(1);
  });

  it('Should render the timestamp', () => {
    expect(chatMessage.find('.rcl-chat-message__item__timestamp').text()).toBe(
      'Tuesday, March 10, 2020 3:36 PM',
    );
  });

  it('Should add a modifier class if same origin', () => {
    expect(chatMessage.hasClass('is-same-origin')).toBe(true);
  });
});
