A floating menu displaying three to six related actions. Action buttons can be positioned to the right (default), left, to and bottom.

_Note: for best results, the QuickActions menu should be positioned absolute or fixed._

```jsx
import { useState } from 'react';
import { QuickActions, Button, List, ListItem } from '@alaneicker/atomik-ui';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  faSave,
  faCopy,
  faPrint,
  faShareAlt,
} from '@fortawesome/free-solid-svg-icons';

const [position, setPosition] = useState(null);

const constwrapperStyle = {
  left: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  top: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  bottom: {
    display: 'flex',
    alignItems: 'flex-start',
  },
};

<>
  <List type="horizontal" align="center">
    <ListItem>
      <Button size="sm" onClick={() => setPosition()}>
        Right
      </Button>
    </ListItem>
    <ListItem>
      <Button size="sm" onClick={() => setPosition('left')}>
        Left
      </Button>
    </ListItem>
    <ListItem>
      <Button size="sm" onClick={() => setPosition('top')}>
        Top
      </Button>
    </ListItem>
    <ListItem>
      <Button size="sm" onClick={() => setPosition('bottom')}>
        Bottom
      </Button>
    </ListItem>
  </List>
  <div
    style={{
      height: '280px',
      marginTop: '20px',
      ...(position && { ...constwrapperStyle[position] }),
    }}
  >
    <QuickActions
      position={position}
      actions={[
        {
          label: 'Save',
          icon: <Icon icon={faSave} />,
          onClick: () => {},
        },
        {
          label: 'Copy',
          icon: <Icon icon={faCopy} />,
          onClick: () => {},
        },
        {
          label: 'Print',
          icon: <Icon icon={faPrint} />,
          onClick: () => {},
        },
        {
          label: 'Share',
          icon: <Icon icon={faShareAlt} />,
          onClick: () => {},
        },
      ]}
    />
  </div>
</>;
```
