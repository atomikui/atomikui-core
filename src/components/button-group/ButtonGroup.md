### States (default, info, warning, error, success)

```jsx
import { ButtonGroup } from '@alaneicker/react-component-library';

const onChange = (details) => {
  console.log(details);
};

<>
  <ButtonGroup
    options={[
      { text: 'Red', value: 'red', onChange },
      { text: 'Orange', value: 'orange', onChange },
      { text: 'Green', value: 'green', onChange },
      { text: 'Blue', value: 'blue', onChange },
    ]}
  />

  <ButtonGroup
    variant="primary"
    options={[
      { text: 'Red', value: 'red', onChange },
      { text: 'Orange', value: 'orange', onChange },
      { text: 'Green', value: 'green', onChange },
      { text: 'Blue', value: 'blue', onChange },
    ]}
  />

  <ButtonGroup
    variant="secondary"
    options={[
      { text: 'Red', value: 'red', onChange },
      { text: 'Orange', value: 'orange', onChange },
      { text: 'Green', value: 'green', onChange },
      { text: 'Blue', value: 'blue', onChange },
    ]}
  />

  <ButtonGroup
    variant="tertiary"
    options={[
      { text: 'Red', value: 'red', onChange },
      { text: 'Orange', value: 'orange', onChange },
      { text: 'Green', value: 'green', onChange },
      { text: 'Blue', value: 'blue', onChange },
    ]}
  />
</>;
```
