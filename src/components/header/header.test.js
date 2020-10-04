import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Header from './Header';

configure({ adapter: new Adapter() });

describe('<Header />', () => {
  beforeEach(() => {});

  it('Should render without errors', () => {});
});
