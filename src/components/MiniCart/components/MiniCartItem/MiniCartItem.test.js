import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import { mount, configure } from 'enzyme';
import MiniCartItem from './MiniCartItem';

configure({ adapter: new Adapter() });

describe('<MiniCartItem />', () => {
  let miniCartItem;

  beforeEach(() => {
    onProceedToCartSpy = sinon.spy();

    miniCartItem = mount(<MiniCartItem />);
  });

  it('Should render without errors', () => {
    expect(miniCartItem).toHaveLength(1);
  });
});
