A modal displays content that temporarily blocks interactions with the main part of a site or application.

### Modal Dialog

```jsx
import { useState } from 'react';
import { Modal, Button } from '@atomikui/core';

const [isOpen, setIsOpen] = useState(false);

const toggleModal = () => {
  setIsOpen(!isOpen);
};

<>
  <Button theme="blue" onClick={() => toggleModal()}>
    Toggle Modal
  </Button>
  <Modal
    isOpen={isOpen}
    onClose={toggleModal}
    title="Modal Dialog"
    footer={
      <div className="text-align-right">
        <Button theme="blue" onClick={() => toggleModal()}>
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
import { Modal, Button } from '@atomikui/core';

const [isOpen, setIsOpen] = useState(false);
const [theme, setTheme] = useState(null);

const toggleModal = (theme) => {
  if (theme) {
    setTheme(theme);
  }
  setIsOpen(!isOpen);
};

<>
  <Button theme="gray" onClick={() => toggleModal('dark')}>
    Dark
  </Button>
  <Button theme="blue" onClick={() => toggleModal('info')}>
    Info
  </Button>
  <Button theme="amber" onClick={() => toggleModal('warning')}>
    Warning
  </Button>
  <Button theme="red" onClick={() => toggleModal('error')}>
    Error
  </Button>
  <Button theme="green" onClick={() => toggleModal('success')}>
    Success
  </Button>

  <Modal
    theme={theme}
    isOpen={isOpen}
    onClose={toggleModal}
    title="Modal Dialog"
    footer={
      <div className="text-align-right">
        <Button theme="white" onClick={() => toggleModal()}>
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
