import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Sticky from './Sticky';

configure({ adapter: new Adapter() });

describe('<Sticky />', () => {
  beforeEach(() => {});

  it('Should render without errors', () => {});
});
