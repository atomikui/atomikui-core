The ButtonGroup is a series of buttons together on a single line, representing selectable options.

It is a stateless component, therefore the selected state must be managed externally.

```jsx
import { ButtonGroup, Button } from '@alaneicker/atomik-ui';

<ButtonGroup
  label="Favorite Car Brand"
  helpText="Select any car but a Chevrolet."
>
  <Button>Chevrolet</Button>
  <Button className="is-selected">Ford</Button>
  <Button>GMC</Button>
  <Button>Honda</Button>
</ButtonGroup>;
```

### Error state

```jsx
import { ButtonGroup, Button } from '@alaneicker/atomik-ui';

<ButtonGroup
  label="Favorite Car Brand"
  errorText="Chevrolet is not a good car. Pick another."
  hasError
>
  <Button className="is-selected">Chevrolet</Button>
  <Button>Ford</Button>
  <Button>GMC</Button>
  <Button>Honda</Button>
</ButtonGroup>;
```

### Button Group Sizes

Sizes include `sm`, `md`, and `lg`.

```jsx
import { ButtonGroup, Button } from '@alaneicker/atomik-ui';

<>
  <ButtonGroup label="Button Group (Small)" size="sm">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
  <div className="margin-bottom-8" />
  <ButtonGroup label="Button Group (Medium)" size="md">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
  <div className="margin-bottom-8" />
  <ButtonGroup label="Button Group (Default)">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
  <div className="margin-bottom-8" />
  <ButtonGroup label="Button Group (Large)" size="lg">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
</>;
```

### Flexible Button Group

A `ButtonGroup` with many options do not work well on smaller devices. In this case, it is recommended to use a `DropDown` menu to convey the list of options.

```jsx
import { ButtonGroup, Button } from '@alaneicker/atomik-ui';

<ButtonGroup label="Button Group (Medium)" stretch>
  <Button>Chevrolet</Button>
  <Button className="is-selected">Ford</Button>
  <Button>GMC</Button>
  <Button>Honda</Button>
</ButtonGroup>;
```

### ButtonGroup Color Themes

There are many color themes to choose from. simplay pass in a `theme` prop with the color of your choice.

#### Dark Themes

```jsx
import { ButtonGroup, Button } from '@alaneicker/atomik-ui';

<>
  <ButtonGroup theme="red" label="red">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
  <ButtonGroup theme="pink" label="pink">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
  <ButtonGroup theme="purple" label="purple">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
  <ButtonGroup theme="deep-purple" label="deep-purple">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
  <ButtonGroup theme="indigo" label="indigo">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
  <ButtonGroup theme="blue" label="blue">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
  <ButtonGroup theme="sky-blue" label="sky-blue">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
  <ButtonGroup theme="cyan" label="cyan">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
  <ButtonGroup theme="teal" label="teal">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
  <ButtonGroup theme="green" label="green">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
  <ButtonGroup theme="light-green" label="light-green">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
  <ButtonGroup theme="pickle" label="pickle">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
  <ButtonGroup theme="yellow" label="yellow">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
  <ButtonGroup theme="light-orange" label="light-orange">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
  <ButtonGroup theme="orange" label="orange">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
  <ButtonGroup theme="deep-orange" label="deep-orange">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
  <ButtonGroup theme="amber" label="amber">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
  <ButtonGroup theme="brown" label="brown">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
  <ButtonGroup theme="gray" label="gray">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
  <ButtonGroup theme="blue-gray" label="blue-gray">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
  <ButtonGroup theme="black" label="black">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
</>;
```

#### Light Themes

```jsx
import { ButtonGroup, Button } from '@alaneicker/atomik-ui';

<>
  <ButtonGroup theme="red" themeVariant="light" label="red">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
  <ButtonGroup theme="pink" themeVariant="light" label="pink">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
  <ButtonGroup theme="purple" themeVariant="light" label="purple">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
  <ButtonGroup theme="deep-purple" themeVariant="light" label="deep-purple">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
  <ButtonGroup theme="indigo" themeVariant="light" label="indigo">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
  <ButtonGroup theme="blue" themeVariant="light" label="blue">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
  <ButtonGroup theme="sky-blue" themeVariant="light" label="sky-blue">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
  <ButtonGroup theme="cyan" themeVariant="light" label="cyan">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
  <ButtonGroup theme="teal" themeVariant="light" label="teal">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
  <ButtonGroup theme="green" themeVariant="light" label="green">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
  <ButtonGroup theme="light-green" themeVariant="light" label="light-green">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
  <ButtonGroup theme="pickle" themeVariant="light" label="pickle">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
  <ButtonGroup theme="yellow" themeVariant="light" label="yellow">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
  <ButtonGroup theme="light-orange" themeVariant="light" label="light-orange">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
  <ButtonGroup theme="orange" themeVariant="light" label="orange">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
  <ButtonGroup theme="deep-orange" themeVariant="light" label="deep-orange">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
  <ButtonGroup theme="amber" themeVariant="light" label="amber">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
  <ButtonGroup theme="brown" themeVariant="light" label="brown">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
  <ButtonGroup theme="gray" themeVariant="light" label="gray">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
  <ButtonGroup theme="blue-gray" themeVariant="light" label="blue-gray">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
  <ButtonGroup theme="black" themeVariant="light" label="black">
    <Button>Chevrolet</Button>
    <Button className="is-selected">Ford</Button>
    <Button>GMC</Button>
    <Button>Honda</Button>
  </ButtonGroup>
</>;
```
