A payment item represents is used in conjunction with the Wallet component and represents an available payment method.

```jsx
import { WalletItem } from '@atomikui/core';

<WalletItem
  type="MasterCard"
  endsIn="4321"
  expiry="04/2025"
  onSelect={() => console.log('MasterCard Selected')}
/>;
```

### Selected Payment Method

```jsx
import { WalletItem } from '@atomikui/core';

<WalletItem
  type="MasterCard"
  endsIn="1234"
  expiry="06/2021"
  onSelect={() => console.log('MasterCard Selected')}
  isSelected
/>;
```

### Payment Method `type`

The WalletItem `type` prop supports both string or object values.

#### String Type Values

The following strings values are supported:

- `Amazon Pay`
- `American Express`
- `Apple Pay`
- `Bank`
- `Discover`
- `Diners Club`
- `Google Pay`
- `JCB`
- `MasterCard`
- `Maestro`
- `PayPal`
- `Visa`

#### Custom Type

A custom payment type can also be passed in to the `type` prop as an object.

<br />

```jsx
import { WalletItem } from '@atomikui/core';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons';

<WalletItem
  onSelect={() => console.log('Apple Pay Selected')}
  type={{
    name: 'My Piggy Bank',
    icon: <Icon icon={faPiggyBank} size="3x" />,
  }}
/>;
```

### Demo

[`<Wallet />`](/styleguide/#/Payment%20Wallet/Wallet)
