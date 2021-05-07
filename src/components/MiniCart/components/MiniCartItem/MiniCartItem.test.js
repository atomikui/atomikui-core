import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import MiniCartItem from './MiniCartItem';

configure({ adapter: new Adapter() });

describe('<MiniCartItem />', () => {
  let miniCartItem;

  beforeEach(() => {
    miniCartItem = shallow(
      <MiniCartItem title="product" quantity={2} price={0.99} />,
    );
  });

  it('Should render without errors', () => {
    expect(miniCartItem).toHaveLength(1);
  });
});
