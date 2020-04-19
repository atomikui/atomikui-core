/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import { shallow, configure } from 'enzyme';
import Overlay from './Overlay';

configure({ adapter: new Adapter() });

describe('<Overlay />', () => {
  let overlay;

  const stopPropagationSpy = sinon.spy();
  const event = {
    stopPropagation: stopPropagationSpy,
  };

  beforeEach(() => {
    overlay = shallow(
      <Overlay>
        <div />
      </Overlay>,
    );
  });

  it('Should render without errors', () => {
    expect(overlay.length).toBe(1);
  });

  it('Should set a color variant', () => {
    overlay.setProps({ variant: 'blue' });
    expect(overlay.hasClass('overlay--blue')).toBe(true);
  });

  it('Should add onClick to all children', () => {
    expect(overlay.children().prop('onClick')).toBeDefined();
  });

  it('Should trigger "stopPropagation" on child click', () => {
    overlay.children().first().simulate('click', event);
    expect(stopPropagationSpy.called).toBe(true);
  });
});
