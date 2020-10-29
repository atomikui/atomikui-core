import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Tab from './Tab';

configure({ adapter: new Adapter() });

describe('<Tab />', () => {
  let tab;
  beforeEach(() => {
    tab = shallow(<Tab label="Tab One" />);
  });

  it('Should render a button with text', () => {
    expect(tab.find('[data-test-id="tab-btn"]')).toBeTruthy();
    expect(tab.find('[data-test-id="tab-btn"]').children().text()).toBe(
      'Tab One',
    );
  });

  it('Should render child content', () => {
    tab.setProps({ children: <span>Child</span> });
    expect(tab.find('[data-test-id="tab-content"]')).toBeTruthy();
  });
});
