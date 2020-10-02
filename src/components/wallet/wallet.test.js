import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Wallet from './Wallet';

configure({ adapter: new Adapter() });

describe('<Wallet />', () => {
  let wallet;

  beforeEach(() => {
    wallet = shallow(<Wallet />);
  });

  it('Should render without errors', () => {
    expect(wallet).toBeTruthy();
  });

  it('Should set Wallet layout as grid', () => {
    wallet.setProps({ isGrid: true });
    expect(wallet.hasClass('atomikui-wallet--grid')).toBe(true);
  });
});
