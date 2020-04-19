/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Drawer from './Drawer';

configure({ adapter: new Adapter() });

describe('<Drawer />', () => {
  let drawer;

  beforeEach(() => {
    drawer = shallow(<Drawer />);
  });

  it('Should render without errors', () => {
    expect(drawer.length).toBe(1);
  });
});
