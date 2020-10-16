The TimePicker component allows a user to select a time. It returns an object with the select hour, minutes, meridiem, and the formatted time string.

```jsx
import { TimePicker } from '@atomikui/core';

const [time, setTime] = React.useState(null);

<>
  <pre className="margin-bottom-16">
    <code>{JSON.stringify(time, null, 2)}</code>
  </pre>

  <TimePicker
    errorText="Please select a time"
    label="Select Appointment Time"
    hour="12"
    minutes="00"
    amOrPm="PM"
    onChange={(time) => setTime(time)}
  />
</>;
```
