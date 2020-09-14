import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Flag from './Flag';

configure({ adapter: new Adapter() });

describe('<Flag />', () => {
  beforeEach(() => {});

  it('Should render without errors', () => {});
});
