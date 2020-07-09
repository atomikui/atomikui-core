### Text Alignment Classes

```jsx
const styles = {
  box: {
    background: '#eee',
    padding: '8px',
    marginBottom: '16px',
  },
};

<>
  <div className="text-align-left" style={styles.box}>
    .text-align-left
  </div>
  <div className="text-align-center" style={styles.box}>
    .text-align-center
  </div>
  <div className="text-align-right" style={styles.box}>
    .text-align-right
  </div>
</>;
```

All text alignment classes have responsive modifiers that can be used to change the alignment at specific breakpoints. Breakpoint modifiers include `@small`, `@medium` and `@large`;

```jsx
<p className="text-align-left text-align-center@medium">
  This text is left aligned on small devices and center aligned on medium size
  and larger devices
</p>
```

```html
<p className="text-align-left text-align-center@medium">
  This text is left aligned on small devices and center aligned on medium size
  and larger devices
</p>
```

### Text Color Classes

```jsx
const colors = [
  ['text-color-true-black', '#000000'],
  ['text-color-black', '#222222'],
  ['text-color-white', '#ffffff'],
  ['text-color-gray-000', '#f5f5f5'],
  ['text-color-gray-100', '#eeeeee'],
  ['text-color-gray-200', '#bbbbbb'],
  ['text-color-gray-300', '#999999'],
  ['text-color-gray-400', '#666666'],
  ['text-color-gray-450', '#444444'],
  ['text-color-gray-500', '#323232'],
  ['text-color-red-100', '#f44336'],
  ['text-color-red-200', '#d0191f'],
  ['text-color-orange-100', '#ff8400'],
  ['text-color-yellow-100', '#ffebaf'],
  ['text-color-yellow-200', '#faca1b'],
  ['text-color-yellow-300', '#fab01b'],
  ['text-color-green-100', '#bae60e'],
  ['text-color-green-200', '#4fa009'],
  ['text-color-green-300', '#307c01'],
  ['text-color-blue-000', '#dbeefc'],
  ['text-color-blue-100', '#88ccfc'],
  ['text-color-blue-200', '#027abf'],
  ['text-color-blue-300', '#01547f'],
  ['text-color-blue-400', '#2c607f'],
  ['text-color-blue-500', '#002d4a'],
  ['text-color-purple-100', '#d7a3ff'],
  ['text-color-purple-200', '#9003fc'],
  ['text-color-purple-300', '#4c0b7d'],
];

<>
  {colors.map(([className, hex]) => {
    return (
      <div key={className}>
        <span
          style={{
            color: hex,
            ...(className.match(
              /(white|gray-000|gray-100|yellow-100|blue-000)/,
            ) && {
              background: '#333',
              padding: '2px',
            }),
          }}
        >
          .{className}
        </span>
      </div>
    );
  })}
</>;
```

### Text Size Classes

```jsx
const textSizes = [12, 14, 16, 20, 24, 30, 36, 42, 48];

textSizes.map((size) => {
  return (
    <div key={size} style={{ fontSize: `${size}px` }}>
      .text-size-{size}
    </div>
  );
});
```

All text size classes have responsive modifiers that can be used to change the font size at specific breakpoints. Breakpoint modifiers include `@small`, `@medium` and `@large`;

```jsx
<p className="text-size-24 text-size-48@medium">
  This text is 24px on small devices and 40px on medium size and larger devices
</p>
```

```html
<p className="text-size-24 text-size-48@medium">
  This text is 24px on small devices and 40px on medium size and larger devices
</p>
```

### Text Weight Classes

```jsx
const fontWeights = [
  { weight: 300, name: 'Light' },
  { weight: 400, name: 'Normal' },
  { weight: 500, name: 'Medium' },
  { weight: 600, name: 'Semibold' },
  { weight: 700, name: 'Bold' },
];

fontWeights.map(({ weight, name }) => {
  return (
    <div key={weight} style={{ fontWeight: weight }}>
      .text-weight-{name}
    </div>
  );
});
```
