import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Quotation from './Quotation';

configure({ adapter: new Adapter() });

describe('<Quotation />', () => {
  beforeEach(() => {});

  it('Should render without errors', () => {});
});
