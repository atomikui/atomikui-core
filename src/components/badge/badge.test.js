/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Badge from './Badge';

configure({ adapter: new Adapter() });

describe('<Badge />', () => {
  let badge;

  beforeEach(() => {
    badge = shallow(<Badge>New</Badge>);
  });

  it('Should render without errors', () => {
    expect(badge.length).toBe(1);
  });
});
