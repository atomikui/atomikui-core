import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mount, configure } from 'enzyme';
import Header from './Header';

configure({ adapter: new Adapter() });

describe('<Header />', () => {
  let header;

  beforeEach(() => {
    header = mount(
      <Header
        backgroundColor="#263238"
        logo={<img src="" />}
        logoLink="/"
        logoText="Atomik UI"
        logoFontSize={30}
        logoFont="'Barlow Condensed', Arial, Helvetica, sans-serif"
        logoFontColor="#fff9c4"
        linkColor="#fff"
        menuToggleColor="#fff"
      >
        <a href="/about">About</a>
        <a href="/products">Products</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </Header>,
    );
  });

  it('Should toggle .is-open class when menu button is clicked', () => {
    header.find('button.atomikui-header__menu-toggle').simulate('click');
    expect(
      header.find('nav.atomikui-header__nav').hasClass('is-open'),
    ).toBeTruthy();

    header.find('button.atomikui-header__menu-toggle').simulate('click');
    expect(
      header.find('nav.atomikui-header__nav').hasClass('is-open'),
    ).toBeFalsy();
  });

  it('Should hide nav when nav link is clicked', () => {
    header.find('button.atomikui-header__menu-toggle').simulate('click');
    header.find('nav.atomikui-header__nav a').first().simulate('click');

    expect(
      header.find('nav.atomikui-header__nav').hasClass('is-open'),
    ).toBeFalsy();
  });

  it('Should render logo content as an anchor or span', () => {
    expect(header.find('a.atomikui-header__logo-content')).toBeTruthy();

    header.setProps({ logoLink: null });
    expect(header.find('span.atomikui-header__logo-content')).toBeTruthy();
  });
});
