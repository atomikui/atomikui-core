```jsx
import { useState } from 'react';
import { Cart } from '@atomikui/core';

const [cartItems, setCartItems] = useState([
  {
    id: 1,
    imageUrl: 'product-les-paul.jpg',
    description:
      'Gibson 60th Anniversary 1960 Les Paul Standard - Deep Cherry Sunburst',
    quantity: 1,
    price: 6499.99,
  },
  {
    id: 2,
    imageUrl: 'gibson-honey-burst.jpg',
    description: 'Gibson Les Paul Classic Electric Guitar - Honeyburst',
    quantity: 1,
    price: 1999.99,
  },
]);

const updateCart = (quantity, id) => {
  let updatedCart;

  if (quantity === 0) {
    updatedCart = cartItems.filter((item) => {
      return item.id !== id;
    });
  } else {
    updatedCart = cartItems.map((item) => {
      return item.id === id ? { ...item, quantity } : item;
    });
  }

  setCartItems(updatedCart);
};

<>
  <Cart
    title="Your Cart"
    onProceedToCart={() => console.log('proceed to cart')}
  >
    {cartItems.map((props) => (
      <Cart.Item
        key={props.id}
        onQuantityChange={(newQuantity) => updateCart(newQuantity, props.id)}
        {...props}
      />
    ))}
  </Cart>
</>;
```

```jsx noeditor
import IframeProps from '../../../styleguide/components/IframeProps';

<IframeProps component="CartItem" />;
```

### Cart
