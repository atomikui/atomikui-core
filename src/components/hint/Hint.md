A Hint provides the user with helpful information about a task that is being performed.

### Default

```jsx
import { Hint } from '@atomikui/core';

<Hint>This is a default hint</Hint>;
```

### States (Error, Warning)

```jsx
import { Hint } from '@atomikui/core';

<>
  <Hint type="error">This is an error hint</Hint>
  <Hint type="warning">This is a warning hint</Hint>
  <Hint type="success">This is a success hint</Hint>
  <Hint type="info">This is an informational hint</Hint>
</>;
```
