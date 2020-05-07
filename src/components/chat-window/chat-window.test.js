/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import ChatWindow from './ChatWindow';

configure({ adapter: new Adapter() });

describe('<ChatWindow />', () => {
  beforeEach(() => {});

  it('Should render without errors', () => {});
});
