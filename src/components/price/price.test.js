import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Price from './Price';

configure({ adapter: new Adapter() });

describe('<Price />', () => {
  let price;

  beforeEach(() => {
    price = shallow(<Price amount={124.99} label="/ month" />);
  });

  it('Should render without errors', () => {
    expect(price.length).toBe(1);
  });

  it('Should set the color modifier', () => {
    price.setProps({ color: 'green' });
    expect(price.hasClass('atomikui-price--green')).toBe(true);
  });
});
