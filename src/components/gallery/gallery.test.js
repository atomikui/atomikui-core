import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Gallery from './Gallery';

configure({ adapter: new Adapter() });

describe('<Gallery />', () => {
  let gallery;

  beforeEach(() => {
    gallery = shallow(
      <Gallery
        showFeaturedImage
        items={[
          {
            url: 'landscape-1.jpg',
            caption: 'Snow capped mountains at dusk',
          },
          {
            url: 'landscape-2.jpg',
            caption: 'Tree in a lake',
          },
          {
            url: 'landscape-3.jpg',
            caption: 'Dock walk at dawn',
          },
          {
            url: 'landscape-4.jpg',
            caption: 'Misty boat ride',
          },
          {
            url: 'landscape-5.jpg',
            caption: 'Shelves carved in slopes',
          },
          {
            url: 'landscape-6.jpg',
            caption: 'Mountain lake',
          },
          {
            url: 'landscape-7.jpg',
            caption: 'Desert thunderstorm',
          },
          {
            url: 'landscape-8.jpg',
            caption: 'Aurora sky',
          },
          {
            url: 'landscape-9.jpg',
            caption: 'Rusty cliffs',
          },
        ]}
      />,
    );
  });

  it('Should render without errors', () => {
    expect(Gallery).toHaveLength(1);
  });
});
