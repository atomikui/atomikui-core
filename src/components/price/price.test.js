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
    expect(price).toBeTruthy();
  });

  it('Should set the color theme class', () => {
    price.setProps({ theme: 'green' });
    expect(price.hasClass('atomikui-price--green')).toBe(true);
  });

  it('Should render dark theme', () => {
    price.setProps({ theme: 'red' });
    expect(price.hasClass('atomikui-price--red')).toBe(true);
  });

  it('Should render light theme', () => {
    price.setProps({ theme: 'red', themeVariant: 'light' });
    expect(price.hasClass('atomikui-price--red-light')).toBe(true);
  });
});
