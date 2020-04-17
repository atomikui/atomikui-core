The `Pagination` component is used to indicate a series of related content exists across multiple pages.

### Pagination as Links

```jsx
import { Pagination, Link } from '@alaneicker/react-component-library';

<Pagination>
  <Link href="#">Previous</Link>
  <Link href="#">1</Link>
  <Link href="#" active>
    2
  </Link>
  <Link href="#">3</Link>
  <Link href="#">4</Link>
  <Link href="#">Next</Link>
</Pagination>;
```

### Pagination as Buttons

```jsx
import { Pagination, Link } from '@alaneicker/react-component-library';

<Pagination>
  <Link onClick={() => {}}>Previous</Link>
  <Link onClick={() => {}}>1</Link>
  <Link onClick={() => {}} active>
    2
  </Link>
  <Link onClick={() => {}}>3</Link>
  <Link onClick={() => {}}>4</Link>
  <Link onClick={() => {}}>Next</Link>
</Pagination>;
```

### Disabling a Link

Simply pass the `disabled` prop to the Link to disable it.

```jsx
import { Pagination, Link } from '@alaneicker/react-component-library';

<Pagination>
  <Link href="#">Previous</Link>
  <Link href="#">1</Link>
  <Link href="#">2</Link>
  <Link href="#">3</Link>
  <Link href="#" active>
    4
  </Link>
  <Link href="#" disabled>
    Next
  </Link>
</Pagination>;
```
