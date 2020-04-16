/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Breadcrumb from './Breadcrumb';

configure({ adapter: new Adapter() });

describe('<Breadcrumb />', () => {
  beforeEach(() => {});

  it('Should render without errors', () => {});
});
