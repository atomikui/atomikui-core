import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import TimePicker from './TimePicker';

configure({ adapter: new Adapter() });

describe('<TimePicker />', () => {
  beforeEach(() => {});

  it('Should render without errors', () => {});
});
