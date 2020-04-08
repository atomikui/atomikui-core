/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mount, configure } from 'enzyme';
import Accordion from './Accordion';

configure({ adapter: new Adapter() });

describe('<Accordion />', () => {
  beforeEach(() => {});

  it('Should render withput errors', () => {});
});
