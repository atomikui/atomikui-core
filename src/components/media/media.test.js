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

  it('Should render a header section', () => {
    expect(media.find('[data-test-id="media-hd"]')).toHaveLength(1);
  });

  it('Should render a body section', () => {
    expect(media.find('[data-test-id="media-bd"]')).toHaveLength(1);
  });

  it('Should render a footer section', () => {
    expect(media.find('[data-test-id="media-ft"]')).toHaveLength(1);
  });
});
