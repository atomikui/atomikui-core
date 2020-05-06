/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Statistic from './Statistic';

configure({ adapter: new Adapter() });

describe('<Statistic />', () => {
  let statistic;

  beforeEach(() => {});

  it('Should render without errors', () => {});
});
