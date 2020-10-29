import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mount, configure } from 'enzyme';
import Stepper from './Stepper';
import Step from '../step';

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

  it('Should render 4 children', () => {
    expect(stepper.find('Step').length).toBe(4);
  });

  it('Should render children with top labels', () => {
    stepper.setProps({ topLabels: true });
    expect(
      stepper
        .find('[data-test-id="step"]')
        .first()
        .hasClass('atomikui-step--top-label'),
    ).toBeTruthy();
  });

  it('Should render first child with an anchor tag', () => {
    const link = stepper.find('[data-test-id="step"]').find('Link');
    expect(link).toBeTruthy();
  });

  it('Should render as inline', () => {
    expect(
      stepper
        .find('ul[data-test-id="stepper"]')
        .hasClass('atomikui-stepper--inline'),
    ).toBeTruthy();
  });
});
