```jsx
import { useState } from 'react';
import { Fieldset } from '@alaneicker/react-component-library';

const [fields, setFields] = useState([
  {
    component: 'formfield',
    colSpan: '2',
    props: {
      errorText: 'first name is required',
      label: 'First Name'
    }
  },
  {
    component: 'formfield',
    colSpan: '2',
    props: {
      errorText: 'Last name is required',
      label: 'Last Name'
    }
  }
]);

<Fieldset fields={fields} />
```