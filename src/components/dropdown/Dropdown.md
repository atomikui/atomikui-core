The Dropdown component is a form control that displays a list of selectable options.

### Default State

```jsx
import { useState } from 'react';
import { Dropdown } from '@atomikui/core';

const [value, setValue] = useState('');

<Dropdown
  label="Select a Color"
  errorText="Please select a color"
  onChange={(e) => setValue(e.target.value)}
  value={value}
  options={[
    { text: 'Red', value: 'Red' },
    { text: 'Orange', value: 'Orange' },
    { text: 'Yellow', value: 'Yellow' },
    { text: 'Green', value: 'Green' },
    { text: 'Blue', value: 'Blue' },
    { text: 'Purple', value: 'Purple' },
  ]}
/>;
```

### Error State

```jsx
import { useState } from 'react';
import { Dropdown } from '@atomikui/core';

const [value, setValue] = useState('');

<Dropdown
  label="Select a Color"
  errorText="Please select a color"
  hasError={!value}
  required
  onChange={(e) => setValue(e.target.value)}
  value={value}
  options={[
    { text: 'Red', value: 'Red' },
    { text: 'Orange', value: 'Orange' },
    { text: 'Yellow', value: 'Yellow' },
    { text: 'Green', value: 'Green' },
    { text: 'Blue', value: 'Blue' },
    { text: 'Purple', value: 'Purple' },
  ]}
/>;
```

### Disabled State

```jsx
import { useState } from 'react';
import { Dropdown } from '@atomikui/core';

<Dropdown
  label="Select a Color"
  errorText="Please select a color"
  required
  value="Orange"
  disabled
  options={[
    { text: 'Red', value: 'Red' },
    { text: 'Orange', value: 'Orange' },
    { text: 'Yellow', value: 'Yellow' },
    { text: 'Green', value: 'Green' },
    { text: 'Blue', value: 'Blue' },
    { text: 'Purple', value: 'Purple' },
  ]}
/>;
```

### Checkbox Color Themes

There are many color themes to choose from. Simply pass in a `theme` prop with the color of your choice.

#### Dark Themes

```jsx
import { Dropdown } from '@atomikui/core';

<>
  <Dropdown
    theme="red"
    label="red"
    options={[
      { text: 'Red', value: 'Red' },
      { text: 'Orange', value: 'Orange' },
    ]}
  />
  <Dropdown
    theme="pink"
    label="pink"
    options={[
      { text: 'Red', value: 'Red' },
      { text: 'Orange', value: 'Orange' },
    ]}
  />
  <Dropdown
    theme="purple"
    label="purple"
    options={[
      { text: 'Red', value: 'Red' },
      { text: 'Orange', value: 'Orange' },
    ]}
  />
  <Dropdown
    theme="deep-purple"
    label="deep-purple"
    options={[
      { text: 'Red', value: 'Red' },
      { text: 'Orange', value: 'Orange' },
    ]}
  />
  <Dropdown
    theme="indigo"
    label="indigo"
    options={[
      { text: 'Red', value: 'Red' },
      { text: 'Orange', value: 'Orange' },
    ]}
  />
  <Dropdown
    theme="blue"
    label="blue"
    options={[
      { text: 'Red', value: 'Red' },
      { text: 'Orange', value: 'Orange' },
    ]}
  />
  <Dropdown
    theme="sky-blue"
    label="sky-blue"
    options={[
      { text: 'Red', value: 'Red' },
      { text: 'Orange', value: 'Orange' },
    ]}
  />
  <Dropdown
    theme="cyan"
    label="cyan"
    options={[
      { text: 'Red', value: 'Red' },
      { text: 'Orange', value: 'Orange' },
    ]}
  />
  <Dropdown
    theme="teal"
    label="teal"
    options={[
      { text: 'Red', value: 'Red' },
      { text: 'Orange', value: 'Orange' },
    ]}
  />
  <Dropdown
    theme="green"
    label="green"
    options={[
      { text: 'Red', value: 'Red' },
      { text: 'Orange', value: 'Orange' },
    ]}
  />
  <Dropdown
    theme="light-green"
    label="light-green"
    options={[
      { text: 'Red', value: 'Red' },
      { text: 'Orange', value: 'Orange' },
    ]}
  />
  <Dropdown
    theme="lime"
    label="lime"
    options={[
      { text: 'Red', value: 'Red' },
      { text: 'Orange', value: 'Orange' },
    ]}
  />
  <Dropdown
    theme="yellow"
    label="yellow"
    options={[
      { text: 'Red', value: 'Red' },
      { text: 'Orange', value: 'Orange' },
    ]}
  />
  <Dropdown
    theme="light-orange"
    label="light-orange"
    options={[
      { text: 'Red', value: 'Red' },
      { text: 'Orange', value: 'Orange' },
    ]}
  />
  <Dropdown
    theme="orange"
    label="orange"
    options={[
      { text: 'Red', value: 'Red' },
      { text: 'Orange', value: 'Orange' },
    ]}
  />
  <Dropdown
    theme="deep-orange"
    label="deep-orange"
    options={[
      { text: 'Red', value: 'Red' },
      { text: 'Orange', value: 'Orange' },
    ]}
  />
  <Dropdown
    theme="amber"
    label="amber"
    options={[
      { text: 'Red', value: 'Red' },
      { text: 'Orange', value: 'Orange' },
    ]}
  />
  <Dropdown
    theme="brown"
    label="brown"
    options={[
      { text: 'Red', value: 'Red' },
      { text: 'Orange', value: 'Orange' },
    ]}
  />
  <Dropdown
    theme="gray"
    label="gray"
    options={[
      { text: 'Red', value: 'Red' },
      { text: 'Orange', value: 'Orange' },
    ]}
  />
  <Dropdown
    theme="blue-gray"
    label="blue-gray"
    options={[
      { text: 'Red', value: 'Red' },
      { text: 'Orange', value: 'Orange' },
    ]}
  />
  <Dropdown
    theme="black"
    label="black"
    options={[
      { text: 'Red', value: 'Red' },
      { text: 'Orange', value: 'Orange' },
    ]}
  />
</>;
```

