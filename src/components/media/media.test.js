import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mount, configure } from 'enzyme';
import Media from './Media';

configure({ adapter: new Adapter() });

describe('<Component />', () => {
  let media;

  beforeEach(() => {
    media = mount(
      <Media
        header="header content"
        footer="footer content"
        body="body content"
      />,
    );
  });

  it('Should render without errors', () => {
    expect(media.length).toBe(1);
  });
});
