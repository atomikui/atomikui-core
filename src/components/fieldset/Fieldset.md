```jsx
import { useState } from 'react';
import { Fieldset } from '@alaneicker/react-component-library';

const [fields, setFields] = useState([
  {
    component: 'formfield',
    props: {
      errorText: 'First name is required',
      label: 'First Name',
    }
  },
  {
    component: 'formfield',
    props: {
      errorText: 'Last name is required',
      label: 'Last Name',
      hasError: false,
    }
  },
  {
    component: 'formfield',
    props: {
      errorText: 'Middle initial is required',
      label: 'Middle Initial',
      hasError: false,
    }
  },
  {
    component: 'dropdown',
    props: {
      errorText: 'Gender is required',
      label: 'Gender',
      hasError: false,
      options: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' }
      ]
    }
  },
  {
    component: 'formfield',
    props: {
      errorText: 'Email address is required',
      label: 'Email Address',
      type: 'text',
      hasError: false,
    }
  },
  {
    component: 'formfield',
    props: {
      errorText: 'Phone number is required',
      label: 'Phone Number',
      type: 'text',
      hasError: false,
    }
  },
  {
    component: 'button',
    props: {
      children: 'Next',
      type: 'button',
      variant: 'primary',
    }
  },
]);

<Fieldset legend="Personal Information" fields={fields} />
```