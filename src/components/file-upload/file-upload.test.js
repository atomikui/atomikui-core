/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mount, configure } from 'enzyme';
import FileUpload from './FileUpload';

configure({ adapter: new Adapter() });

describe('<FileUpload />', () => {
  beforeEach(() => {});

  it('Test label', () => {});
});
