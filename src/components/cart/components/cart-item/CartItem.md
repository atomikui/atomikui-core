Used in conjunction with the Cart component.

```jsx
import { CartItem } from '@atomikui/core';

<CartItem
  imageUrl="product-les-paul.jpg"
  description="Gibson - 60th Anniversary 1960 Les Paul Standard - Deep Cherry Sunburst"
  quantity={1}
  onQuantityChange={(total) => console.log(total)}
  price={6499.99}
/>;
```