#### Light Themes

```jsx
import { Dropdown } from '@atomikui/core';

<>
  <Dropdown
    theme="red"
    themeVariant="light"
    label="red"
    options={[
      { text: 'Red', value: 'Red' },
      { text: 'Orange', value: 'Orange' },
    ]}
  />
  <Dropdown
    theme="pink"
    themeVariant="light"
    label="pink"
    options={[
      { text: 'Red', value: 'Red' },
      { text: 'Orange', value: 'Orange' },
    ]}
  />
  <Dropdown
    theme="purple"
    themeVariant="light"
    label="purple"
    options={[
      { text: 'Red', value: 'Red' },
      { text: 'Orange', value: 'Orange' },
    ]}
  />
  <Dropdown
    theme="deep-purple"
    themeVariant="light"
    label="deep-purple"
    options={[
      { text: 'Red', value: 'Red' },
      { text: 'Orange', value: 'Orange' },
    ]}
  />
  <Dropdown
    theme="indigo"
    themeVariant="light"
    label="indigo"
    options={[
      { text: 'Red', value: 'Red' },
      { text: 'Orange', value: 'Orange' },
    ]}
  />
  <Dropdown
    theme="blue"
    themeVariant="light"
    label="blue"
    options={[
      { text: 'Red', value: 'Red' },
      { text: 'Orange', value: 'Orange' },
    ]}
  />
  <Dropdown
    theme="sky-blue"
    themeVariant="light"
    label="sky-blue"
    options={[
      { text: 'Red', value: 'Red' },
      { text: 'Orange', value: 'Orange' },
    ]}
  />
  <Dropdown
    theme="cyan"
    themeVariant="light"
    label="cyan"
    options={[
      { text: 'Red', value: 'Red' },
      { text: 'Orange', value: 'Orange' },
    ]}
  />
  <Dropdown
    theme="teal"
    themeVariant="light"
    label="teal"
    options={[
      { text: 'Red', value: 'Red' },
      { text: 'Orange', value: 'Orange' },
    ]}
  />
  <Dropdown
    theme="green"
    themeVariant="light"
    label="green"
    options={[
      { text: 'Red', value: 'Red' },
      { text: 'Orange', value: 'Orange' },
    ]}
  />
  <Dropdown
    theme="light-green"
    themeVariant="light"
    label="light-green"
    options={[
      { text: 'Red', value: 'Red' },
      { text: 'Orange', value: 'Orange' },
    ]}
  />
  <Dropdown
    theme="lime"
    themeVariant="light"
    label="lime"
    options={[
      { text: 'Red', value: 'Red' },
      { text: 'Orange', value: 'Orange' },
    ]}
  />
  <Dropdown
    theme="yellow"
    themeVariant="light"
    label="yellow"
    options={[
      { text: 'Red', value: 'Red' },
      { text: 'Orange', value: 'Orange' },
    ]}
  />
  <Dropdown
    theme="light-orange"
    themeVariant="light"
    label="light-orange"
    options={[
      { text: 'Red', value: 'Red' },
      { text: 'Orange', value: 'Orange' },
    ]}
  />
  <Dropdown
    theme="orange"
    themeVariant="light"
    label="orange"
    options={[
      { text: 'Red', value: 'Red' },
      { text: 'Orange', value: 'Orange' },
    ]}
  />
  <Dropdown
    theme="deep-orange"
    themeVariant="light"
    label="deep-orange"
    options={[
      { text: 'Red', value: 'Red' },
      { text: 'Orange', value: 'Orange' },
    ]}
  />
  <Dropdown
    theme="amber"
    themeVariant="light"
    label="amber"
    options={[
      { text: 'Red', value: 'Red' },
      { text: 'Orange', value: 'Orange' },
    ]}
  />
  <Dropdown
    theme="brown"
    themeVariant="light"
    label="brown"
    options={[
      { text: 'Red', value: 'Red' },
      { text: 'Orange', value: 'Orange' },
    ]}
  />
  <Dropdown
    theme="gray"
    themeVariant="light"
    label="gray"
    options={[
      { text: 'Red', value: 'Red' },
      { text: 'Orange', value: 'Orange' },
    ]}
  />
  <Dropdown
    theme="blue-gray"
    themeVariant="light"
    label="blue-gray"
    options={[
      { text: 'Red', value: 'Red' },
      { text: 'Orange', value: 'Orange' },
    ]}
  />
  <Dropdown
    theme="white"
    themeVariant="light"
    label="white"
    options={[
      { text: 'Red', value: 'Red' },
      { text: 'Orange', value: 'Orange' },
    ]}
  />
</>;
```
