import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import { mount, configure } from 'enzyme';
import Modal from './Modal';

configure({ adapter: new Adapter() });

describe('<Modal />', () => {
  let modal;
  let onCloseSpy;

  beforeEach(() => {
    onCloseSpy = sinon.spy();

    modal = mount(
      <Modal
        title="Modal Title"
        isOpen={true}
        onClose={onCloseSpy}
        footer={
          <div className="text-align-right">
            <p>footer</p>
          </div>
        }
      >
        <p>body</p>
      </Modal>,
    );
  });

  it('Should call onClose when modal close button is clicked', () => {
    modal.find('[data-test-id="modal-close-btn"]').simulate('click');

    expect(onCloseSpy.called).toBeTruthy();
  });

  it('Should call onClose when modal overlay is clicked', () => {
    modal.find('[data-test-id="overlay"]').simulate('click');

    expect(onCloseSpy.called).toBeTruthy();
  });

  it('Should not call onClose when modal overlay is clicked if `disableOverlayclick` is true', () => {
    modal.setProps({ disableOverlayclick: true });
    modal.find('[data-test-id="overlay"]').simulate('click');

    expect(onCloseSpy.called).toBeFalsy();
  });

  it('Should call onClose when escape key is pressed', () => {
    modal
      .find('[data-test-id="modal-close-btn"]')
      .simulate('keydown', { key: 'Escape', keyCode: 27, which: 27 });

    expect(onCloseSpy.called).toBeTruthy();
  });

  it('Should not call onClose callback if overlay click event is disabled', () => {
    modal.setProps({ disableOverlayclick: true, noOverlay: false });

    modal.find('[data-test-id="overlay"]').simulate('click');

    expect(onCloseSpy.called).toBeFalsy();
  });

  it('Should set the overlay theme class', () => {
    modal.setProps({ overlayTheme: 'white' });

    expect(
      modal
        .find('[data-test-id="overlay"]')
        .hasClass('atomikui-overlay--white'),
    ).toBeTruthy();
  });

  it('Should conditionally render modal', () => {
    expect(modal.find('[data-test-id="overlay"]').children()).toHaveLength(1);
    modal.setProps({ isOpen: false });
    expect(modal.find('[data-test-id="overlay"]').children()).toHaveLength(0);
  });
});
