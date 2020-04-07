The autocomplete is a `FormField` enhanced by a panel of suggested options.

```jsx
import { useState } from 'react';
import { AutoComplete } from '@alaneicker/react-component-library';

const [selected, setSelected] = useState('');

<>
  <AutoComplete
    label="Select Your Favorite Fruit"
    onChange={(value) => setSelected(value)}
    items={[
      { value: 'apple' },
      { value: 'banana' },
      { value: 'cantaloupe' },
      { value: 'grape' },
      { value: 'mango' },
      { value: 'nectarine' },
      { value: 'orange' },
      { value: 'pear' },
      { value: 'peach' },
      { value: 'strawberry' },
      { value: 'tangerine' },
    ]}
  />
  <p>Your favorite fruit is: {selected}</p>
</>;
```
