A `Breadcrumb` indicates the current page’s location in relation to a navigational hierarchy.

```jsx
import {
  Breadcrumb,
  BreadcrumbItem,
} from '@alaneicker/react-component-library';

<Breadcrumb>
  <BreadcrumbItem href="/home">Home</BreadcrumbItem>
  <BreadcrumbItem href="/products">Products</BreadcrumbItem>
  <BreadcrumbItem href="/t-shirts" active>
    T-Shirts
  </BreadcrumbItem>
</Breadcrumb>;
```
