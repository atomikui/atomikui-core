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
      <MiniCart onProceedToCart={onProceedToCartSpy}>
        <MiniCart.Item title="Apples" quantity={6} price={0.89} />
        <MiniCart.Item title="Oranges" quantity={8} price={0.99} />
        <MiniCart.Item title="Peaches" quantity={12} price={0.79} />
      </MiniCart>,
    );
  });

  it('Should render without errors', () => {
    expect(miniCart).toHaveLength(1);
  });

  it('should call onProceedToCart', () => {
    miniCart.find('button').simulate('click');
    expect(onProceedToCartSpy.called).toBeTruthy();
  });

  it('should hide the button', () => {
    miniCart.setProps({ hideButton: true });
    expect(miniCart.find('button')).toHaveLength(0);
  });

  it('should add a custom button', () => {
    miniCart.setProps({ customButton: <a href="/cart">go to cart</a> });
    const customButton = miniCart.find('a');
    expect(customButton).toHaveLength(1);
    expect(customButton.text()).toBe('go to cart');
  });
});
