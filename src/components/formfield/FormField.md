### Text Field

```jsx
import { FormField } from 'react-component-library';

<FormField type="text" label="Search" />
```

### Textarea

```jsx
import { FormField } from 'react-component-library';

<FormField type="textarea" label="Enter Your Comments" />
```

### Help Text

```jsx
import { FormField } from 'react-component-library';

<FormField type="text" label="Phone Number" helpText="Expected format: (000) 000-0000" />
```

### Error State

```jsx
import { FormField } from 'react-component-library';

<FormField 
  type="text" 
  label="Full Name" 
  errorText="Please enter your full name"
  hasError={true}
/>
```