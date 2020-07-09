### Background Color Classes

```jsx
const colors = [
  ['bg-color-true-black', '#000000'],
  ['bg-color-black', '#222222'],
  ['bg-color-white', '#ffffff'],
  ['bg-color-gray-000', '#f5f5f5'],
  ['bg-color-gray-100', '#eeeeee'],
  ['bg-color-gray-200', '#bbbbbb'],
  ['bg-color-gray-300', '#999999'],
  ['bg-color-gray-400', '#666666'],
  ['bg-color-gray-450', '#444444'],
  ['bg-color-gray-500', '#323232'],
  ['bg-color-red-100', '#f44336'],
  ['bg-color-red-200', '#d0191f'],
  ['bg-color-orange-100', '#ff8400'],
  ['bg-color-yellow-100', '#ffebaf'],
  ['bg-color-yellow-200', '#faca1b'],
  ['bg-color-yellow-300', '#fab01b'],
  ['bg-color-green-100', '#bae60e'],
  ['bg-color-green-200', '#4fa009'],
  ['bg-color-green-300', '#307c01'],
  ['bg-color-blue-000', '#dbeefc'],
  ['bg-color-blue-100', '#88ccfc'],
  ['bg-color-blue-200', '#027abf'],
  ['bg-color-blue-300', '#01547f'],
  ['bg-color-blue-400', '#2c607f'],
  ['bg-color-blue-500', '#002d4a'],
  ['bg-color-purple-100', '#d7a3ff'],
  ['bg-color-purple-200', '#9003fc'],
  ['bg-color-purple-300', '#4c0b7d'],
];

<div>
  {colors.map(([className, hex]) => (
    <div
      key={className}
      style={{
        minWidth: '50%',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '16px',
      }}
    >
      <div
        className={className}
        style={Object.assign(
          {
            width: '42px',
            height: '42px',
            borderRadius: '3px',
            marginRight: '16px',
          },
          className === 'bg-color-white' ? { border: '1px solid #ccc' } : null,
        )}
      ></div>
      <div>
        .{className} / {hex}
      </div>
    </div>
  ))}
</div>;
```
