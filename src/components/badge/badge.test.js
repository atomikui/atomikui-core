import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Badge from './Badge';

configure({ adapter: new Adapter() });

describe('<Badge />', () => {
  let badge;

  beforeEach(() => {
    badge = shallow(<Badge label="Downloads" value="500k" />);
  });

  it('Should render theme variants', () => {
    badge.setProps({ theme: 'red' });
    expect(badge.hasClass('atomikui-badge--red')).toBe(true);
  });

  it('Should render theme variants', () => {
    badge.setProps({ theme: 'red', themeVariant: 'light' });
    expect(badge.hasClass('atomikui-badge--red-light')).toBe(true);
  });
});
