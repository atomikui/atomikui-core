import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Comment from './Comment';

configure({ adapter: new Adapter() });

describe('<Comment />', () => {
  beforeEach(() => {});

  it('Should render without errors', () => {});
});
