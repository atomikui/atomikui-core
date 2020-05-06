/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Price from './Price';

configure({ adapter: new Adapter() });

describe('<Price />', () => {
  beforeEach(() => {});

  it('Should render without errors', () => {});
});
