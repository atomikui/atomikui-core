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
  ['text-color-red-50', '#ffebee'],
  ['text-color-red-100', '#ffcdd2'],
  ['text-color-red-200', '#ef9a9a'],
  ['text-color-red-300', '#e57373'],
  ['text-color-red-400', '#ef5350'],
  ['text-color-red-500', '#f44336'],
  ['text-color-red-600', '#e53935'],
  ['text-color-red-700', '#d32f2f'],
  ['text-color-red-800', '#c62828'],
  ['text-color-red-900', '#b71c1c'],
  ['text-color-pink-50', '#fce4ec'],
  ['text-color-pink-100', '#f8bbd0'],
  ['text-color-pink-200', '#f48fb1'],
  ['text-color-pink-300', '#f06292'],
  ['text-color-pink-400', '#ec407a'],
  ['text-color-pink-500', '#e91e63'],
  ['text-color-pink-600', '#d81b60'],
  ['text-color-pink-700', '#c2185b'],
  ['text-color-pink-800', '#ad1457'],
  ['text-color-pink-900', '#880e4f'],
  ['text-color-purple-50', '#f3e5f5'],
  ['text-color-purple-100', '#e1bee7'],
  ['text-color-purple-200', '#ce93d8'],
  ['text-color-purple-300', '#ba68c8'],
  ['text-color-purple-400', '#ab47bc'],
  ['text-color-purple-500', '#9c27b0'],
  ['text-color-purple-600', '#8e24aa'],
  ['text-color-purple-700', '#7b1fa2'],
  ['text-color-purple-800', '#6a1b9a'],
  ['text-color-purple-900', '#4a148c'],
  ['text-color-deep-purple-50', '#ede7f6'],
  ['text-color-deep-purple-100', '#d1c4e9'],
  ['text-color-deep-purple-200', '#b39ddb'],
  ['text-color-deep-purple-300', '#9575cd'],
  ['text-color-deep-purple-400', '#7e57c2'],
  ['text-color-deep-purple-500', '#673ab7'],
  ['text-color-deep-purple-600', '#5e35b1'],
  ['text-color-deep-purple-700', '#512da8'],
  ['text-color-deep-purple-800', '#4527a0'],
  ['text-color-deep-purple-900', '#311b92'],
  ['text-color-indigo-50', '#e8eaf6'],
  ['text-color-indigo-100', '#c5cae9'],
  ['text-color-indigo-200', '#9fa8da'],
  ['text-color-indigo-300', '#7986cb'],
  ['text-color-indigo-400', '#5c6bc0'],
  ['text-color-indigo-500', '#3f51b5'],
  ['text-color-indigo-600', '#3949ab'],
  ['text-color-indigo-700', '#303f9f'],
  ['text-color-indigo-800', '#283593'],
  ['text-color-indigo-900', '#1a237e'],
  ['text-color-blue-50', '#e3f2fd'],
  ['text-color-blue-100', '#bbdefb'],
  ['text-color-blue-200', '#90caf9'],
  ['text-color-blue-300', '#64b5f6'],
  ['text-color-blue-400', '#42a5f5'],
  ['text-color-blue-500', '#2196f3'],
  ['text-color-blue-600', '#1e88e5'],
  ['text-color-blue-700', '#1976d2'],
  ['text-color-blue-800', '#1565c0'],
  ['text-color-blue-900', '#0d47a1'],
  ['text-color-sky-blue-50', '#e1f5fe'],
  ['text-color-sky-blue-100', '#b3e5fc'],
  ['text-color-sky-blue-200', '#81d4fa'],
  ['text-color-sky-blue-300', '#4fc3f7'],
  ['text-color-sky-blue-400', '#29b6f6'],
  ['text-color-sky-blue-500', '#03a9f4'],
  ['text-color-sky-blue-600', '#039be5'],
  ['text-color-sky-blue-700', '#0288d1'],
  ['text-color-sky-blue-800', '#0277bd'],
  ['text-color-sky-blue-900', '#01579b'],
  ['text-color-cyan-50', '#e0f7fa'],
  ['text-color-cyan-100', '#b2ebf2'],
  ['text-color-cyan-200', '#80deea'],
  ['text-color-cyan-300', '#4dd0e1'],
  ['text-color-cyan-400', '#26c6da'],
  ['text-color-cyan-500', '#00bcd4'],
  ['text-color-cyan-600', '#00acc1'],
  ['text-color-cyan-700', '#0097a7'],
  ['text-color-cyan-800', '#00838f'],
  ['text-color-cyan-900', '#006064'],
  ['text-color-teal-50', '#e0f2f1'],
  ['text-color-teal-100', '#b2dfdb'],
  ['text-color-teal-200', '#80cbc4'],
  ['text-color-teal-300', '#4db6ac'],
  ['text-color-teal-400', '#26a69a'],
  ['text-color-teal-500', '#009688'],
  ['text-color-teal-600', '#00897b'],
  ['text-color-teal-700', '#00796b'],
  ['text-color-teal-800', '#00695c'],
  ['text-color-teal-900', '#004d40'],
  ['text-color-green-50', '#e8f5e9'],
  ['text-color-green-100', '#c8e6c9'],
  ['text-color-green-200', '#a5d6a7'],
  ['text-color-green-300', '#81c784'],
  ['text-color-green-400', '#66bb6a'],
  ['text-color-green-500', '#4caf50'],
  ['text-color-green-600', '#43a047'],
  ['text-color-green-700', '#388e3c'],
  ['text-color-green-800', '#2e7d32'],
  ['text-color-green-900', '#1b5e20'],
  ['text-color-light-green-50', '#f1f8e9'],
  ['text-color-light-green-100', '#dcedc8'],
  ['text-color-light-green-200', '#c5e1a5'],
  ['text-color-light-green-300', '#aed581'],
  ['text-color-light-green-400', '#9ccc65'],
  ['text-color-light-green-500', '#8bc34a'],
  ['text-color-light-green-600', '#7cb342'],
  ['text-color-light-green-700', '#689f38'],
  ['text-color-light-green-800', '#558b2f'],
  ['text-color-light-green-900', '#33691e'],
  ['text-color-lime-50', '#f9fbe7'],
  ['text-color-lime-100', '#f0f4c3'],
  ['text-color-lime-200', '#e6ee9c'],
  ['text-color-lime-300', '#dce775'],
  ['text-color-lime-400', '#d4e157'],
  ['text-color-lime-500', '#cddc39'],
  ['text-color-lime-600', '#c0ca33'],
  ['text-color-lime-700', '#afb42b'],
  ['text-color-lime-800', '#9e9d24'],
  ['text-color-lime-900', '#827717'],
  ['text-color-yellow-50', '#fffde7'],
  ['text-color-yellow-100', '#fff9c4'],
  ['text-color-yellow-200', '#fff59d'],
  ['text-color-yellow-300', '#fff176'],
  ['text-color-yellow-400', '#ffee58'],
  ['text-color-yellow-500', '#ffeb3b'],
  ['text-color-yellow-600', '#fdd835'],
  ['text-color-yellow-700', '#fbc02d'],
  ['text-color-yellow-800', '#f9a825'],
  ['text-color-yellow-900', '#f57f17'],
  ['text-color-amber-50', '#fff8e1'],
  ['text-color-amber-100', '#ffecb3'],
  ['text-color-amber-200', '#ffe082'],
  ['text-color-amber-300', '#ffd54f'],
  ['text-color-amber-400', '#ffca28'],
  ['text-color-amber-500', '#ffc107'],
  ['text-color-amber-600', '#ffb300'],
  ['text-color-amber-700', '#ffa000'],
  ['text-color-amber-800', '#ff8f00'],
  ['text-color-amber-900', '#ff6f00'],
  ['text-color-orange-50', '#fff3e0'],
  ['text-color-orange-100', '#ffe0b2'],
  ['text-color-orange-200', '#ffcc80'],
  ['text-color-orange-300', '#ffb74d'],
  ['text-color-orange-400', '#ffa726'],
  ['text-color-orange-500', '#ff9800'],
  ['text-color-orange-600', '#fb8c00'],
  ['text-color-orange-700', '#f57c00'],
  ['text-color-orange-800', '#ef6c00'],
  ['text-color-orange-900', '#e65100'],
  ['text-color-deep-orange-50', '#fbe9e7'],
  ['text-color-deep-orange-100', '#ffccbc'],
  ['text-color-deep-orange-200', '#ffab91'],
  ['text-color-deep-orange-300', '#ff8a65'],
  ['text-color-deep-orange-400', '#ff7043'],
  ['text-color-deep-orange-500', '#ff5722'],
  ['text-color-deep-orange-600', '#f4511e'],
  ['text-color-deep-orange-700', '#e64a19'],
  ['text-color-deep-orange-800', '#d84315'],
  ['text-color-deep-orange-900', '#bf360c'],
  ['text-color-brown-50', '#efebe9'],
  ['text-color-brown-100', '#d7ccc8'],
  ['text-color-brown-200', '#bcaaa4'],
  ['text-color-brown-300', '#a1887f'],
  ['text-color-brown-400', '#8d6e63'],
  ['text-color-brown-500', '#795548'],
  ['text-color-brown-600', '#6d4c41'],
  ['text-color-brown-700', '#5d4037'],
  ['text-color-brown-800', '#4e342e'],
  ['text-color-brown-900', '#3e2723'],
  ['text-color-gray-50', '#fafafa'],
  ['text-color-gray-100', '#f5f5f5'],
  ['text-color-gray-200', '#eeeeee'],
  ['text-color-gray-300', '#e0e0e0'],
  ['text-color-gray-400', '#bdbdbd'],
  ['text-color-gray-500', '#9e9e9e'],
  ['text-color-gray-600', '#757575'],
  ['text-color-gray-700', '#616161'],
  ['text-color-gray-800', '#424242'],
  ['text-color-gray-900', '#212121'],
  ['text-color-blue-gray-50', '#eceff1'],
  ['text-color-blue-gray-100', '#cfd8dc'],
  ['text-color-blue-gray-200', '#b0bec5'],
  ['text-color-blue-gray-300', '#90a4ae'],
  ['text-color-blue-gray-400', '#78909c'],
  ['text-color-blue-gray-500', '#607d8b'],
  ['text-color-blue-gray-600', '#546e7a'],
  ['text-color-blue-gray-700', '#455a64'],
  ['text-color-blue-gray-800', '#37474f'],
  ['text-color-blue-gray-900', '#263238'],
  ['text-color-white', '#ffffff'],
];

<>
  {colors.map(([className, hex]) => {
    return (
      <div key={className}>
        <span className={className}>.{className}</span>
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

<br />

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
