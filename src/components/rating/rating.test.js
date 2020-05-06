/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import { mount, configure } from 'enzyme';
import Rating from './Rating';

configure({ adapter: new Adapter() });

describe('<Rating />', () => {
  let rating;

  beforeEach(() => {
    rating = mount(<Rating stars={4} />);
  });

  it('Should render without errors', () => {
    expect(rating.length).toBe(1);
  });

  it('Should render 4 stars', () => {
    expect(rating.find('.rcl-rating').children().length).toBe(4);
  });

  it('Should render 5 stars', () => {
    rating.setProps({ stars: 4.5 });
    expect(rating.find('.rcl-rating').children().length).toBe(5);
  });
});
