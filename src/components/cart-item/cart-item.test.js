import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import CartItem from './CartItem';

configure({ adapter: new Adapter() });

describe('<CartItem />', () => {
  beforeEach(() => {});

  it('Should render without errors', () => {});
});
