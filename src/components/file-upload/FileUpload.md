The FileUpload component allows for the selection of one or more files via file browser or drag and drop

### File Upload - File Browser

```jsx
import { FileUpload } from '@atomikui/core';

<FileUpload
  label="Upload file"
  uploadBtnTheme="blue"
  onChange={(fileData) => console.log(fileData)}
/>;
```

### File Upload - Drag and Drop

```jsx
import { FileUpload } from '@atomikui/core';

<FileUpload
  label="Select a file to upload or drag and drop in the box"
  uploadBtnTheme="blue"
  onChange={(fileData) => console.log(fileData)}
  dragAndDrop
/>;
```
