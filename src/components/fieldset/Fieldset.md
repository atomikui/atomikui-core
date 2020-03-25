```jsx
import { useState } from 'react';
import { Fieldset } from '@alaneicker/react-component-library';

const [fields, setFields] = useState([
  {
    component: 'formfield',
    colSpan: '2',
    props: {
      errorText: 'first name is required',
      label: 'First Name',
      hasError: true,
    }
  },
  {
    component: 'formfield',
    colSpan: '2',
    props: {
      errorText: 'Last name is required',
      label: 'Last Name',
      hasError: false,
    }
  },
  {
    component: 'formfield',
    colSpan: '2',
    props: {
      errorText: 'Comments is required',
      label: 'Comments',
      type: 'textarea',
      hasError: false,
    }
  },
  {
    component: 'dropdown',
    colSpan: '3',
    props: {
      errorText: 'State is required',
      label: 'State',
      hasError: false,
      options: [
        { text: 'IL', value: 'IL' }
      ]
    }
  },
  {
    component: 'formoption',
    colSpan: '12',
    props: {
      errorText: 'Please agree with the terms',
      label: 'I agree with the terms and conditions',
      type: 'checkbox',
      hasError: true,
    }
  }
]);

<Fieldset fields={fields} />
```