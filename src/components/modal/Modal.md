### Modal Dialog

```jsx
import { useState } from 'react';
import { Modal, Button } from '@alaneicker/react-component-library';

const [isOpen, setIsOpen] = useState(false);

const toggleModal = () => {
  setIsOpen(!isOpen);
};

<>
  <Button variant="primary" size="md" onClick={() => toggleModal()}>
    Toggle Modal
  </Button>
  <Modal
    isOpen={isOpen}
    onClose={toggleModal}
    title="Modal Dialog"
    footer={
      <div className="text-align-right">
        <Button variant="primary" size="md" onClick={() => toggleModal()}>
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
import { Modal, Button } from '@alaneicker/react-component-library';

const [isOpen, setIsOpen] = useState(false);
const [variant, setVariant] = useState(null);

const toggleModal = (theme) => {
  if (theme) {
    setVariant(theme);
  }
  setIsOpen(!isOpen);
};

<>
  <Button variant="primary" size="md" onClick={() => toggleModal('info')}>
    Info Modal
  </Button>
  <Button variant="warning" size="md" onClick={() => toggleModal('warning')}>
    Warning Modal
  </Button>
  <Button variant="tertiary" size="md" onClick={() => toggleModal('error')}>
    Error Modal
  </Button>
  <Button variant="secondary" size="md" onClick={() => toggleModal('success')}>
    Success Modal
  </Button>

  <Modal
    variant={variant}
    isOpen={isOpen}
    onClose={toggleModal}
    title="Modal Dialog"
    footer={
      <div className="text-align-right">
        <Button variant="white" size="md" onClick={() => toggleModal()}>
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
