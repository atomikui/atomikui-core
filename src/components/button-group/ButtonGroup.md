### Managing Button Group State

The `ButtonGroup` component offers an `onChange` callback that can be attached to each item to return the selected index and value. The eample below shows how state can be managed externally.

### Radio Button Group

```jsx
import { ButtonGroup, Button } from '@alaneicker/react-component-library';

<ButtonGroup label="Favorite Car Brand">
  <Button>Chevrolet</Button>
  <Button classes="is-selected">Ford</Button>
  <Button>GMC</Button>
</ButtonGroup>;
```

### button Group Sizes

Sizes include `sm`, `md`, and `lg`.

```jsx
import { ButtonGroup, Button } from '@alaneicker/react-component-library';

<>
  <ButtonGroup label="Button Group (Small)" size="sm">
    <Button>Chevrolet</Button>
    <Button classes="is-selected">Ford</Button>
    <Button>GMC</Button>
  </ButtonGroup>
  <ButtonGroup label="Button Group (Medium)" size="md">
    <Button>Chevrolet</Button>
    <Button classes="is-selected">Ford</Button>
    <Button>GMC</Button>
  </ButtonGroup>
  <ButtonGroup label="Button Group (Default)">
    <Button>Chevrolet</Button>
    <Button classes="is-selected">Ford</Button>
    <Button>GMC</Button>
  </ButtonGroup>
  <ButtonGroup label="Button Group (Large)" size="lg">
    <Button>Chevrolet</Button>
    <Button classes="is-selected">Ford</Button>
    <Button>GMC</Button>
  </ButtonGroup>
</>;
```

### Flexible Button Group

A `ButtonGroup` with many options do not work well on smaller devices. In this case, it is recommended to use a `DropDown` menu to convey the list of options.

```jsx
import { ButtonGroup, Button } from '@alaneicker/react-component-library';

<ButtonGroup label="Button Group (Medium)" stretch>
  <Button>Chevrolet</Button>
  <Button classes="is-selected">Ford</Button>
  <Button>GMC</Button>
  <Button>Honda</Button>
</ButtonGroup>;
```
