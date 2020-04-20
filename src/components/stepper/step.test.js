/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Step from './Step';

configure({ adapter: new Adapter() });

describe('<Step />', () => {
  let step;

  beforeEach(() => {
    step = shallow(
      <Step label="Personal Info" href="/personal-info" isComplete={true}>
        1
      </Step>,
    );
  });

  it('Should render without errors', () => {
    expect(step.length).toBe(1);
  });

  it('Should render a Link if isComplete is true', () => {
    expect(step.find('Link').length).toBe(1);
  });

  it('Should render a span if isComplete is false', () => {
    step.setProps({ isComplete: false });
    expect(step.find('span.rcl-step__number').length).toBe(1);
  });
});
