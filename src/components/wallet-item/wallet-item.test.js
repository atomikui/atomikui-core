import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import WalletItem from './WalletItem';

configure({ adapter: new Adapter() });

describe('<WalletItem />', () => {
  beforeEach(() => {});

  it('Should render without errors', () => {});
});
