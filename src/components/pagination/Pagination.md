The `Pagination` component is used to indicate a series of related content exists across multiple pages.

### Pagination as Links

```jsx
import { Pagination, PageItem } from '@alaneicker/react-component-library';

<Pagination>
  <PageItem href="#">Previous</PageItem>
  <PageItem href="#">1</PageItem>
  <PageItem href="#" isActive>
    2
  </PageItem>
  <PageItem href="#">3</PageItem>
  <PageItem href="#">4</PageItem>
  <PageItem href="#">Next</PageItem>
</Pagination>;
```

### Pagination as Buttons

```jsx
import { Pagination, PageItem } from '@alaneicker/react-component-library';

<Pagination>
  <PageItem onClick={() => {}}>Previous</PageItem>
  <PageItem onClick={() => {}}>1</PageItem>
  <PageItem onClick={() => {}} isActive>
    2
  </PageItem>
  <PageItem onClick={() => {}}>3</PageItem>
  <PageItem onClick={() => {}}>4</PageItem>
  <PageItem onClick={() => {}}>Next</PageItem>
</Pagination>;
```

### Disabling a PageItem

Simply pass the `disabled` prop to the PageItem to disable it.

```jsx
import { Pagination, PageItem } from '@alaneicker/react-component-library';

<Pagination>
  <PageItem href="#">Previous</PageItem>
  <PageItem href="#">1</PageItem>
  <PageItem href="#">2</PageItem>
  <PageItem href="#">3</PageItem>
  <PageItem href="#" isActive>
    4
  </PageItem>
  <PageItem href="#" disabled>
    Next
  </PageItem>
</Pagination>;
```
