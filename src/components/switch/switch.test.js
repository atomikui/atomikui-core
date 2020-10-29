import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import { mount, configure } from 'enzyme';
import Switch from './Switch';

configure({ adapter: new Adapter() });

describe('<Switch />', () => {
  let component;
  let onChangeSpy;

  beforeEach(() => {
    onChangeSpy = sinon.spy();

    component = mount(
      <Switch
        label="Send me notifications"
        onChange={onChangeSpy}
        checked={true}
      />,
    );
  });

  it('Should trigger onChange callback', () => {
    component.find('input').simulate('change', { target: { checked: false } });

    expect(onChangeSpy.called).toBeTruthy();
  });

  it('Switch toggle should not have an onClick event if disabled', () => {
    component.setProps({ disabled: true });

    expect(
      component.find('[data-test-id="switch-toggle"]').prop('onClick'),
    ).toBeFalsy();
  });

  it('Should handle an error', () => {
    component.setProps({ hasError: true, errorText: 'This field is required' });

    expect(
      component.find('[data-test-id="switch"]').hasClass('has-error'),
    ).toBeTruthy();
    expect(component.find('Hint')).toBeTruthy();
    expect(component.find('Hint').text()).toBe('This field is required');
  });

  it('Should render a hint', () => {
    component.setProps({ helpText: 'Some helpful text' });

    expect(component.find('Hint')).toBeTruthy();
    expect(component.find('Hint').text()).toBe('Some helpful text');
  });
});
