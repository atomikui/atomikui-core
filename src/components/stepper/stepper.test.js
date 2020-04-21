import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mount, configure } from 'enzyme';
import Stepper from './Stepper';
import Step from './Step';

configure({ adapter: new Adapter() });

describe('<Stepper />', () => {
  let stepper;

  beforeEach(() => {
    stepper = mount(
      <Stepper inline>
        <Step label="Personal Info" href="/personal-info" isComplete={true}>
          1
        </Step>
        <Step label="Contact Info" href="/contact-info" isActive={true}>
          2
        </Step>
        <Step label="Billing Info" href="/billing-info">
          3
        </Step>
        <Step label="Summary" href="/summary">
          4
        </Step>
      </Stepper>,
    );
  });

  it('Should render without errors', () => {
    expect(stepper.length).toBe(1);
  });

  it('Should render 4 children', () => {
    expect(stepper.find('Step').length).toBe(4);
  });

  it('Should render children with top labels', () => {
    stepper.setProps({ topLabels: true });
    expect(
      stepper.find('.rcl-step').first().hasClass('rcl-step--top-label'),
    ).toBe(true);
  });

  it('Should render first child with an anchor tag', () => {
    const link = stepper.find('.rcl-step').find('Link');
    expect(link.length).toBe(1);
  });

  it('Should render as inline', () => {
    expect(stepper.find('.rcl-stepper').hasClass('rcl-stepper--inline')).toBe(
      true,
    );
  });
});
