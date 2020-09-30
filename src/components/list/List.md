Lists are be used to organize information. They can be non-sequential or ordered.

### Default List

```jsx
import { List, ListItem } from '@atomikui/core';

<List>
  <ListItem>Apple</ListItem>
  <ListItem>Orange</ListItem>
  <ListItem>Banana</ListItem>
  <ListItem>Mango</ListItem>
</List>;
```

### Bulleted List

```jsx
import { List, ListItem } from '@atomikui/core';

<List type="bulleted">
  <ListItem>Apple</ListItem>
  <ListItem>Orange</ListItem>
  <ListItem>Banana</ListItem>
  <ListItem>Mango</ListItem>
</List>;
```

### Ordered List

```jsx
import { List, ListItem } from '@atomikui/core';

<List type="ordered">
  <ListItem>Apple</ListItem>
  <ListItem>Orange</ListItem>
  <ListItem>Banana</ListItem>
  <ListItem>Mango</ListItem>
</List>;
```

### Horizontal List

```jsx
import { List, ListItem } from '@atomikui/core';

<List type="horizontal">
  <ListItem>Apple</ListItem>
  <ListItem>Orange</ListItem>
  <ListItem>Banana</ListItem>
  <ListItem>Mango</ListItem>
</List>;
```

### List Alignment

```jsx
import { List, ListItem } from '@atomikui/core';

<>
  <List type="horizontal">
    <ListItem>Apple</ListItem>
    <ListItem>Orange</ListItem>
    <ListItem>Banana</ListItem>
    <ListItem>Mango</ListItem>
  </List>
  <List align="center" type="horizontal">
    <ListItem>Apple</ListItem>
    <ListItem>Orange</ListItem>
    <ListItem>Banana</ListItem>
    <ListItem>Mango</ListItem>
  </List>
  <List align="right" type="horizontal">
    <ListItem>Apple</ListItem>
    <ListItem>Orange</ListItem>
    <ListItem>Banana</ListItem>
    <ListItem>Mango</ListItem>
  </List>
  <List align="center">
    <ListItem>Apple</ListItem>
    <ListItem>Orange</ListItem>
    <ListItem>Banana</ListItem>
    <ListItem>Mango</ListItem>
  </List>
  <List align="right">
    <ListItem>Apple</ListItem>
    <ListItem>Orange</ListItem>
    <ListItem>Banana</ListItem>
    <ListItem>Mango</ListItem>
  </List>
</>;
```

#### API

[`<ListItem />`](https://www.atomikui.com/#/Data%20Display/ListItem)
