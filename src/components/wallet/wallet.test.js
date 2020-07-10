import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Wallet from './Wallet';

configure({ adapter: new Adapter() });

describe('<Wallet />', () => {
  beforeEach(() => {});

  it('Should render without errors', () => {});
});
