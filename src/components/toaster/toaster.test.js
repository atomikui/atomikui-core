/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Toaster from './Toaster';

configure({ adapter: new Adapter() });

describe('<Toaster />', () => {
  beforeEach(() => {});

  it('Should render withput errors', () => {});
});
