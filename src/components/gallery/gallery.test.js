import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mount, configure } from 'enzyme';
import Gallery from './Gallery';

configure({ adapter: new Adapter() });

const images = [
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
];

describe('<Gallery />', () => {
  let gallery;

  beforeEach(() => {
    gallery = mount(<Gallery showFeaturedImage items={images} />);
  });

  it('Should render without errors', () => {
    expect(gallery).toHaveLength(1);
  });

  it('Should render a feature image', () => {
    expect(gallery.find('.is-featured')).toHaveLength(1);
  });

  it('Should show or hide image overlay', () => {
    gallery.find('button').first().simulate('click');
    expect(gallery.find('Overlay').props().isActive).toBeTruthy();

    gallery.find('button[data-testid="overlay-close-btn"]').simulate('click');
    expect(gallery.find('Overlay').props().isActive).toBeFalsy();
  });
});
