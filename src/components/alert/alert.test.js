import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Alert from './Alert';

configure({ adapter: new Adapter() });

describe('<Alert />', () => {
  let alert;

  beforeEach(() => {
    alert = shallow(
      <Alert>
        <span>This is an alert</span>
      </Alert>,
    );
  });

  it('Should render without errors', () => {
    expect(alert.length).toBe(1);
  });

  it('Should render children', () => {
    expect(alert.find('span').length).toBe(1);
    expect(alert.find('span').text()).toBe('This is an alert');
  });
});
