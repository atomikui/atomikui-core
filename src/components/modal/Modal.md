```jsx
import { useState } from 'react';
import { Modal, Button } from '@alaneicker/react-component-library';

const [isOpen, setIsOpen] = useState(false);

const toggleModal = () => {
  setIsOpen(!isOpen);
};

<>
  <Button 
    variant="primary" 
    size="md" 
    onClick={() => toggleModal()}
  >
    Toggle Modal
  </Button>
  <Modal isOpen={isOpen} onClose={toggleModal}>
    <div>Modal content...</div>
  </Modal>
</>
```