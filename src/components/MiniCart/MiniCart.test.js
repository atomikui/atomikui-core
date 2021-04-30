import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import { mount, configure } from 'enzyme';
import MiniCart from './MiniCart';

configure({ adapter: new Adapter() });

describe('<MiniCart />', () => {
  let miniCart;
  let onProceedToCartSpy;

  beforeEach(() => {
    onProceedToCartSpy = sinon.spy();

    miniCart = mount(
      <MiniCart onProceedToCart={onProceedToCartSpy}></MiniCart>,
    );
  });

  it('Should render without errors', () => {
    expect(miniCart).toHaveLength(1);
  });
});
