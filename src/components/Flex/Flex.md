The Flex component applies CSS flex box style rules to its child items.

### Default Usage

By default, the Flex component's items have no spacing and are flush with each other.

```jsx
import { Flex } from '@atomikui/core';
import Box from '../../examples/Box';

<Flex>
  <Flex.Item>
    <Box />
  </Flex.Item>
  <Flex.Item>
    <Box />
  </Flex.Item>
  <Flex.Item>
    <Box />
  </Flex.Item>
</Flex>;
```

### Spacing

The `spacing` prop allows for 4, 8, 16, 24, 32, 40, 48, 56 pixel spacing between flex items.

```jsx
import { Flex } from '@atomikui/core';
import Box from '../../examples/Box';

<>
  <Flex spacing="16">
    <Flex.Item>
      <Box />
    </Flex.Item>
    <Flex.Item>
      <Box />
    </Flex.Item>
    <Flex.Item>
      <Box />
    </Flex.Item>
  </Flex>
</>;
```

### Alignment

The `align` prop applies the align-items rule to the Flex component.

```jsx
import { Flex } from '@atomikui/core';
import Box from '../../examples/Box';

const styles = {
  height: '120px',
  padding: '16px',
  background: '#f0f0f0',
  marginBottom: '16px',
};

<>
  <Flex align="flex-start" spacing="16" style={styles}>
    <Flex.Item>
      <Box />
    </Flex.Item>
    <Flex.Item>
      <Box />
    </Flex.Item>
    <Flex.Item>
      <Box />
    </Flex.Item>
  </Flex>
  <Flex align="center" spacing="16" style={styles}>
    <Flex.Item>
      <Box />
    </Flex.Item>
    <Flex.Item>
      <Box />
    </Flex.Item>
    <Flex.Item>
      <Box />
    </Flex.Item>
  </Flex>
  <Flex align="flex-end" spacing="16" style={styles}>
    <Flex.Item>
      <Box />
    </Flex.Item>
    <Flex.Item>
      <Box />
    </Flex.Item>
    <Flex.Item>
      <Box />
    </Flex.Item>
  </Flex>
  <Flex align="stretch" spacing="16" style={styles}>
    <Flex.Item>
      <Box />
    </Flex.Item>
    <Flex.Item>
      <Box />
    </Flex.Item>
    <Flex.Item>
      <Box />
    </Flex.Item>
  </Flex>
</>;
```

### Justification

The `justify` prop applies the justify-content rule to the Flex component.

```jsx
import { Flex } from '@atomikui/core';
import Box from '../../examples/Box';

const styles = { padding: '16px', background: '#f0f0f0' };

<>
  <Flex justify="flex-start" spacing="16" style={styles}>
    <Flex.Item>
      <Box />
    </Flex.Item>
    <Flex.Item>
      <Box />
    </Flex.Item>
    <Flex.Item>
      <Box />
    </Flex.Item>
  </Flex>
  <Flex justify="center" spacing="16" style={styles}>
    <Flex.Item>
      <Box />
    </Flex.Item>
    <Flex.Item>
      <Box />
    </Flex.Item>
    <Flex.Item>
      <Box />
    </Flex.Item>
  </Flex>
  <Flex justify="flex-end" spacing="16" style={styles}>
    <Flex.Item>
      <Box />
    </Flex.Item>
    <Flex.Item>
      <Box />
    </Flex.Item>
    <Flex.Item>
      <Box />
    </Flex.Item>
  </Flex>
  <Flex justify="space-between" spacing="16" style={styles}>
    <Flex.Item>
      <Box />
    </Flex.Item>
    <Flex.Item>
      <Box />
    </Flex.Item>
    <Flex.Item>
      <Box />
    </Flex.Item>
  </Flex>
  <Flex justify="space-around" spacing="16" style={styles}>
    <Flex.Item>
      <Box />
    </Flex.Item>
    <Flex.Item>
      <Box />
    </Flex.Item>
    <Flex.Item>
      <Box />
    </Flex.Item>
  </Flex>
  <Flex justify="space-evenly" spacing="16" style={styles}>
    <Flex.Item>
      <Box />
    </Flex.Item>
    <Flex.Item>
      <Box />
    </Flex.Item>
    <Flex.Item>
      <Box />
    </Flex.Item>
  </Flex>
</>;
```

