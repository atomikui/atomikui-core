The FileUpload component allows for the selection of one or more files via file browser or drag and drop

### File Upload - File Browser

```jsx
import { FileUpload } from '@alaneicker/atomik-ui';

<FileUpload
  label="Upload file"
  uploadBtnVariant="primary"
  onChange={(file) => console.log(file)}
/>;
```

### File Upload - Drag and Drop

```jsx
import { FileUpload } from '@alaneicker/atomik-ui';

<FileUpload
  label="Select a file to upload or drag and drop in the box"
  uploadBtnVariant="primary"
  onChange={(file) => console.log(file)}
  dragAndDrop
/>;
```
