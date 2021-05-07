The ButtonControls component lays out buttons in a flex box layout.

### Default Usage

```jsx
import { ButtonControls, Button } from '@atomikui/core';

<ButtonControls>
  <Button shape="pill" theme="blue">
    continue
  </Button>
  <Button shape="pill" theme="blue-gray">
    cancel
  </Button>
</ButtonControls>;
```

### Alignment

The `align` prop sets the horizontal alignment of the buttons.

```jsx
import { ButtonControls, Button } from '@atomikui/core';

<>
  <ButtonControls className="margin-bottom-16">
    <Button shape="pill" theme="blue">
      continue
    </Button>
    <Button shape="pill" theme="blue-gray">
      cancel
    </Button>
  </ButtonControls>
  <ButtonControls align="center" className="margin-bottom-16">
    <Button shape="pill" theme="blue">
      continue
    </Button>
    <Button shape="pill" theme="blue-gray">
      cancel
    </Button>
  </ButtonControls>
  <ButtonControls align="right">
    <Button shape="pill" theme="blue">
      continue
    </Button>
    <Button shape="pill" theme="blue-gray">
      cancel
    </Button>
  </ButtonControls>
</>;
```

### Reverse Ordering

The `isReverse` prop reverses the order of the ButtonControl's children.

```jsx
import { ButtonControls, Button } from '@atomikui/core';

<ButtonControls isReverse>
  <Button shape="pill" theme="blue">
    continue
  </Button>
  <Button shape="pill" theme="blue-gray">
    cancel
  </Button>
</ButtonControls>;
```

### Block

The `isBlock` prop makes buttons stack and stretch full width at all viewport sizes.

```jsx
import { ButtonControls, Button } from '@atomikui/core';

<ButtonControls isBlock>
  <Button shape="pill" theme="blue">
    continue
  </Button>
  <Button shape="pill" theme="blue-gray">
    cancel
  </Button>
</ButtonControls>;
```
