/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Link from './Link';

configure({ adapter: new Adapter() });

describe('<Hint />', () => {
  let link;

  beforeEach(() => {
    link = shallow(
      <Link target="_blank" href="/home">
        <span>This is a link</span>
      </Link>,
    );
  });

  it('Should render without errors', () => {
    expect(link.length).toBe(1);
  });

  it('Should render children', () => {
    expect(link.find('span').length).toBe(1);
    expect(link.find('span').text()).toBe('This is a link');
  });

  it('Should render with an href', () => {
    expect(link.prop('href')).toBe('/home');
  });

  it('Should render rel="noopener noreferrer if target="_blank""', () => {
    expect(link.prop('rel')).toBe('noopener noreferrer');
  });
});
