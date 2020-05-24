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
  { hex: '#222', name: 'black' },
  { hex: 'white', name: 'white' },
  { hex: '#999', name: 'gray' },
  { hex: '#f44336', name: 'red' },
  { hex: '#ff8400', name: 'orange' },
  { hex: '#4fa009', name: 'green' },
  { hex: '#027abf', name: 'blue' },
  { hex: '#2c607f', name: 'navy' },
];

<>
  {colors.map(({ name, hex }) => {
    return (
      <div key={name}>
        <span
          style={{
            color: hex,
            ...(hex === 'white' && { background: '#333', padding: '2px' }),
          }}
        >
          .text-color-{name}
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
