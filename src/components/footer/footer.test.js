import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mount, configure } from 'enzyme';
import Footer from './Footer';
import { TestScheduler } from 'jest';

configure({ adapter: new Adapter() });

describe('<Footer />', () => {
  let footer;

  beforeEach(() => {
    footer = mount(
      <Footer
        copyrightEntity="Atomik UI"
        backgroundColor="#263238"
        navBackgroundColor="#1b282e"
        linkColor="#fff9c4"
        textColor="#fff"
        logo={<img />}
      >
        <a href="/about">About</a>
        <a href="/products">Products</a>
        <a href="/faqs">FAQs</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </Footer>,
    );
  });

  it('Should render without errors', () => {
    expect(footer).toHaveLength(1);
  });
});
