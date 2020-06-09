```jsx
import { useState } from 'react';
import { CartItem } from '@alaneicker/atomik-ui';

const [quantity, setQuantity] = useState(1);

<CartItem
  imageUrl="product-les-paul.jpg"
  description="60th Anniversary 1960 Les Paul Standard - V1 Deep Cherry Sunburst"
  quantity={quantity}
  onQuantityChange={(newQuantity) => setQuantity(newQuantity)}
  price={6499.99}
/>;
```