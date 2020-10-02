import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Flag from './Flag';

configure({ adapter: new Adapter() });

describe('<Flag />', () => {
  let flag;
  beforeEach(() => {
    flag = shallow(<Flag country="US" title="US" />);
  });

  it('Should render without errors', () => {
    expect(flag).toBeTruthy();

    flag.setProps({ unicode: true });
    expect(flag).toBeTruthy();
  });
});
