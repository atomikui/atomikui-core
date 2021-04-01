import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import TabButton from './TabButton';

configure({ adapter: new Adapter() });

describe('<TabButton />', () => {
  let tabButton;
  beforeEach(() => {
    tabButton = shallow(<TabButton label="Tab One" />);
  });

  it('Should render a button with text', () => {
    expect(tabButton.find('[data-test-id="tab-btn"]')).toBeTruthy();
    expect(tabButton.find('[data-test-id="tab-btn"]').children().text()).toBe(
      'Tab One',
    );
  });

  it('Should render child content', () => {
    tabButton.setProps({ children: <span>Child</span> });
    expect(tabButton.find('[data-test-id="tab-content"]')).toBeTruthy();
  });
});
