/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Rating from './Rating';

configure({ adapter: new Adapter() });

describe('<Rating />', () => {
  beforeEach(() => {});

  it('Should render without errors', () => {});
});
