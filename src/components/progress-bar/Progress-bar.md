The ProgressBar component is used as an indicator quantitative progress.

### Basic Progress Bar

```jsx
import { ProgressBar } from '@alaneicker/atomik-ui';

const now = 60;

<>
  <ProgressBar now={now} label={`${now}%`} />
</>;
```

### Color Themes

```jsx
import { ProgressBar } from '@alaneicker/atomik-ui';

<>
  <ProgressBar now={60} theme="red" />
  <ProgressBar now={40} theme="pink" />
  <ProgressBar now={50} theme="purple" />
  <ProgressBar now={80} theme="deep-purple" />
  <ProgressBar now={60} theme="indigo" />
  <ProgressBar now={40} theme="blue" />
  <ProgressBar now={50} theme="sky-blue" />
  <ProgressBar now={80} theme="cyan" />
  <ProgressBar now={60} theme="teal" />
  <ProgressBar now={40} theme="green" />
  <ProgressBar now={50} theme="light-green" />
  <ProgressBar now={80} theme="pickle" />
  <ProgressBar now={60} theme="yellow" />
  <ProgressBar now={40} theme="light-orange" />
  <ProgressBar now={50} theme="orange" />
  <ProgressBar now={80} theme="deep-orange" />
  <ProgressBar now={60} theme="amber" />
  <ProgressBar now={40} theme="brown" />
  <ProgressBar now={50} theme="gray" />
  <ProgressBar now={80} theme="blue-gray" />
  <ProgressBar now={80} theme="black" />
</>;
```

### Shapes

```jsx
import { ProgressBar } from '@alaneicker/atomik-ui';

<>
  <ProgressBar now={60} />
  <ProgressBar now={60} shape="pill" />
  <ProgressBar now={60} shape="square" />
</>;
```

### Thickness

```jsx
import { ProgressBar } from '@alaneicker/atomik-ui';

<>
  <ProgressBar now={60} thickness="thin" />
  <ProgressBar now={60} />
  <ProgressBar now={60} thickness="thick" />
  <ProgressBar now={60} thickness="extra-thick" />
</>;
```

### Animated Progress Bar

```jsx
import { ProgressBar } from '@alaneicker/atomik-ui';

<>
  <ProgressBar now={70} animated />
  <ProgressBar now={60} theme="red" animated />
  <ProgressBar now={40} theme="orange" animated />
  <ProgressBar now={50} theme="purple" animated />
  <ProgressBar now={80} theme="light-green" animated />
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
