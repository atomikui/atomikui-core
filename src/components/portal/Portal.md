The Portal component utilizes ReactDom's `createPortal` to render children into a DOM node outside the DOM hierarchy of the parent component.

This can come in handy when creating a DOM node inside of one component, but it is actually need somewhere else. The [Tooltip](/#/Informational/Tooltip) component leverages the Portal to place the newly created tooltip in the document body before it is positioned next to it's associated content.

```jsx
import React, { useEffect, useRef, useState } from 'react';
import { Portal, Alert, Button } from '@alaneicker/atomik-ui';

const containerRef = useRef(null);
const [show, setShow] = useState(false);
const [container, setContainer] = useState(null);

useEffect(() => {
  setContainer(containerRef.current);
}, []);

<>
  <Button className="margin-bottom-16" size="md" onClick={() => setShow(!show)}>
    {show ? 'Unrender' : 'Render'} Children
  </Button>
  <Alert className="margin-bottom-16">
    You may think the content will render here. But your wrong!
    {container && show && (
      <Portal container={container}>It actually renders here!</Portal>
    )}
  </Alert>
  <Alert theme="info">
    <span ref={containerRef}></span>
  </Alert>
</>;
```

### Using Portal With a Custom DOM Node

```jsx
import React, { useEffect, useState } from 'react';
import { Portal, Alert, Button } from '@alaneicker/atomik-ui';

const [show, setShow] = useState(false);
const [container, setContainer] = useState(null);

useEffect(() => {
  const id = 'alert-container';
  const el = document.createElement('div');

  el.id = id;
  el.style.cssText = `
    maxWidth: 500px;
    position: fixed;
    left: 50%;
    top: 20px;
    transform: translateX(-50%);
  `;

  document.body.appendChild(el);

  setContainer(document.getElementById('alert-container'));

  return () => {
    document.body.removeChild(document.getElementById(id));
  };
}, []);

<>
  <Button className="margin-bottom-16" size="md" onClick={() => setShow(!show)}>
    {show ? 'Hide' : 'Show'} Alert
  </Button>
  {container && (
    <Portal container={container}>
      {show && (
        <Alert theme="info" onClose={() => setShow(false)}>
          This alert was created with a React portal
        </Alert>
      )}
    </Portal>
  )}
</>;
```
