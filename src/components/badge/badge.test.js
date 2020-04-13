/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Badge from './Badge';

configure({ adapter: new Adapter() });

describe('<Badge />', () => {
  beforeEach(() => {});

  it('Should render withput errors', () => {});
});
