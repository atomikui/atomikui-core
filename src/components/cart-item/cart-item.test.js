import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import { shallow, configure } from 'enzyme';
import CartItem from './CartItem';

configure({ adapter: new Adapter() });

describe('<CartItem />', () => {
  let cartItem;
  let onQuantityChangeSpy;

  beforeEach(() => {
    onQuantityChangeSpy = sinon.spy();

    cartItem = shallow(
      <CartItem
        imageUrl="product-les-paul.jpg"
        description="Gibson - 60th Anniversary 1960 Les Paul Standard - Deep Cherry Sunburst"
        quantity={1}
        onQuantityChange={onQuantityChangeSpy}
        price={6499.99}
      />,
    );
  });

  it('Should render without errors', () => {
    expect(cartItem.length).toBe(1);
  });

  it('Should trigger onQuantityChange when quantity is updated', () => {
    cartItem
      .find('ForwardRef')
      .dive()
      .find('input')
      .simulate('change', { target: { value: 2 } });
    expect(onQuantityChangeSpy.withArgs(2).called).toBe(true);
  });
});
