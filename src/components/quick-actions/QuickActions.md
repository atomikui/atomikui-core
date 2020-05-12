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
      icon: <Icon icon={faSave} size="lg" />,
      onClick: () => {},
    },
    {
      label: 'Copy',
      icon: <Icon icon={faCopy} size="lg" />,
      onClick: () => {},
    },
    {
      label: 'Print',
      icon: <Icon icon={faPrint} size="lg" />,
      onClick: () => {},
    },
    {
      label: 'Share',
      icon: <Icon icon={faShareAlt} size="lg" />,
      onClick: () => {},
    },
  ]}
/>;
```
