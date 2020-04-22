/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Tooltip from './Tooltip';

configure({ adapter: new Adapter() });

describe('<Tooltip />', () => {
  let tooltip;

  beforeEach(() => {
    tooltip = shallow(<Tooltip />);
  });

  it('Should render without errors', () => {
    expect(tooltip.length).toBe(1);
  });
});
