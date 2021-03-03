/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import { shallow, configure } from 'enzyme';
import ChatWindow from './ChatWindow';

configure({ adapter: new Adapter() });

describe('<ChatWindow />', () => {
  let chatWindow;
  let onCloseSpy;
  let onMessageSentSpy;

  beforeEach(() => {
    onCloseSpy = sinon.spy();
    onMessageSentSpy = sinon.spy();

    chatWindow = shallow(
      <ChatWindow
        isOpen
        messages={[]}
        onClose={onCloseSpy}
        onMessageSent={onMessageSentSpy}
        incomingSenderName="Brett Thompson"
        incomingSenderStatus="available"
      />,
    );
  });

  it('Should trigger onClose callback', () => {
    chatWindow.setProps({ isOpen: true });
    chatWindow.find('[data-test-id="chat-window-close-btn"]').simulate('click');
    expect(onCloseSpy.called).toBeTruthy();
  });

  it('Should trigger onMessageSent callback', () => {
    chatWindow
      .find('.atomikui-chat-window__input')
      .simulate('change', { target: { value: 'Hello!' } });
    chatWindow.find('[data-test-id="chat-window-send-btn"]').simulate('click');

    expect(onMessageSentSpy.called).toBeTruthy();
  });

  it('Should trigger onMessageSent callback when enter key is pressed', () => {
    chatWindow
      .find('textarea[data-test-id="chat-window-user-input"]')
      .simulate('change', { target: { value: 'Hello!' } });
    chatWindow.find('.atomikui-chat-window__input').simulate('keydown', {
      key: 'Enter',
      keyCode: 13,
      which: 13,
      preventDefault() {},
    });

    expect(onMessageSentSpy.called).toBeTruthy();
  });
});
