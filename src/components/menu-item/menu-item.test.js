/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import MenuItem from './MenuItem';

configure({ adapter: new Adapter() });

describe('<MenuItem />', () => {
  let menuitem;

  beforeEach(() => {
    menuitem = shallow(<MenuItem>Item 1</MenuItem>);
  });

  it('Should render without errors', () => {
    expect(menuitem.length).toBe(1);
  });

  it('Should render a ListItem', () => {
    expect(menuitem.find('ListItem').length).toBe(1);
  });

  it('Should render children', () => {
    expect(menuitem.find('ListItem').children().text()).toBe('Item 1');
  });
});
