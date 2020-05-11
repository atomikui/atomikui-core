import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Statistic from './Statistic';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

configure({ adapter: new Adapter() });

describe('<Statistic />', () => {
  let statistic;

  beforeEach(() => {
    statistic = shallow(<Statistic value="25,000" label="Views" />);
  });

  it('Should render without errors', () => {
    expect(statistic.length).toBe(1);
  });

  it('Should render with the label on the top', () => {
    statistic.setProps({ topLabel: true });

    expect(statistic.hasClass('rcl-statistic--top-label')).toBe(true);
  });

  it('Should render horizontal format', () => {
    statistic.setProps({ horizontal: true });

    expect(statistic.hasClass('rcl-statistic--horizontal')).toBe(true);
  });

  it('Should render with an icon', () => {
    statistic.setProps({ icon: faUsers });
    expect(statistic.find('.rcl-statistic__icon').length).toBe(1);
  });
});
