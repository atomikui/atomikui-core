import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import { shallow, configure } from 'enzyme';
import Alert from './Alert';

configure({ adapter: new Adapter() });

describe('<Alert />', () => {
  let alert;
  const onCloseSpy = sinon.spy();

  beforeEach(() => {
    alert = shallow(
      <Alert onClose={onCloseSpy}>
        <span>This is an alert</span>
      </Alert>,
    );
  });

  it('Should render children', () => {
    expect(alert.find('span')).toBeTruthy();
    expect(alert.find('span').text()).toBe('This is an alert');
  });

  it('Should trigger onClose callabck', () => {
    alert.find('Button').simulate('click');
    expect(onCloseSpy.called).toBeTruthy();
  });

  it('Should render the appropriate aria-live attribute value', () => {
    expect(alert.prop('aria-live')).toBe('polite');
    alert.setProps({ theme: 'error' });
    expect(alert.prop('aria-live')).toBe('assertive');
  });

  it('Should render a custom icon', () => {
    alert.setProps({ icon: <svg data-test-id="custom-alert-icon" /> });
    expect(alert.find('[data-test-id="custom-alert-icon"]')).toHaveLength(1);
  });

  test.each(['success', 'error', 'warning', 'info'])(
    'Should render an %p Icon',
    (theme) => {
      alert.setProps({ theme });
      expect(alert.find(`[data-test-id="icon-${theme}"]`)).toHaveLength(1);
    },
  );
});
