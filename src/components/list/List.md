Lists are be used to organize information. They can be non-sequential or ordered.

### Default List

```jsx
import { List, ListItem } from '@atomikui/core';

<List>
  <List.Item>Apple</List.Item>
  <List.Item>Orange</List.Item>
  <List.Item>Banana</List.Item>
  <List.Item>Mango</List.Item>
</List>;
```

### Bulleted List

```jsx
import { List, ListItem } from '@atomikui/core';

<List type="bulleted">
  <List.Item>Apple</List.Item>
  <List.Item>Orange</List.Item>
  <List.Item>Banana</List.Item>
  <List.Item>Mango</List.Item>
</List>;
```

### Ordered List

```jsx
import { List, ListItem } from '@atomikui/core';

<List type="ordered">
  <List.Item>Apple</List.Item>
  <List.Item>Orange</List.Item>
  <List.Item>Banana</List.Item>
  <List.Item>Mango</List.Item>
</List>;
```

### Horizontal List

```jsx
import { List, ListItem } from '@atomikui/core';

<List type="horizontal">
  <List.Item>Apple</List.Item>
  <List.Item>Orange</List.Item>
  <List.Item>Banana</List.Item>
  <List.Item>Mango</List.Item>
</List>;
```

### List Alignment

```jsx
import { List, ListItem } from '@atomikui/core';

<>
  <List type="horizontal">
    <List.Item>Apple</List.Item>
    <List.Item>Orange</List.Item>
    <List.Item>Banana</List.Item>
    <List.Item>Mango</List.Item>
  </List>
  <List align="center" type="horizontal">
    <List.Item>Apple</List.Item>
    <List.Item>Orange</List.Item>
    <List.Item>Banana</List.Item>
    <List.Item>Mango</List.Item>
  </List>
  <List align="right" type="horizontal">
    <List.Item>Apple</List.Item>
    <List.Item>Orange</List.Item>
    <List.Item>Banana</List.Item>
    <List.Item>Mango</List.Item>
  </List>
  <List align="center">
    <List.Item>Apple</List.Item>
    <List.Item>Orange</List.Item>
    <List.Item>Banana</List.Item>
    <List.Item>Mango</List.Item>
  </List>
  <List align="right">
    <List.Item>Apple</List.Item>
    <List.Item>Orange</List.Item>
    <List.Item>Banana</List.Item>
    <List.Item>Mango</List.Item>
  </List>
</>;
```
