import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import TabItem from './TabItem';

configure({ adapter: new Adapter() });

describe('<TabItem />', () => {
  let tabItem;

  beforeEach(() => {
    tabItem = shallow(<TabItem label="Tab One" />);
  });

  it('Should render a button with text', () => {
    expect(tabItem.find('[data-test-id="tab-btn"]')).toBeTruthy();
    expect(tabItem.find('[data-test-id="tab-btn"]').children().text()).toBe(
      'Tab One',
    );
  });

  it('Should render child content', () => {
    tabItem.setProps({ children: <span>Child</span> });
    expect(tabItem.find('[data-test-id="tab-content"]')).toBeTruthy();
  });
});
