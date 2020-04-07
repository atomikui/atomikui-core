/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import AutoComplete from './AutoComplete';

configure({ adapter: new Adapter() });

describe('<AutoComplete />', () => {
  beforeEach(() => {});

  it('Should render withput errors', () => {});
});
