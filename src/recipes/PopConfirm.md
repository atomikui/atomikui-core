The following example shows how to easily create a pop confirm.

```jsx
import { Button, Tooltip, List, ListItem } from '@atomikui/core';

<Tooltip
  triggerOnClick
  hasPointerEvents
  trigger={<Button theme="blue">Delete</Button>}
>
  <div className="text-align-center">
    <p className="margin-bottom-16">Are you sure you want to delete this?</p>
    <List type="horizontal">
      <ListItem>
        <Button size="md" theme="blue">
          Yes, I'm Sure
        </Button>
      </ListItem>
      <ListItem>
        <Button size="md" theme="white">
          Cancel
        </Button>
      </ListItem>
    </List>
  </div>
</Tooltip>;
```
