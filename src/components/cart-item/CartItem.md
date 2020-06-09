```jsx
import { useState } from 'react';
import { CartItem } from '@alaneicker/atomik-ui';

const [quantity, setQuantity] = useState(1);

<CartItem
  imageUrl="product-les-paul.jpg"
  description="Gibson - 60th Anniversary 1960 Les Paul Standard - Deep Cherry Sunburst"
  quantity={quantity}
  onQuantityChange={(newQuantity) => setQuantity(newQuantity)}
  price={6499.99}
/>;
```
