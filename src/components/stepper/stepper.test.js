import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mount, configure } from 'enzyme';
import Stepper from './Stepper';

configure({ adapter: new Adapter() });

describe('<Stepper />', () => {
  let stepper;

  beforeEach(() => {
    stepper = mount(
      <Stepper inline>
        <Stepper.Item
          label="Personal Info"
          href="/personal-info"
          isComplete={true}
        >
          1
        </Stepper.Item>
        <Stepper.Item label="Contact Info" href="/contact-info" isActive={true}>
          2
        </Stepper.Item>
        <Stepper.Item label="Billing Info" href="/billing-info">
          3
        </Stepper.Item>
        <Stepper.Item label="Summary" href="/summary">
          4
        </Stepper.Item>
      </Stepper>,
    );
  });

  it('Should render 4 children', () => {
    expect(stepper.find('StepperItem').length).toBe(4);
  });

  it('Should render children with top labels', () => {
    stepper.setProps({ topLabels: true });
    expect(
      stepper.find('[data-test-id="step"]').first().hasClass('has-top-labels'),
    ).toBeTruthy();
  });

  it('Should render first child with an anchor tag', () => {
    const link = stepper.find('[data-test-id="step"]').find('Link');
    expect(link).toBeTruthy();
  });

  it('Should render as inline', () => {
    expect(
      stepper.find('ul[data-test-id="stepper"]').hasClass('is-inline'),
    ).toBeTruthy();
  });
});
