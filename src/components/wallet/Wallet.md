```jsx
import { Wallet, WalletItem } from '@alaneicker/atomik-ui';

<Wallet>
  <WalletItem
    type="MasterCard"
    endsIn="5432"
    expiry="06/2021"
    onSelect={() => console.log('MasterCard Selected')}
    isSelected
  />
  <WalletItem
    type="Discover"
    endsIn="4444"
    expiry="05/2022"
    onSelect={() => console.log('MasterCard Selected')}
  />
  <WalletItem
    type="Visa"
    endsIn="1234"
    expiry="04/2025"
    onSelect={() => console.log('Visa Selected')}
  />
  <WalletItem type="Google Pay" onSelect={() => console.log('Visa Selected')} />
  <WalletItem
    type="Bank"
    endsIn="4444"
    onSelect={() => console.log('Bank Selected')}
  />
</Wallet>;
```

### API

[`<WalletItem />`](https://alaneicker1975.github.io/atomik-ui/#/Payment%20Wallet/WalletItem)
