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
  />
  <p>Your favorite fruit is: {selected}</p>
</>;
```
