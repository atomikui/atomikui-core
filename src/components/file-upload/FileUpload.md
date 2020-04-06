```jsx
import { useState } from 'react';
import { FileUpload } from '@alaneicker/react-component-library';

const [value, setValue] = useState('');

<FileUpload
  label="Upload file"
  uploadBtnVariant="primary"
  onChange={(file) => setValue(file)}
  dragAndDrop
/>;
```
