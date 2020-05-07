/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Statistic from './Statistic';

configure({ adapter: new Adapter() });

describe('<Statistic />', () => {
  let statistic;

  beforeEach(() => {
    statistic = shallow(<Statistic value="25,000" label="Views" />);
  });

  it('Should render without errors', () => {
    expect(statistic.length).toBe(1);
  });
});
