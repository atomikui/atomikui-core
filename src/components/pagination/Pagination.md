The Pagination component is used to indicate a series of related content exists across multiple pages.

### Pagination as Links

```jsx
import { Pagination, Link } from '@atomikui/core';

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
import { Pagination, Link } from '@atomikui/core';

<Pagination>
  <Link onClick={() => {}} role="button">
    Previous
  </Link>
  <Link onClick={() => {}} role="button">
    1
  </Link>
  <Link onClick={() => {}} role="button" active>
    2
  </Link>
  <Link onClick={() => {}} role="button">
    3
  </Link>
  <Link onClick={() => {}} role="button">
    4
  </Link>
  <Link onClick={() => {}} role="button">
    Next
  </Link>
</Pagination>;
```

### Disabling a Link

Simply pass the `disabled` prop to the Link to disable it.

```jsx
import { Pagination, Link } from '@atomikui/core';

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

### ButtonGroup Color Themes

There are many color themes to choose from. simplay pass in a `theme` prop with the color of your choice.

#### Dark Themes

```jsx
import { Pagination, Link } from '@atomikui/core';

<>
  <Pagination theme="red">
    <Link href="#">Previous</Link>
    <Link href="#">1</Link>
    <Link href="#" active>
      2
    </Link>
    <Link href="#">3</Link>
    <Link href="#">4</Link>
    <Link href="#">Next</Link>
  </Pagination>
  <Pagination theme="pink">
    <Link href="#">Previous</Link>
    <Link href="#">1</Link>
    <Link href="#" active>
      2
    </Link>
    <Link href="#">3</Link>
    <Link href="#">4</Link>
    <Link href="#">Next</Link>
  </Pagination>
  <Pagination theme="purple">
    <Link href="#">Previous</Link>
    <Link href="#">1</Link>
    <Link href="#" active>
      2
    </Link>
    <Link href="#">3</Link>
    <Link href="#">4</Link>
    <Link href="#">Next</Link>
  </Pagination>
  <Pagination theme="deep-purple">
    <Link href="#">Previous</Link>
    <Link href="#">1</Link>
    <Link href="#" active>
      2
    </Link>
    <Link href="#">3</Link>
    <Link href="#">4</Link>
    <Link href="#">Next</Link>
  </Pagination>
  <Pagination theme="indigo">
    <Link href="#">Previous</Link>
    <Link href="#">1</Link>
    <Link href="#" active>
      2
    </Link>
    <Link href="#">3</Link>
    <Link href="#">4</Link>
    <Link href="#">Next</Link>
  </Pagination>
  <Pagination theme="blue">
    <Link href="#">Previous</Link>
    <Link href="#">1</Link>
    <Link href="#" active>
      2
    </Link>
    <Link href="#">3</Link>
    <Link href="#">4</Link>
    <Link href="#">Next</Link>
  </Pagination>
  <Pagination theme="sky-blue">
    <Link href="#">Previous</Link>
    <Link href="#">1</Link>
    <Link href="#" active>
      2
    </Link>
    <Link href="#">3</Link>
    <Link href="#">4</Link>
    <Link href="#">Next</Link>
  </Pagination>
  <Pagination theme="cyan">
    <Link href="#">Previous</Link>
    <Link href="#">1</Link>
    <Link href="#" active>
      2
    </Link>
    <Link href="#">3</Link>
    <Link href="#">4</Link>
    <Link href="#">Next</Link>
  </Pagination>
  <Pagination theme="teal">
    <Link href="#">Previous</Link>
    <Link href="#">1</Link>
    <Link href="#" active>
      2
    </Link>
    <Link href="#">3</Link>
    <Link href="#">4</Link>
    <Link href="#">Next</Link>
  </Pagination>
  <Pagination theme="light-green">
    <Link href="#">Previous</Link>
    <Link href="#">1</Link>
    <Link href="#" active>
      2
    </Link>
    <Link href="#">3</Link>
    <Link href="#">4</Link>
    <Link href="#">Next</Link>
  </Pagination>
  <Pagination theme="green">
    <Link href="#">Previous</Link>
    <Link href="#">1</Link>
    <Link href="#" active>
      2
    </Link>
    <Link href="#">3</Link>
    <Link href="#">4</Link>
    <Link href="#">Next</Link>
  </Pagination>
  <Pagination theme="lime">
    <Link href="#">Previous</Link>
    <Link href="#">1</Link>
    <Link href="#" active>
      2
    </Link>
    <Link href="#">3</Link>
    <Link href="#">4</Link>
    <Link href="#">Next</Link>
  </Pagination>
  <Pagination theme="yellow">
    <Link href="#">Previous</Link>
    <Link href="#">1</Link>
    <Link href="#" active>
      2
    </Link>
    <Link href="#">3</Link>
    <Link href="#">4</Link>
    <Link href="#">Next</Link>
  </Pagination>
  <Pagination theme="light-orange">
    <Link href="#">Previous</Link>
    <Link href="#">1</Link>
    <Link href="#" active>
      2
    </Link>
    <Link href="#">3</Link>
    <Link href="#">4</Link>
    <Link href="#">Next</Link>
  </Pagination>
  <Pagination theme="orange">
    <Link href="#">Previous</Link>
    <Link href="#">1</Link>
    <Link href="#" active>
      2
    </Link>
    <Link href="#">3</Link>
    <Link href="#">4</Link>
    <Link href="#">Next</Link>
  </Pagination>
  <Pagination theme="deep-orange">
    <Link href="#">Previous</Link>
    <Link href="#">1</Link>
    <Link href="#" active>
      2
    </Link>
    <Link href="#">3</Link>
    <Link href="#">4</Link>
    <Link href="#">Next</Link>
  </Pagination>
  <Pagination theme="amber">
    <Link href="#">Previous</Link>
    <Link href="#">1</Link>
    <Link href="#" active>
      2
    </Link>
    <Link href="#">3</Link>
    <Link href="#">4</Link>
    <Link href="#">Next</Link>
  </Pagination>
  <Pagination theme="brown">
    <Link href="#">Previous</Link>
    <Link href="#">1</Link>
    <Link href="#" active>
      2
    </Link>
    <Link href="#">3</Link>
    <Link href="#">4</Link>
    <Link href="#">Next</Link>
  </Pagination>
  <Pagination theme="gray">
    <Link href="#">Previous</Link>
    <Link href="#">1</Link>
    <Link href="#" active>
      2
    </Link>
    <Link href="#">3</Link>
    <Link href="#">4</Link>
    <Link href="#">Next</Link>
  </Pagination>
  <Pagination theme="blue-gray">
    <Link href="#">Previous</Link>
    <Link href="#">1</Link>
    <Link href="#" active>
      2
    </Link>
    <Link href="#">3</Link>
    <Link href="#">4</Link>
    <Link href="#">Next</Link>
  </Pagination>
  <Pagination theme="black">
    <Link href="#">Previous</Link>
    <Link href="#">1</Link>
    <Link href="#" active>
      2
    </Link>
    <Link href="#">3</Link>
    <Link href="#">4</Link>
    <Link href="#">Next</Link>
  </Pagination>
