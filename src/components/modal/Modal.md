### Modal Dialog

```jsx
import { useState } from 'react';
import { Modal, Button } from '@alaneicker/react-component-library';

const [isOpen, setIsOpen] = useState(false);

const toggleModal = () => {
  setIsOpen(!isOpen);
};

<>
  <Button variant="primary" size="md"  onClick={() => toggleModal()}>Toggle Modal</Button>
  <Modal 
    isOpen={isOpen} 
    onClose={toggleModal}
    footer={
      <div className="text-align-right">
        <Button variant="primary" size="md" onClick={() => toggleModal()}>OK</Button>
      </div>
    }>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis magna nulla, a convallis tortor dignissim sit amet. Fusce non dictum felis. Fusce velit mi, placerat a feugiat sagittis, facilisis vel lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In vitae eros nunc. Pellentesque sed nisi tempor, mollis eros posuere, maximus mauris. Donec tincidunt, dui quis tincidunt pharetra, arcu erat commodo tortor, pharetra maximus sapien lectus quis eros. Aliquam erat volutpat.</p>
  </Modal>
</>
```

### Drawer

```jsx
import { useState } from 'react';
import { Modal, Button } from '@alaneicker/react-component-library';

const [isOpen, setIsOpen] = useState(false);

const toggleModal = () => {
  setIsOpen(!isOpen);
};

<>
  <Button variant="primary" size="md"  onClick={() => toggleModal()}>Toggle Drawer</Button>
  <Modal 
    isDrawer
    isOpen={isOpen} 
    onClose={toggleModal}
    footer={
      <div className="text-align-right">
        <Button variant="primary" size="md" onClick={() => toggleModal()}>OK</Button>
      </div>
    }>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis magna nulla, a convallis tortor dignissim sit amet. Fusce non dictum felis. Fusce velit mi, placerat a feugiat sagittis, facilisis vel lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In vitae eros nunc. Pellentesque sed nisi tempor, mollis eros posuere, maximus mauris. Donec tincidunt, dui quis tincidunt pharetra, arcu erat commodo tortor, pharetra maximus sapien lectus quis eros. Aliquam erat volutpat.</p>
  </Modal>
</>
```