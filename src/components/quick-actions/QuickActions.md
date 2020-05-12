A floating menu displaying three to size related actions.

```jsx
import { QuickActions } from '@alaneicker/atomik-ui';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  faSave,
  faCopy,
  faPrint,
  faShareAlt,
} from '@fortawesome/free-solid-svg-icons';

<QuickActions
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
/>;
```
