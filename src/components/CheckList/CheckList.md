```jsx
import { CheckList } from '@atomikui/core';

const items = [
  { description: 'Take laundry to the cleaners', isChecked: true },
  { description: 'Grocery shopping', isChecked: true },
  { description: 'Cut grass', isChecked: false },
  { description: 'Wash kitchen floor', isChecked: false },
];

<CheckList items={items} onCheck={(items) => console.log(items)} />;
```
