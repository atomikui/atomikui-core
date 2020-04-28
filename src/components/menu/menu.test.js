/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mount, configure } from 'enzyme';
import Menu from './Menu';
import Link from '../link';

configure({ adapter: new Adapter() });

describe('<Menu />', () => {
  let menu;

  beforeEach(() => {
    menu = mount(
      <Menu>
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/blocg">Blog</Link>
        <Link href="/contact">Contact</Link>
      </Menu>,
    );
  });

  it('Should render without errors', () => {
    expect(menu.length).toBe(1);
  });

  it('Should render children', () => {
    expect(menu.find('ul').children().length).toBe(5);
  });
});
