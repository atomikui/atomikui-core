import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mount, configure } from 'enzyme';
import UserPersona from './UserPersona';

configure({ adapter: new Adapter() });

describe('<UserPersona />', () => {
  let userPersona;

  beforeEach(() => {
    userPersona = mount(
      <UserPersona
        avatar="bob.png"
        name="Bob Smith"
        status="available"
        statusMessage="I'm available until 11:30am"
      />,
    );
  });

  it('Should render without errors', () => {
    expect(userPersona).toHaveLength(1);
  });

  it('Should render initials', () => {
    userPersona.setProps({ avatar: null });
    expect(userPersona.find('[data-test-id="avatar-content"]').text()).toBe(
      'BS',
    );
  });

  it('Should render default status message if statusMessage prop is null', () => {
    userPersona.setProps({ statusMessage: null });
    expect(
      userPersona.find('[data-test-id="user-persona-status-message"]').text(),
    ).toBe('available');
  });
});
