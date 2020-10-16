import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Avatar from './Avatar';

configure({ adapter: new Adapter() });

describe('<Avatar />', () => {
  it('Should render a label', () => {
    const avatar = shallow(
      <Avatar src="/profile-image.png" alt="Alan Smith" label="Avatar Label" />,
    );

    const label = avatar.find('.atomikui-avatar__label');

    expect(label).toBeTruthy();
  });

  it('Should render children', () => {
    const avatar = shallow(
      <Avatar>
        <svg />
      </Avatar>,
    );
    expect(avatar.children()).toBeTruthy();
  });

  it('Should render a theme', () => {
    const avatar = shallow(
      <Avatar
        src="/profile-image.png"
        alt="Alan Smith"
        label="Avatar Label"
        theme="red"
      />,
    );

    expect(
      avatar
        .find('.atomikui-avatar__content')
        .hasClass('atomikui-avatar__content--red'),
    ).toBeTruthy();
  });

  it('Should render a light theme variant', () => {
    const avatar = shallow(
      <Avatar
        src="/profile-image.png"
        alt="Alan Smith"
        label="Avatar Label"
        theme="red"
        themeVariant="light"
      />,
    );

    expect(
      avatar
        .find('.atomikui-avatar__content')
        .hasClass('atomikui-avatar__content--red-light'),
    ).toBeTruthy();
  });
});
