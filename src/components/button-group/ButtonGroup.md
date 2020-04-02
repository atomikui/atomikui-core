The `ButtonGroup` is a series of buttons together on a single line, representing selectable options.

It is a stateless component, therefore the selected state must be managed externally.

```jsx
import { ButtonGroup, Button } from '@alaneicker/react-component-library';

<ButtonGroup label="Favorite Car Brand">
  <Button>Chevrolet</Button>
  <Button classes="is-selected">Ford</Button>
  <Button>GMC</Button>
</ButtonGroup>;
```

### Button Group Sizes

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
