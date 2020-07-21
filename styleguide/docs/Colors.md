### Sass Color Variables & Classes

```jsx noeditor
import { Grid, Row, Col } from 'react-flexbox-grid';

const colors = [
  ['true-black', '#000000'],
  ['black', '#222222'],
  ['white', '#ffffff'],
  ['gray-000', '#f5f5f5'],
  ['gray-100', '#eeeeee'],
  ['gray-200', '#bbbbbb'],
  ['gray-300', '#999999'],
  ['gray-400', '#666666'],
  ['gray-450', '#444444'],
  ['gray-500', '#323232'],
  ['red-100', '#f44336'],
  ['red-200', '#d0191f'],
  ['orange-100', '#ff8400'],
  ['yellow-100', '#ffebaf'],
  ['yellow-200', '#faca1b'],
  ['yellow-300', '#fab01b'],
  ['green-100', '#bae60e'],
  ['green-200', '#4fa009'],
  ['green-300', '#307c01'],
  ['blue-000', '#dbeefc'],
  ['blue-100', '#88ccfc'],
  ['blue-200', '#027abf'],
  ['blue-300', '#01547f'],
  ['blue-400', '#2c607f'],
  ['blue-500', '#002d4a'],
  ['purple-100', '#d7a3ff'],
  ['purple-200', '#9003fc'],
  ['purple-300', '#4c0b7d'],
];

<Grid>
  <Row>
    {colors.map(([variable, hex]) => (
      <Col
        key={variable}
        md={6}
        style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}
      >
        <div
          style={Object.assign(
            {
              backgroundColor: hex,
              minWidth: '80px',
              height: '80px',
              borderRadius: '3px',
              marginRight: '16px',
            },
            variable === 'white' ? { border: '1px solid #ccc' } : null,
          )}
        />
        <div className="text-size-14 text-size-16@medium">
          <b>Sass Variable:</b> ${variable}
          <br />
          <b>Hexidecimal:</b> {hex}
          <br />
          <b>Bachground Color:</b> .bg-color-{variable}
          <br />
          <b>Text Color:</b> .text-color-{variable}
        </div>
      </Col>
    ))}
  </Row>
</Grid>;
```
