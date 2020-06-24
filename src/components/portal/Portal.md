The Portal component utilizes ReactDom's `createPortal` to render children into a DOM node outside the DOM hierarchy of the parent component.

This can come in handy when creating a DOM node inside of one component, but it is actually need somewhere else. The [Tooltip](/#/Informational/Tooltip) component leverages the Portal to place the newly created tooltip in the document body before it is positioned next to it's associated content.

```jsx
import React, { useRef, useState } from 'react';
import { Portal, Alert, Button } from '@alaneicker/atomik-ui';

const container = useRef(null);
const [show, setShow] = useState(false);

<>
  <Button className="margin-bottom-16" size="md" onClick={() => setShow(!show)}>
    {show ? 'Unrender' : 'Render'} Children
  </Button>
  <Alert className="margin-bottom-16">
    You may think the content will render here. But your wrong!
    {show && (
      <Portal container={container.current}>It actually renders here!</Portal>
    )}
  </Alert>
  <Alert theme="info">
    <span ref={container}></span>
  </Alert>
</>;
```

### Using Portal with a Custom DOM Node

```jsx
import React, { useEffect, useState } from 'react';
import { Portal, Alert, Button } from '@alaneicker/atomik-ui';

const [show, setShow] = useState(false);

useEffect(() => {
  const el = document.createElement('div');
  el.id = 'alert-container';
  el.style.maxWidth = '500px';
  el.style.position = 'fixed';
  el.style.left = '50%';
  el.style.top = '20px';
  el.style.transform = 'translateX(-50%)';

  document.body.appendChild(el);

  return () => {
    document.body.removeChild(document.querySelector('#alert-container'));
  };
}, []);

<>
  <Button className="margin-bottom-16" size="md" onClick={() => setShow(!show)}>
    {show ? 'Hide' : 'Show'} Alert
  </Button>
  {show && (
    <Portal container={document.querySelector('#alert-container')}>
      <Alert theme="info" onClose={() => setShow(false)}>
        This alert was created with a React portal
      </Alert>
    </Portal>
  )}
</>;
```
