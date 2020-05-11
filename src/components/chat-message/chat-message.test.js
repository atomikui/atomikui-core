import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import ChatMessage from './ChatMessage';

configure({ adapter: new Adapter() });

describe('<ChatMessage />', () => {
  beforeEach(() => {});

  it('Should render without errors', () => {});
});
