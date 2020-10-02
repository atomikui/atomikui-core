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

  it('Should render without errors', () => {
    expect(tab).toBeTruthy();
  });

  it('Should render a button with text', () => {
    expect(tab.find('Button')).toBeTruthy();
    expect(tab.find('Button').children().text()).toBe('Tab One');
  });

  it('Should render child content', () => {
    tab.setProps({ children: <span>Child</span> });
    expect(tab.find('.atomikui-tab__content')).toBeTruthy();
  });
});
