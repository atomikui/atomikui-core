import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Cart from './Cart';

configure({ adapter: new Adapter() });

describe('<Cart />', () => {
  beforeEach(() => {});

  it('Should render without errors', () => {});
});
