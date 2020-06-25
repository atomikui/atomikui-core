import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Collapse from './Collapse';

configure({ adapter: new Adapter() });

describe('<Collapse />', () => {
  beforeEach(() => {});

  it('Should render without errors', () => {});
});
