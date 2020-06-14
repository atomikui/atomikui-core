The ProgressBar component is used as an indicator quantitative progress.

### Basic Progress Bar

```jsx
import { ProgressBar } from '@alaneicker/atomik-ui';

const now = 60;

<>
  <ProgressBar now={now} label={`${now}%`} />
</>;
```

### Theme Variants

```jsx
import { ProgressBar } from '@alaneicker/atomik-ui';

<>
  <ProgressBar now={60} variant="success" />
  <ProgressBar now={40} variant="warning" />
  <ProgressBar now={50} variant="info" />
  <ProgressBar now={80} variant="error" />
</>;
```

### Animated Progress Bar

```jsx
import { ProgressBar } from '@alaneicker/atomik-ui';

<>
  <ProgressBar now={70} animated />
  <ProgressBar now={60} variant="success" animated />
  <ProgressBar now={40} variant="warning" animated />
  <ProgressBar now={50} variant="info" animated />
  <ProgressBar now={80} variant="error" animated />
</>;
```

### Progress Bar in Action

```jsx
import { useState, useEffect, useRef } from 'react';
import { ProgressBar, Button } from '@alaneicker/atomik-ui';

const [start, setStart] = useState(false);
const [now, setNow] = useState(0);

const useInterval = (callback, delay, end) => {
  const savedCallback = useRef();
  let id;

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const next = () => {
      savedCallback.current();
    };

    if (delay !== null) {
      id = setInterval(next, delay);

      if (end) {
        clearInterval(id);
      }

      return () => clearInterval(id);
    }
  }, [delay, end]);
};

useInterval(
  () => {
    if (start) {
      setNow(now + 1);
    }
  },
  100,
  now >= 100,
);

<div className="text-size-20 text-align-center">
  <Button
    onClick={() => {
      setNow(0);
      setStart(true);
    }}
  >
    {now === 100 ? 'Restart' : 'Start'}
  </Button>
  {start && (
    <>
      <div className="text-align-center margin-top-16">{now}%</div>
      {now !== 100 ? (
        <ProgressBar now={now} animated />
      ) : (
        <div className=" text-weight-bold">DONE!</div>
      )}
    </>
  )}
</div>;
```
