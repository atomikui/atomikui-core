/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mount, configure } from 'enzyme';
import Spinner from './Spinner';

configure({ adapter: new Adapter() });

describe('<Spinner />', () => {
  let spinner;

  beforeEach(() => {
    spinner = mount(<Spinner />);
  });

  it('Should render without errors', () => {
    expect(spinner.length).toBe(1);
  });
});
