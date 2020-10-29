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

  it('Should render a Link if isComplete is true', () => {
    expect(step.find('Link')).toBeTruthy();
  });

  it('Should render a span if isComplete is false', () => {
    step.setProps({ isComplete: false });
    expect(step.find('[data-test-id="step-number"]')).toBeTruthy();
  });
});