## Direction

The `direction` prop applies the flex-direction style rule to the Flex component.

```jsx
import { Flex } from '@atomikui/core';
import Box from '../../examples/Box';

<>
  <h4>row</h4>
  <Flex direction="row" spacing="16">
    <Flex.Item>
      <Box>Item 1</Box>
    </Flex.Item>
    <Flex.Item>
      <Box>Item 2</Box>
    </Flex.Item>
    <Flex.Item>
      <Box>Item 3</Box>
    </Flex.Item>
  </Flex>
  <h4>row-reverse</h4>
  <Flex direction="row-reverse" spacing="16">
    <Flex.Item>
      <Box>Item 1</Box>
    </Flex.Item>
    <Flex.Item>
      <Box>Item 2</Box>
    </Flex.Item>
    <Flex.Item>
      <Box>Item 3</Box>
    </Flex.Item>
  </Flex>
  <h4>column</h4>
  <Flex direction="column" spacing="16">
    <Flex.Item>
      <Box>Item 1</Box>
    </Flex.Item>
    <Flex.Item>
      <Box>Item 2</Box>
    </Flex.Item>
    <Flex.Item>
      <Box>Item 3</Box>
    </Flex.Item>
  </Flex>
  <h4>column-reverse</h4>
  <Flex direction="column-reverse" spacing="16">
    <Flex.Item>
      <Box>Item 1</Box>
    </Flex.Item>
    <Flex.Item>
      <Box>Item 2</Box>
    </Flex.Item>
    <Flex.Item>
      <Box>Item 3</Box>
    </Flex.Item>
  </Flex>
</>;
```

### Flex Item Sizing

The `flex` CSS rule can be applied to Flex items with the `flex` prop.

```jsx
import { Flex } from '@atomikui/core';
import Box from '../../examples/Box';

<>
  <Flex spacing="16">
    <Flex.Item flex="50% 0 0">
      <Box />
    </Flex.Item>
    <Flex.Item flex="2">
      <Box />
    </Flex.Item>
    <Flex.Item flex="1">
      <Box />
    </Flex.Item>
  </Flex>
</>;
```

### Flex shrink

The `flex-shrink` CSS rule can be applied to Flex items with the `shrink` prop.

```jsx
import { Flex } from '@atomikui/core';
import Box from '../../examples/Box';

<>
  <Flex spacing="16" wrap={false}>
    <Flex.Item flex="0 0 400px" shrink="1">
      <Box />
    </Flex.Item>
    <Flex.Item flex="0 0 400px" shrink="2">
      <Box />
    </Flex.Item>
    <Flex.Item flex="0 0 400px">
      <Box />
    </Flex.Item>
  </Flex>
</>;
```

### Responsive Flex

The `breakpoint` prop will apply the `flex: column` style rule at screen sizes below the specified for `small`, `medium`, `large` and `extra-large` breakpoints.

```jsx
import { Flex } from '@atomikui/core';
import Box from '../../examples/Box';

<Flex breakpoint="medium" spacing="16">
  <Flex.Item flex="1">
    <Box />
  </Flex.Item>
  <Flex.Item flex="1">
    <Box />
  </Flex.Item>
  <Flex.Item flex="1">
    <Box />
  </Flex.Item>
  <Flex.Item flex="1">
    <Box />
  </Flex.Item>
</Flex>;
```

```jsx noeditor
import IframeProps from '../../../styleguide/components/IframeProps';

<IframeProps component="FlexItem" />;
```

### Flex
