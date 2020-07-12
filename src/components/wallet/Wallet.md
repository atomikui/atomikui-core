```jsx
import { Wallet, WalletItem } from '@alaneicker/atomik-ui';

<Wallet addNewCard addNewBank>
  <WalletItem type="mastercard" endsIn="5555" isDefault />
  <WalletItem type="Visa" endsIn="5555" />
  <WalletItem type="Bank" endsIn="5555" />
</Wallet>;
```
