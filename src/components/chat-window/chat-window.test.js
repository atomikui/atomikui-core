/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import { shallow, configure } from 'enzyme';
import ChatWindow from './ChatWindow';

configure({ adapter: new Adapter() });

const longText =
  'Pellentesque elementum bibendum est, ornare rutrum odio condimentum sed. Vestibulum ut eros vitae sapien suscipit porttitor. Sed elit diam, vestibulum sed accumsan eu, euismod sed lectus. Suspendisse velit turpis, cursus sit amet vestibulum ac, tincidunt et odio. Nulla vitae posuere metus. Nunc dolor libero, mollis a feugiat quis, commodo sit amet lectus. Nulla velit diam, feugiat eu orci vitae, dictum eleifend orci.';

describe('<ChatWindow />', () => {
  let chatWindow;
  let onCloseSpy;
  let onMessageSentSpy;

  beforeEach(() => {
    onCloseSpy = sinon.spy();
    onMessageSentSpy = sinon.spy();

    // jest.spyOn(global, 'fetch').mockImplementation(() =>
    //   Promise.resolve({
    //     json: () => Promise.resolve({}),
    //   }),
    // );

    chatWindow = shallow(
      <ChatWindow
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
    chatWindow.find('.atomikui-chat-window__close-btn').simulate('click');
    expect(onCloseSpy.called).toBe(true);
  });

  it('Should trigger onMessageSent callback', () => {
    chatWindow
      .find('.atomikui-chat-window__input')
      .simulate('change', { target: { value: 'Hello!' } });
    chatWindow.find('.atomikui-chat-window__send-btn').simulate('click');

    expect(onMessageSentSpy.called).toBe(true);
  });

  it('Should trigger onMessageSent callback when enter key is pressed', () => {
    chatWindow
      .find('.atomikui-chat-window__input')
      .simulate('change', { target: { value: 'Hello!' } });
    chatWindow.find('.atomikui-chat-window__input').simulate('keydown', {
      key: 'Enter',
      keyCode: 13,
      which: 13,
      preventDefault() {},
    });

    expect(onMessageSentSpy.called).toBe(true);
  });

  it('Should auto expand the user input', () => {
    chatWindow
      .find('.atomikui-chat-window__input')
      .simulate('change', { target: { value: longText } });
  });
});
