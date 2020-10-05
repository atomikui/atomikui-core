import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mount, configure } from 'enzyme';
import Footer from './Footer';

configure({ adapter: new Adapter() });

describe('<Footer />', () => {
  beforeEach(() => {});

  it('Should render without errors', () => {});
});
