The UserPersona component represents a person and their basic user information.

```jsx
import { UserPersona } from '@atomikui/core';

<UserPersona
  avatar="bob.png"
  name="Bob Smith"
  status="available"
  statusMessage="I'm available until 11:30am"
/>;
```

### Status

```jsx
import { UserPersona } from '@atomikui/core';

<>
  <UserPersona
    avatar="bob.png"
    name="Bob Smith"
    status="available"
    statusMessage="I'm available until 11:30am"
  />
  <UserPersona
    avatar="bob.png"
    name="Bob Smith"
    status="busy"
    statusMessage="I'm busy until 11:30am"
  />
  <UserPersona
    avatar="bob.png"
    name="Bob Smith"
    status="away"
    statusMessage="I'm away until 11:30am"
  />
  <UserPersona avatar="bob.png" name="Bob Smith" status="offline" />
</>;
```

### Sizes

```jsx
import { UserPersona } from '@atomikui/core';

<>
  <UserPersona
    size="sm"
    avatar="bob.png"
    name="Bob Smith"
    status="busy"
    statusMessage="I'm busy until 11:30am"
  />
  <UserPersona
    avatar="bob.png"
    name="Bob Smith"
    status="away"
    statusMessage="I'm away until 11:30am"
  />
  <UserPersona
    size="lg"
    avatar="bob.png"
    name="Bob Smith"
    status="available"
    statusMessage="I'm available until 11:30am"
  />
</>;
```
