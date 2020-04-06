```jsx
import { useState } from 'react';
import { FileUpload } from '@alaneicker/react-component-library';

const [value, setValue] = useState('');

<FileUpload onChange={(e) => setValue(e.target.value)} />;
```
