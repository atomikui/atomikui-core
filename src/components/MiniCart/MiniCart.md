The MiniCart is a condensed version of the Cart component and can be used to display a quick summary of a user's cart.

```jsx
import { useState } from 'react';
import { MiniCart } from '@atomikui/core';

<MiniCart onProceedToCart={() => console.log('proceed to checkout')}>
  <MiniCart.Item title="Apples" quantity={6} price={0.89} />
  <MiniCart.Item title="Oranges" quantity={8} price={0.99} />
  <MiniCart.Item title="Peaches" quantity={12} price={0.79} />
</MiniCart>;
```

### Adding a Custom Button

The `customButton` prop can be used to add a custom button in place of the default button.

```jsx
import { useState } from 'react';
import { MiniCart } from '@atomikui/core';

<MiniCart
  onProceedToCart={() => console.log('proceed to checkout')}
  customButton={
    <a className="atomikui-btn atomikui-btn--block" href="/cart">
      Go to my cart
    </a>
  }
>
  <MiniCart.Item title="Apples" quantity={6} price={0.89} />
  <MiniCart.Item title="Oranges" quantity={8} price={0.99} />
  <MiniCart.Item title="Peaches" quantity={12} price={0.79} />
</MiniCart>;
```

### Theming

The MiniCart's `theme` and `onProceedToCartBtnColor` props can be used to set the cart's background and button colors.

- Background themes include `light`, and `dark`. The default background is transparent.
- Buttons themes include all of the available [Button](/styleguide/#/Form%20Controls/Button) colors.

```jsx
import { useState } from 'react';
import { MiniCart } from '@atomikui/core';

<>
  <MiniCart onProceedToCart={() => console.log('proceed to checkout')}>
    <MiniCart.Item title="Apples" quantity={6} price={0.89} />
    <MiniCart.Item title="Oranges" quantity={8} price={0.99} />
    <MiniCart.Item title="Peaches" quantity={12} price={0.79} />
  </MiniCart>
  <MiniCart
    theme="light"
    onProceedToCart={() => console.log('proceed to checkout')}
    onProceedToCartBtnColor="teal"
  >
    <MiniCart.Item title="Apples" quantity={6} price={0.89} />
    <MiniCart.Item title="Oranges" quantity={8} price={0.99} />
    <MiniCart.Item title="Peaches" quantity={12} price={0.79} />
  </MiniCart>
  <MiniCart
    theme="dark"
    onProceedToCart={() => console.log('proceed to checkout')}
    onProceedToCartBtnColor="lime"
  >
    <MiniCart.Item title="Apples" quantity={6} price={0.89} />
    <MiniCart.Item title="Oranges" quantity={8} price={0.99} />
    <MiniCart.Item title="Peaches" quantity={12} price={0.79} />
  </MiniCart>
</>;
```

```jsx noeditor
import IframeProps from '../../../styleguide/components/IframeProps';

<IframeProps component="MiniCartItem" />;
```

### MiniCart
