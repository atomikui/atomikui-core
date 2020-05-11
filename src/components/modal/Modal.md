A modal displays content that temporarily blocks interactions with the main part of a site or application.

### Modal Dialog

```jsx
import { useState } from 'react';
import { Modal, Button } from '@alaneicker/atomik-ui';

const [isOpen, setIsOpen] = useState(false);

const toggleModal = () => {
  setIsOpen(!isOpen);
};

<>
  <Button theme="primary" size="md" onClick={() => toggleModal()}>
    Toggle Modal
  </Button>
  <Modal
    isOpen={isOpen}
    onClose={toggleModal}
    title="Modal Dialog"
    footer={
      <div className="text-align-right">
        <Button theme="primary" size="md" onClick={() => toggleModal()}>
          OK
        </Button>
      </div>
    }
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
      facilisis magna nulla, a convallis tortor dignissim sit amet. Fusce non
      dictum felis. Fusce velit mi, placerat a feugiat sagittis, facilisis vel
      lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
      per inceptos himenaeos. In vitae eros nunc. Pellentesque sed nisi tempor,
      mollis eros posuere, maximus mauris. Donec tincidunt, dui quis tincidunt
      pharetra, arcu erat commodo tortor, pharetra maximus sapien lectus quis
      eros. Aliquam erat volutpat.
    </p>
  </Modal>
</>;
```

### Theme Variations

```jsx
import { useState } from 'react';
import { Modal, Button } from '@alaneicker/atomik-ui';

const [isOpen, setIsOpen] = useState(false);
const [type, setType] = useState(null);

const toggleModal = (type) => {
  if (type) {
    setType(type);
  }
  setIsOpen(!isOpen);
};

<>
  <Button size="md" onClick={() => toggleModal('dark')}>
    Dark Modal
  </Button>
  <Button theme="primary" size="md" onClick={() => toggleModal('info')}>
    Info Modal
  </Button>
  <Button theme="warning" size="md" onClick={() => toggleModal('warning')}>
    Warning Modal
  </Button>
  <Button theme="tertiary" size="md" onClick={() => toggleModal('error')}>
    Error Modal
  </Button>
  <Button theme="secondary" size="md" onClick={() => toggleModal('success')}>
    Success Modal
  </Button>

  <Modal
    type={type}
    isOpen={isOpen}
    onClose={toggleModal}
    title="Modal Dialog"
    footer={
      <div className="text-align-right">
        <Button theme="white" size="md" onClick={() => toggleModal()}>
          OK
        </Button>
      </div>
    }
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
      facilisis magna nulla, a convallis tortor dignissim sit amet. Fusce non
      dictum felis. Fusce velit mi, placerat a feugiat sagittis, facilisis vel
      lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
      per inceptos himenaeos.
    </p>
  </Modal>
</>;
```
