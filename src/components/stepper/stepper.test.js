import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Stepper from './Stepper';

configure({ adapter: new Adapter() });

describe('<Stepper />', () => {
  let stepper;

  beforeEach(() => {
    stepper = shallow(
      <Stepper
        inline
        steps={[
          { label: 'Personal Info', href: '/personal-info', isComplete: true },
          { label: 'Contact Info', href: '/contact-info', isActive: true },
          { label: 'Billing Info', href: '/billing-info', isComplete: false },
          { label: 'Summary', href: '/summary', isComplete: false },
        ]}
      />,
    );
  });

  it('Should render without errors', () => {
    expect(stepper.length).toBe(1);
  });

  it('Should render 4 children', () => {
    expect(stepper.find('.stepper').children().length).toBe(4);
  });

  it('Should render first child with an anchor tag', () => {
    expect(stepper.find('.stepper > :first-child').find('Link').length).toBe(1);
  });

  it('Should render as inline', () => {
    expect(stepper.find('.stepper').hasClass('stepper--inline')).toBe(true);
  });
});
