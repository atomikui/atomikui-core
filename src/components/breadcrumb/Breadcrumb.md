A Breadcrumb indicates the current page’s location in relation to a navigational hierarchy.

```jsx
import { Breadcrumb, Link } from '@alaneicker/atomik-ui';

<Breadcrumb title="breadcrumb list">
  <Link href="/home">Home</Link>
  <Link href="/products">Products</Link>
  <Link href="/t-shirts" disabled>
    T-Shirts
  </Link>
</Breadcrumb>;
```
