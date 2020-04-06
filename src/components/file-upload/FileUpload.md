The `FileUpload` component allows for the selection of a single file via file browser or drag and drop

### File Upload - File Browser

```jsx
import { FileUpload } from '@alaneicker/react-component-library';

<FileUpload
  label="Upload file"
  uploadBtnVariant="primary"
  onChange={(file) => console.log(file)}
/>;
```

### File Upload - Drag and Drop

```jsx
import { FileUpload } from '@alaneicker/react-component-library';

<FileUpload
  label="Upload file"
  uploadBtnVariant="primary"
  onChange={(file) => console.log(file)}
  dragAndDrop
/>;
```
