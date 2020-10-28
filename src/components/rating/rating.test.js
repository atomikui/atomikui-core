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

  it('Should render 4 stars', () => {
    expect(rating.find('[data-test-id="rating"]').children().length).toBe(4);
  });

  it('Should render 5 stars', () => {
    rating.setProps({ stars: 4.5 });
    expect(rating.find('[data-test-id="rating"]').children().length).toBe(5);
  });

  it('Should not render more than 5 stars', () => {
    rating.setProps({ stars: 20 });

    expect(rating.find('[data-test-id="rating"]').children().length).toBe(5);
  });

  it('Should trigger onSelect callback', () => {
    const onSelectSpy = sinon.spy();
    rating.setProps({ onSelect: onSelectSpy });

    rating.find('[data-test-id="rating"]').children().first().simulate('click');

    expect(onSelectSpy.withArgs(1).called).toBe(true);
  });
});
