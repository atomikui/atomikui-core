```jsx
import { useState } from 'react';
import { Modal, Button } from '@alaneicker/react-component-library';

const [isOpen, setIsOpen] = useState(false);

<>
  <Button variant="primary" size="md">Toggle Modal</Button>
  <Modal isOpen={isOpen}>
    <div>Modal content...</div>
  </Modal>
</>
```