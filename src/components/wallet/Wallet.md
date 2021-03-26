The Wallet component is used to display saved payment options to the user.

### Default Stacked Layout

```jsx
import { Wallet, WalletItem } from '@atomikui/core';

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

### Grid Layout

Use the `isGrid` prop to set the layout in a grid format. The grid is responsive and will stack at screen sizes below 768px.

```jsx
import { Wallet, WalletItem } from '@atomikui/core';

<Wallet isGrid>
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

### Requires:

[`<WalletItem />`](/styleguide/#/Payment%20Wallet/WalletItem)