</>;
```

#### Light Themes

```jsx
import { Pagination, Link } from '@atomikui/core';

<>
  <Pagination themeVariant="light" theme="red">
    <Link href="#">Previous</Link>
    <Link href="#">1</Link>
    <Link href="#" active>
      2
    </Link>
    <Link href="#">3</Link>
    <Link href="#">4</Link>
    <Link href="#">Next</Link>
  </Pagination>
  <Pagination themeVariant="light" theme="pink">
    <Link href="#">Previous</Link>
    <Link href="#">1</Link>
    <Link href="#" active>
      2
    </Link>
    <Link href="#">3</Link>
    <Link href="#">4</Link>
    <Link href="#">Next</Link>
  </Pagination>
  <Pagination themeVariant="light" theme="purple">
    <Link href="#">Previous</Link>
    <Link href="#">1</Link>
    <Link href="#" active>
      2
    </Link>
    <Link href="#">3</Link>
    <Link href="#">4</Link>
    <Link href="#">Next</Link>
  </Pagination>
  <Pagination themeVariant="light" theme="deep-purple">
    <Link href="#">Previous</Link>
    <Link href="#">1</Link>
    <Link href="#" active>
      2
    </Link>
    <Link href="#">3</Link>
    <Link href="#">4</Link>
    <Link href="#">Next</Link>
  </Pagination>
  <Pagination themeVariant="light" theme="indigo">
    <Link href="#">Previous</Link>
    <Link href="#">1</Link>
    <Link href="#" active>
      2
    </Link>
    <Link href="#">3</Link>
    <Link href="#">4</Link>
    <Link href="#">Next</Link>
  </Pagination>
  <Pagination themeVariant="light" theme="blue">
    <Link href="#">Previous</Link>
    <Link href="#">1</Link>
    <Link href="#" active>
      2
    </Link>
    <Link href="#">3</Link>
    <Link href="#">4</Link>
    <Link href="#">Next</Link>
  </Pagination>
  <Pagination themeVariant="light" theme="sky-blue">
    <Link href="#">Previous</Link>
    <Link href="#">1</Link>
    <Link href="#" active>
      2
    </Link>
    <Link href="#">3</Link>
    <Link href="#">4</Link>
    <Link href="#">Next</Link>
  </Pagination>
  <Pagination themeVariant="light" theme="cyan">
    <Link href="#">Previous</Link>
    <Link href="#">1</Link>
    <Link href="#" active>
      2
    </Link>
    <Link href="#">3</Link>
    <Link href="#">4</Link>
    <Link href="#">Next</Link>
  </Pagination>
  <Pagination themeVariant="light" theme="teal">
    <Link href="#">Previous</Link>
    <Link href="#">1</Link>
    <Link href="#" active>
      2
    </Link>
    <Link href="#">3</Link>
    <Link href="#">4</Link>
    <Link href="#">Next</Link>
  </Pagination>
  <Pagination themeVariant="light" theme="light-green">
    <Link href="#">Previous</Link>
    <Link href="#">1</Link>
    <Link href="#" active>
      2
    </Link>
    <Link href="#">3</Link>
    <Link href="#">4</Link>
    <Link href="#">Next</Link>
  </Pagination>
  <Pagination themeVariant="light" theme="green">
    <Link href="#">Previous</Link>
    <Link href="#">1</Link>
    <Link href="#" active>
      2
    </Link>
    <Link href="#">3</Link>
    <Link href="#">4</Link>
    <Link href="#">Next</Link>
  </Pagination>
  <Pagination themeVariant="light" theme="lime">
    <Link href="#">Previous</Link>
    <Link href="#">1</Link>
    <Link href="#" active>
      2
    </Link>
    <Link href="#">3</Link>
    <Link href="#">4</Link>
    <Link href="#">Next</Link>
  </Pagination>
  <Pagination themeVariant="light" theme="yellow">
    <Link href="#">Previous</Link>
    <Link href="#">1</Link>
    <Link href="#" active>
      2
    </Link>
    <Link href="#">3</Link>
    <Link href="#">4</Link>
    <Link href="#">Next</Link>
  </Pagination>
  <Pagination themeVariant="light" theme="light-orange">
    <Link href="#">Previous</Link>
    <Link href="#">1</Link>
    <Link href="#" active>
      2
    </Link>
    <Link href="#">3</Link>
    <Link href="#">4</Link>
    <Link href="#">Next</Link>
  </Pagination>
  <Pagination themeVariant="light" theme="orange">
    <Link href="#">Previous</Link>
    <Link href="#">1</Link>
    <Link href="#" active>
      2
    </Link>
    <Link href="#">3</Link>
    <Link href="#">4</Link>
    <Link href="#">Next</Link>
  </Pagination>
  <Pagination themeVariant="light" theme="deep-orange">
    <Link href="#">Previous</Link>
    <Link href="#">1</Link>
    <Link href="#" active>
      2
    </Link>
    <Link href="#">3</Link>
    <Link href="#">4</Link>
    <Link href="#">Next</Link>
  </Pagination>
  <Pagination themeVariant="light" theme="amber">
    <Link href="#">Previous</Link>
    <Link href="#">1</Link>
    <Link href="#" active>
      2
    </Link>
    <Link href="#">3</Link>
    <Link href="#">4</Link>
    <Link href="#">Next</Link>
  </Pagination>
  <Pagination themeVariant="light" theme="brown">
    <Link href="#">Previous</Link>
    <Link href="#">1</Link>
    <Link href="#" active>
      2
    </Link>
    <Link href="#">3</Link>
    <Link href="#">4</Link>
    <Link href="#">Next</Link>
  </Pagination>
  <Pagination themeVariant="light" theme="gray">
    <Link href="#">Previous</Link>
    <Link href="#">1</Link>
    <Link href="#" active>
      2
    </Link>
    <Link href="#">3</Link>
    <Link href="#">4</Link>
    <Link href="#">Next</Link>
  </Pagination>
  <Pagination themeVariant="light" theme="blue-gray">
    <Link href="#">Previous</Link>
    <Link href="#">1</Link>
    <Link href="#" active>
      2
    </Link>
    <Link href="#">3</Link>
    <Link href="#">4</Link>
    <Link href="#">Next</Link>
  </Pagination>
  <Pagination themeVariant="light" theme="white">
    <Link href="#">Previous</Link>
    <Link href="#">1</Link>
    <Link href="#" active>
      2
    </Link>
    <Link href="#">3</Link>
    <Link href="#">4</Link>
    <Link href="#">Next</Link>
  </Pagination>
</>;
```
