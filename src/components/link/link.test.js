import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Link from './Link';

configure({ adapter: new Adapter() });

describe('<Link />', () => {
  let link;

  beforeEach(() => {
    link = shallow(
      <Link target="_blank" href="/home">
        This is a link
      </Link>,
    );
  });

  it('Should render children', () => {
    expect(link).toHaveLength(1);
    expect(link.text()).toBe('This is a link');
  });

  it('Should render with an href', () => {
    expect(link.prop('href')).toBe('/home');
  });

  it('Should conditionally apply rel="noopener noreferrer" attribute', () => {
    expect(link.prop('rel')).toBe('noopener noreferrer');

    link.setProps({ target: null });

    expect(link.prop('rel')).toBeNull();
  });
});
