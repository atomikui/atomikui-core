import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import { shallow, configure } from 'enzyme';
import CheckOptionGroup from './CheckOptionGroup';
import CheckOption from '../check-option';

configure({ adapter: new Adapter() });

describe('<CheckOptionGroup />', () => {
  let checkOptionGroup;
  let onChangeSpy;

  beforeEach(() => {
    onChangeSpy = sinon.spy();

    checkOptionGroup = shallow(
      <CheckOptionGroup label="Select your favorit food" onChange={onChangeSpy}>
        <CheckOption name="option1" label="option 1" />
        <CheckOption name="option2" label="option 2" />
        <CheckOption name="option3" label="option 3" />
      </CheckOptionGroup>,
    );
  });

  it('Should render without errors', () => {
    expect(checkOptionGroup).toHaveLength(1);
  });

  it('Should trigger onChange callback', () => {
    checkOptionGroup.find('CheckOption').first().simulate('change');
    expect(onChangeSpy.called).toBeTruthy();
  });

  it('Should show hints', () => {
    checkOptionGroup.setProps({
      hasError: true,
      errorText: 'error text',
      helpText: 'help text',
    });
    const helpHint = checkOptionGroup.find('[data-test-id="help-hint"]');
    const errorHint = checkOptionGroup.find('[data-test-id="error-hint"]');
    expect(helpHint).toHaveLength(1);
    expect(errorHint).toHaveLength(1);
  });
});
