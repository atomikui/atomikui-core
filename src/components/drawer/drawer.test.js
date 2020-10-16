import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import { mount, configure } from 'enzyme';
import Drawer from './Drawer';

configure({ adapter: new Adapter() });

describe('<Drawer />', () => {
  let drawer;
  let onCloseSpy;

  beforeEach(() => {
    onCloseSpy = sinon.spy();
    drawer = mount(<Drawer onClose={onCloseSpy} isOpen={true} />);
  });

  it('Should call onClose when escape key is pressed', () => {
    drawer
      .find('.atomikui-drawer')
      .simulate('keydown', { key: 'Escape', keyCode: 27, which: 27 });

    expect(onCloseSpy.called).toBe(true);
  });

  it('Should call onClose when overlay is clicked', () => {
    drawer.find('Overlay').simulate('click');

    expect(onCloseSpy.called).toBe(true);
  });

  it('Should set the left position of the drawer', () => {
    expect(drawer.find('.atomikui-drawer').props().style.left).toBe(0);
  });
});
