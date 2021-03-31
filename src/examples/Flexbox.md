The `.flex` utility class can be used for laying out items in rows or columns. Items flex to fill additional space and shrink to fit into smaller spaces.

### Basic Usage

```jsx noeditor
import Box from './Box';

<div className="flex">
  <Box color="#01579b" />
  <Box color="#0277bd" />
  <Box color="#0288d1" />
  <Box color="#039be5" />
  <Box color="#03a9f4" />
</div>;
```

```html
<div class="flex" />
```

### Spacing

The `.flex--hr-*` modifier class can be used to add horizontal spacing between flex items.

The following spacing units are availabe: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42,
44, 46, 48 and 50

<br />

```jsx noeditor
import Box from './Box';

<>
  <div className="flex flex--hr-16">
    <Box color="#01579b" />
    <Box color="#0277bd" />
    <Box color="#0288d1" />
    <Box color="#039be5" />
    <Box color="#03a9f4" />
  </div>
</>;
```

```html
<div class="flex flex--hr-16" />
```

### Vertical Alignment

The `.flex--align-*` modifier classes can be used to vertically align items in a container.

```jsx noeditor
import Box from './Box';

<>
  <h4 className="margin-bottom-4">Top Alignment</h4>
  <div
    className="flex flex--align-top margin-bottom-8"
    style={{ background: '#eceff1', padding: '16px', height: '150px' }}
  >
    <Box color="#01579b" />
    <Box color="#0277bd" />
    <Box color="#0288d1" />
    <Box color="#039be5" />
    <Box color="#03a9f4" />
  </div>
  <h4 className="margin-bottom-4">Middle Alignment</h4>
  <div
    className="flex flex--align-middle margin-bottom-8"
    style={{ background: '#eceff1', padding: '16px', height: '150px' }}
  >
    <Box color="#01579b" />
    <Box color="#0277bd" />
    <Box color="#0288d1" />
    <Box color="#039be5" />
    <Box color="#03a9f4" />
  </div>
  <h4 className="margin-bottom-4">Bottom Alignment</h4>
  <div
    className="flex flex--align-bottom"
    style={{ background: '#eceff1', padding: '16px', height: '150px' }}
  >
    <Box color="#01579b" />
    <Box color="#0277bd" />
    <Box color="#0288d1" />
    <Box color="#039be5" />
    <Box color="#03a9f4" />
  </div>
</>;
```

```html
<div class="flex flex--align-top" />
<div class="flex flex--align-middle" />
<div class="flex flex--align-bottom" />
```

### Justification Alignment

The `.flex--justify-*` modifier classes can be used to horizontally align items in a container.

```jsx noeditor
import Box from './Box';

<>
  <h4 className="margin-bottom-4">Left Justify</h4>
  <div
    className="flex flex--justify-left margin-bottom-8"
    style={{ background: '#eceff1', padding: '16px' }}
  >
    <Box color="#01579b" />
    <Box color="#0277bd" />
    <Box color="#0288d1" />
    <Box color="#039be5" />
    <Box color="#03a9f4" />
  </div>
  <h4 className="margin-bottom-4">Center Justify</h4>
  <div
    className="flex flex--justify-center margin-bottom-8"
    style={{ background: '#eceff1', padding: '16px' }}
  >
    <Box color="#01579b" />
    <Box color="#0277bd" />
    <Box color="#0288d1" />
    <Box color="#039be5" />
    <Box color="#03a9f4" />
  </div>
  <h4 className="margin-bottom-4">Right Justify</h4>
  <div
    className="flex flex--justify-right margin-bottom-8"
    style={{ background: '#eceff1', padding: '16px' }}
  >
    <Box color="#01579b" />
    <Box color="#0277bd" />
    <Box color="#0288d1" />
    <Box color="#039be5" />
    <Box color="#03a9f4" />
  </div>
</>;
```

```html
<div class="flex flex--justify-left" />
<div class="flex flex--justify-center" />
<div class="flex flex--justify-right" />
```

### Flex child spacing

The `.flex--space-*` modifier classes can be used to define how the flex items are spaced in relation to each other.

```jsx noeditor
import Box from './Box';

<>
  <h4 className="margin-bottom-4">Space Betwwen</h4>
  <div
    className="flex flex--space-between margin-bottom-8"
    style={{ background: '#eceff1', padding: '16px' }}
  >
    <Box color="#01579b" />
    <Box color="#0277bd" />
    <Box color="#0288d1" />
    <Box color="#039be5" />
    <Box color="#03a9f4" />
  </div>
  <h4 className="margin-bottom-4">Space Around</h4>
  <div
    className="flex flex--space-around margin-bottom-8"
    style={{ background: '#eceff1', padding: '16px' }}
  >
    <Box color="#01579b" />
    <Box color="#0277bd" />
    <Box color="#0288d1" />
    <Box color="#039be5" />
    <Box color="#03a9f4" />
  </div>
</>;
```

```html
<div class="flex flex--space-between" />
<div class="flex flex--space-around" />
```

### Equal Columns

The `.flex--equalColumns` modifier can be used to define flex items of equal width.

```jsx noeditor
import Box from './Box';

<div className="flex flex--equalColumns">
  <Box color="#01579b" />
  <Box color="#0277bd" />
  <Box color="#0288d1" />
  <Box color="#039be5" />
  <Box color="#03a9f4" />
</div>;
```

```html
<div class="flex flex--equalColumns" />
```

### Responsive Flexbox

All `.flex` classes can be made responsive by appending `@small`, `@medium`, or `@large` to the end of the class name.

In the example below, the items will be displayed flex on screen sizes medium and up, but stacked on smaller screens.

<br />

```jsx noeditor
import Box from './Box';

<div class="flex@medium">
  <Box color="#01579b" />
  <Box color="#0277bd" />
  <Box color="#0288d1" />
  <Box color="#039be5" />
  <Box color="#03a9f4" />
</div>;
```

```html
<div class="flex@medium" />
```
