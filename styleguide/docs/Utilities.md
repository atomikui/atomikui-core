### Display Classes

The following utility classes can be used to set the display proprty of an element.

```jsx noeditor
const displayOptions = [
  'inline',
  'inline-block',
  'block',
  'none',
  'grid',
  'flex',
  'inline-flex',
  'table',
  'table-header-group',
  'table-footer-group',
  'table-row-group',
  'table-row',
  'table-cell',
];

<>
  {displayOptions.map((option) => {
    return <div key={Math.random()}>.display-{option}</div>;
  })}
</>;
```
