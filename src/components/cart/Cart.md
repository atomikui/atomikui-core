```jsx
import { useState } from 'react';
import { Cart } from '@alaneicker/atomik-ui';

const [cartItems, setCartItems] = useState([
  {
    imageUrl: 'product-les-paul.jpg',
    description:
      'Gibson 60th Anniversary 1960 Les Paul Standard - Deep Cherry Sunburst',
    quantity: 1,
    price: 6499.99,
  },
  {
    imageUrl: 'gibson-honey-burst.jpg',
    description: 'Gibson Les Paul Classic Electric Guitar - Honeyburst',
    quantity: 1,
    price: 1999.99,
  },
]);

const updateCart = (quantity, itemIndex) => {
  console.log(quantity, itemIndex);
  const updatedCart = cartItems.map((item, index) => {
    return itemIndex === index ? { ...item, quantity } : item;
  });

  setCartItems(updatedCart);
};

<>
  <Cart
    title="Your Cart"
    tax={0.08}
    items={cartItems}
    onCartItemUpdate={(newQuantity, index) => updateCart(newQuantity, index)}
  />
</>;
```
