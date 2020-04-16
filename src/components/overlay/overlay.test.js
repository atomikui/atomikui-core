/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Overlay from './Overlay';

configure({ adapter: new Adapter() });

describe('<Overlay />', () => {
  let overlay;

  beforeEach(() => {
    overlay = shallow(<Overlay />);
  });

  it('Should render without errors', () => {
    expect(overlay.length).toBe(1);
  });

  it('Should set a color variant', () => {
    overlay.setProps({ variant: 'blue' });
    expect(overlay.hasClass('overlay--blue')).toBe(true);
  });
});
