import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Stepper from './Stepper';
import Step from './Step';

configure({ adapter: new Adapter() });

describe('<Stepper />', () => {
  let stepper;

  beforeEach(() => {
    stepper = shallow(
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

  it('Should render first child with an anchor tag', () => {
    const link = stepper.find('Step').first().dive().find('Link');
    expect(link.length).toBe(1);
  });

  it('Should render as inline', () => {
    expect(stepper.find('.stepper').hasClass('stepper--inline')).toBe(true);
  });
});
