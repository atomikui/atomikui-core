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

  it('Should set the item as selected', () => {
    expect(walletItem.hasClass('is-selected')).toBe(true);
  });

  it('Should trigger callback on click', () => {
    walletItem.simulate('click');
    expect(walletItemSpy.called).toBe(true);
  });

  it('Should render a default payment method icon if one does not exist', () => {
    walletItem.setProps({ type: 'Foobar' });
    expect(
      walletItem.find('.atomikui-wallet-item__icon').children(),
    ).toBeTruthy();
  });

  it('Sgould render a custom type', () => {
    const customWalletItem = shallow(
      <WalletItem
        type={{
          name: 'My Piggy Bank',
          icon: <svg></svg>,
        }}
        endsIn="5432"
        expiry="06/2021"
      />,
    );

    expect(
      customWalletItem.find('.atomikui-wallet-item__label-text').text(),
    ).toBe('My Piggy Bank');
  });
});
