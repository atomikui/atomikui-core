/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Tab from './Tab';

configure({ adapter: new Adapter() });

describe('<Tab />', () => {
  beforeEach(() => {});

  it('Should render without errors', () => {});
});
