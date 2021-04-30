The MiniCart is an abbreviated version of the Cart component and can be used to display a quick summary of a user's cart.

```jsx
import { useState } from 'react';
import { MiniCart } from '@atomikui/core';

<MiniCart onProceedToCart={() => console.log('proceed to checkout')}>
  <MiniCart.Item title="Apples" quantity={6} price={0.89} />
  <MiniCart.Item title="Oranges" quantity={8} price={0.99} />
  <MiniCart.Item title="Peaches" quantity={12} price={0.79} />
</MiniCart>;
```

```jsx noeditor
import IframeProps from '../../../styleguide/components/IframeProps';

<IframeProps component="MiniCartItem" />;
```

### MiniCart
