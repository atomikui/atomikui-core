### Button Variants

```jsx
import { Button } from 'react-component-library';

<>
  <Button text="Default" type="submit" />
  <Button text="Primary" type="submit" variant="primary" />
  <Button text="Secondary" type="submit" variant="secondary" />
  <Button text="Tertiary" type="submit" variant="tertiary" />
  <Button text="Hollow" type="submit" variant="hollow" />
  <Button text="Link" type="submit" variant="link" />
</>
```

### Pill Button

```jsx
import { Button } from 'react-component-library';

<>
  <Button text="Default" type="submit" shape="pill" />
  <Button text="Primary" type="submit" variant="primary" shape="pill" />
  <Button text="Secondary" type="submit" variant="secondary" shape="pill" />
  <Button text="Tertiary" type="submit" variant="tertiary" shape="pill" />
</>
```

### Disabled Button

```jsx
import { Button } from 'react-component-library';

<Button text="Disabled" type="submit" variant="primary" disabled />
```

### Responsive Button

```jsx
import { Button } from 'react-component-library';

<Button text="Block Button" type="submit" variant="primary" block />
```

### Button Sizes

```jsx
import { Button } from 'react-component-library';

<>
  <Button text="Small" type="submit" size="sm" />
  <Button text="Medium" type="submit" variant="primary" size="md" />
  <Button text="Default" type="submit" variant="secondary" />
  <Button text="Large" type="submit" variant="tertiary" size="lg" />
</>
```