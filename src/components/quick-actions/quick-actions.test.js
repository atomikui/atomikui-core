import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import QuickActions from './QuickActions';

configure({ adapter: new Adapter() });

describe('<QuickActions />', () => {
  beforeEach(() => {});

  it('Should render without errors', () => {});
});
