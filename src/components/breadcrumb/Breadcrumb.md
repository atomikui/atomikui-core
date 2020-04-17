A `Breadcrumb` indicates the current page’s location in relation to a navigational hierarchy.

```jsx
import { Breadcrumb, Link } from '@alaneicker/react-component-library';

<Breadcrumb>
  <Link href="/home">Home</Link>
  <Link href="/products">Products</Link>
  <Link href="/t-shirts" disabled>
    T-Shirts
  </Link>
</Breadcrumb>;
```

The `BreadcrumbItem` accepts all of the [Link](/#/Navigation/Link) component's props.
