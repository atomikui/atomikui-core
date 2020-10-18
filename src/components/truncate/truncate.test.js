import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mount, configure } from 'enzyme';
import Truncate from './Truncate';
import Link from '../link';

configure({ adapter: new Adapter() });

describe('<Truncate />', () => {
  let truncate;

  beforeEach(() => {
    truncate = mount(
      <Truncate maxWords={50}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pretium
        aliquam iaculis. Ut sed dolor non turpis tincidunt varius. Fusce vel
        arcu dolor. Vivamus id rutrum lorem, non venenatis neque. Proin dictum
        sed sem ac congue. Aenean lacinia ipsum vel felis tincidunt, et semper
        augue auctor. Vivamus in condimentum erat. Nulla massa dui, accumsan et
        vulputate et, tempus a lorem. Maecenas euismod porta varius. Donec
        tempus non risus et venenatis. Quisque id cursus elit, eu mattis urna.
        Cras justo sapien, consequat ac lacus vel, egestas scelerisque sapien.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec
        vitae posuere lorem. Integer in urna ac mi posuere facilisis in ut
        justo.
      </Truncate>,
    );
  });

  it('Should render with custom ellipses content', () => {
    truncate.setProps({
      afterEllipses: <Link href="/path/to/article">Read More</Link>,
    });

    const anchor = truncate.find('a');

    expect(anchor).toBeTruthy();
    expect(anchor.text()).toBe('Read More');
    expect(anchor.prop('href')).toBe('/path/to/article');
  });

  it('Should truncate content', () => {
    const wordCount = truncate.text().replace(' ... Show more', '').split(' ')
      .length;

    expect(wordCount).toBe(50);
  });

  it('Should show truncated content', () => {
    truncate.find('Button').simulate('click');
    const wordCount = truncate.text().replace(' ... Show more', '').split(' ')
      .length;

    expect(wordCount).toBeGreaterThan(50);
  });
});
