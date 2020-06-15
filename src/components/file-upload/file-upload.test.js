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
        uploadBtnTheme="primary"
        onChange={onChangeSpy}
      />,
    );
  });

  it('Should render without errors', () => {
    expect(fileUpload.length).toBe(1);
  });

  it('Should trigger onChange callback when file input value changes', () => {
    fileUpload.find('input').simulate('change');

    expect(onChangeSpy.called).toBe(true);
  });

  it('Should trigger onChange callback on file drop', () => {
    fileUpload
      .find('.atomikui-file-upload__wrapper')
      .simulate('drop', onDropEvent);

    expect(onChangeSpy.called).toBe(true);
  });

  it('Should prevent call `preventDefault` and `stopPropagation` onDragOver', () => {
    fileUpload
      .find('.atomikui-file-upload__wrapper')
      .simulate('dragOver', dragOverEvent);

    expect(preventDefaultSpy.called).toBe(true);
    expect(stopPropagationSpy.called).toBe(true);
  });

  it('Should display the filename', () => {
    fileUpload.find('input').simulate('change', onChangeEvent);

    expect(
      fileUpload
        .find('.atomikui-file-upload__wrapper')
        .children()
        .last()
        .text(),
    ).toBe(fileName);
  });

  it('Should render a list of files if `dragAndDrop` prop is `true`', () => {
    fileUpload.setProps({ dragAndDrop: true });
    fileUpload
      .find('.atomikui-file-upload__wrapper')
      .simulate('drop', onDropEvent);

    expect(fileUpload.find('List').children().length).toBe(1);
  });

  it('Should render error class', () => {
    fileUpload.setProps({ hasError: true });

    expect(fileUpload.find('.atomikui-file-upload').hasClass('has-error')).toBe(
      true,
    );
  });

  it('Should render error hint with text', () => {
    fileUpload.setProps({ errorText: 'Error text', hasError: true });

    expect(fileUpload.find('Hint').length).toBe(1);
    expect(fileUpload.find('Hint').text()).toBe('Error text');
  });

  it('Should render help hint with text', () => {
    fileUpload.setProps({ helpText: 'Help text' });

    expect(fileUpload.find('Hint').length).toBe(1);
    expect(fileUpload.find('Hint').text()).toBe('Help text');
  });
});
