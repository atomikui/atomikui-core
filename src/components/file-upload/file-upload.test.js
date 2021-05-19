import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import { mount, configure } from 'enzyme';
import FileUpload from './FileUpload';

configure({ adapter: new Adapter() });

describe('<FileUpload />', () => {
  let fileUpload;
  let onChangeSpy;
  const preventDefaultSpy = sinon.spy();
  const stopPropagationSpy = sinon.spy();

  const fileName = 'image.png';

  const dragOverEvent = {
    preventDefault: preventDefaultSpy,
    stopPropagation: stopPropagationSpy,
  };

  const onDropEvent = {
    dataTransfer: {
      files: [{ name: fileName }],
    },
  };

  const onChangeEvent = {
    target: {
      files: [{ name: fileName }],
    },
  };

  beforeEach(() => {
    onChangeSpy = sinon.spy();

    fileUpload = mount(
      <FileUpload
        label="Upload file"
        uploadBtnTheme="blue"
        onChange={onChangeSpy}
      />,
    );
  });

  it('Should trigger onChange callback when file input value changes', () => {
    fileUpload.find('input').simulate('change');

    expect(onChangeSpy.called).toBeTruthy();
  });

  it('Should trigger onChange callback on file drop', () => {
    fileUpload
      .find('[data-test-id="file-upload-wrapper"]')
      .simulate('drop', onDropEvent);

    expect(onChangeSpy.called).toBeTruthy();
  });

  it('Should prevent call `preventDefault` and `stopPropagation` onDragOver', () => {
    fileUpload
      .find('[data-test-id="file-upload-wrapper"]')
      .simulate('dragOver', dragOverEvent);

    expect(preventDefaultSpy.called).toBeTruthy();
    expect(stopPropagationSpy.called).toBeTruthy();
  });

  it('Should display the filename', () => {
    fileUpload.find('input').simulate('change', onChangeEvent);

    expect(
      fileUpload
        .find('[data-test-id="file-upload-wrapper"]')
        .children()
        .last()
        .text(),
    ).toBe(fileName);
  });

  it('Should remove a filename', () => {
    fileUpload.setProps({ dragAndDrop: true });
    fileUpload.find('input').simulate('change', onChangeEvent);
    const btn = fileUpload.find('button[data-test-id="file-delete-button"]');
    btn.simulate('click');
    expect(fileUpload.find('[data-test-id="file-item"]')).toHaveLength(0);
  });

  it('Should render a list of files if `dragAndDrop` prop is `true`', () => {
    fileUpload.setProps({ dragAndDrop: true });
    fileUpload
      .find('[data-test-id="file-upload-wrapper"]')
      .simulate('drop', onDropEvent);

    expect(fileUpload.find('List').children()).toBeTruthy();
  });

  it('Should render error class', () => {
    fileUpload.setProps({ hasError: true });

    expect(
      fileUpload.find('[data-test-id="file-upload"]').hasClass('has-error'),
    ).toBeTruthy();
  });

  it('Should render error hint with text', () => {
    fileUpload.setProps({ errorText: 'Error text', hasError: true });

    expect(fileUpload.find('Hint')).toBeTruthy();
    expect(fileUpload.find('Hint').text()).toBe('Error text');
  });

  it('Should render help hint with text', () => {
    fileUpload.setProps({ helpText: 'Help text' });

    expect(fileUpload.find('Hint')).toBeTruthy();
    expect(fileUpload.find('Hint').text()).toBe('Help text');
  });
});
