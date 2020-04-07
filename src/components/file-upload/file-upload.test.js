/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mount, configure } from 'enzyme';
import expectExport from 'expect';
import FileUpload from './FileUpload';

configure({ adapter: new Adapter() });

describe('<FileUpload />', () => {
  let fileUpload;

  beforeEach(() => {
    fileUpload = mount(
      <FileUpload
        label="Upload file"
        uploadBtnVariant="primary"
        onChange={(file) => console.log(file)}
      />,
    );
  });

  it('Should render without errors', () => {
    expectExport(fileUpload.length).toBe(1);
  });
});
