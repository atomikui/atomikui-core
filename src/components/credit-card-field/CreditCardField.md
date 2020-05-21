```jsx
import { CreditCardField } from '@alaneicker/atomik-ui';

<CreditCardField
  label="Credit Card"
  customFields={[
    {
      placeholder: 'CVC',
      fieldName: 'cc_cvc',
      hasError: false,
      errorText: 'Card CVC is required',
    },
    {
      placeholder: 'ZIP',
      fieldName: 'cc_zip',
      hasError: false,
      errorText: 'ZIP code is required',
    },
  ]}
/>;
```
