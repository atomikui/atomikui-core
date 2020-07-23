import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Randomize from './Randomize';

configure({ adapter: new Adapter() });

describe('<Randomize />', () => {
  beforeEach(() => {});

  it('Should render without errors', () => {});
});
