import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import StepperItem from './StepperItem';

configure({ adapter: new Adapter() });

describe('<StepperItem />', () => {
  let stepperItem;

  beforeEach(() => {
    stepperItem = shallow(
      <StepperItem
        label="Personal Info"
        href="/personal-info"
        isComplete={true}
      >
        1
      </StepperItem>,
    );
  });

  it('Should render a Link if isComplete is true', () => {
    expect(stepperItem.find('Link')).toBeTruthy();
  });

  it('Should render a span if isComplete is false', () => {
    stepperItem.setProps({ isComplete: false });
    expect(stepperItem.find('[data-test-id="step-number"]')).toBeTruthy();
  });
});
