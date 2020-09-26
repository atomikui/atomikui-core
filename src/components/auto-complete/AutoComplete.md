The AutoComplete component is a FormField enhanced by a panel of suggested options.

**Note:** All of the [Formfield](#/Form/FormField) props are availabel to use with the `AutoComplete` component.

```jsx
import { AutoComplete } from '@atomikui/core';

<AutoComplete
  label="Select Your Favorite Fruit"
  onChange={(value) => console.log(value)}
  items={[
    { value: 'Apple' },
    { value: 'Banana' },
    { value: 'Cantaloupe' },
    { value: 'Grape' },
    { value: 'Mango' },
    { value: 'Nectarine' },
    { value: 'Orange' },
    { value: 'Pear' },
    { value: 'Peach' },
    { value: 'Strawberry' },
    { value: 'Tangerine' },
  ]}
/>;
```
