import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { configure } from 'enzyme';
import Portal from './Portal';

configure({ adapter: new Adapter() });

describe('<Portal />', () => {
  beforeEach(() => {});

  it('Should render without errors', () => {});
});
