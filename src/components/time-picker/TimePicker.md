The TimePicker component allows a user to select a time. It returns an object with the select hour, minutes, meridiem, and the formatted time string.

```jsx
import { TimePicker } from '@atomikui/core';

const [time, setTime] = React.useState(null);

<>
  <pre className="margin-bottom-16">
    <code>{JSON.stringify(time, null, 2)}</code>
  </pre>

  <TimePicker
    hour="4"
    minute="30"
    meridiem="PM"
    onChange={(time) => setTime(time)}
  />
</>;
```
