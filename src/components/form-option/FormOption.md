```jsx
import { useState } from 'react';
import { FormOption } from '@alaneicker/react-component-library';

<FormOption label="I agree to the terms & conditions" />
```

```jsx
import { useState } from 'react';
import { FormOption } from '@alaneicker/react-component-library';

<>
  <FormOption type="radio" label="Option 1" name="option" checked={true} />
  <FormOption type="radio" label="Option 2" name="option" />
  <FormOption type="radio" label="Option 3" name="option" />
</>
```

### Error State

```jsx
import { useState } from 'react';
import { FormOption } from '@alaneicker/react-component-library';

<FormOption label="I agree to the terms & conditions" errorText="Please agree to the terms" hasError />
```