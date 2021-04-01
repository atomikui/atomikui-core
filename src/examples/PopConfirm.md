The following example shows how to easily create a pop confirm.

```jsx
import { Button, Tooltip, List, ListItem } from '@atomikui/core';
import FocusTrap from 'focus-trap-react';

<Tooltip
  triggerOnClick
  hasPointerEvents
  trigger={<Button theme="blue">Delete</Button>}
>
  <FocusTrap>
    <div className="text-align-center">
      <p className="margin-bottom-16">Are you sure you want to delete this?</p>
      <List type="horizontal">
        <List.Item>
          <Button size="md" theme="blue">
            Yes, I'm Sure
          </Button>
        </List.Item>
        <List.Item>
          <Button size="md" theme="white">
            Cancel
          </Button>
        </List.Item>
      </List>
    </div>
  </FocusTrap>
</Tooltip>;
```
