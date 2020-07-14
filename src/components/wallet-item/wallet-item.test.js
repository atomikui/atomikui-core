import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import { shallow, configure } from 'enzyme';
import WalletItem from './WalletItem';

configure({ adapter: new Adapter() });

describe('<WalletItem />', () => {
  let walletItem;
  let walletItemSpy;

  beforeEach(() => {
    walletItemSpy = sinon.spy();

    walletItem = shallow(
      <WalletItem
        type="MasterCard"
        endsIn="5432"
        expiry="06/2021"
        onSelect={walletItemSpy}
        isSelected
      />,
    );
  });

  it('Should render without errors', () => {
    expect(walletItem).toHaveLength(1);
  });

  it('Should set the item as selected', () => {
    expect(walletItem.hasClass('is-selected')).toBe(true);
  });

  it('Should trigger callback on click', () => {
    walletItem.simulate('click');
    expect(walletItemSpy.called).toBe(true);
  });
});
