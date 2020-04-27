/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import TabPanel from './TabPanel';

configure({ adapter: new Adapter() });

describe('<TabPanel />', () => {
  beforeEach(() => {});

  it('Should render without errors', () => {});
});
