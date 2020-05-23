The Spinner component can be used tp indicate that a process is taking place. Unline the ProgressBar components, the Spinner does not indicate quantitative progress.

### Themes

```jsx
import { Spinner } from '@alaneicker/atomik-ui';

<>
  <Spinner />
  <div style={{ background: '#222', padding: '3px', display: 'inline-block' }}>
    <Spinner theme="white" />
  </div>
  <Spinner theme="red" />
  <Spinner theme="orange" />
  <Spinner theme="green" />
  <Spinner theme="blue" />
</>;
```

### Sizes

```jsx
<>
  <Spinner theme="blue" size="sm" />
  <Spinner theme="blue" size="md" />
  <Spinner theme="blue" />
  <Spinner theme="blue" size="lg" />
  <Spinner theme="blue" size="xlg" />
</>
```
