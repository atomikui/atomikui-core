Vertical and horizontal rhythm can be achieved with margin and padding utility classes

### Margin and Padding Utilities

```jsx
import { Grid, Row, Col } from 'react-flexbox-grid';

const styles = {
  divider: {
    borderTop: '1px solid #ddd',
    margin: '20px 0 32px',
  },
  box: {
    padding: '12px',
    background: '#027abf',
    color: 'white',
    textAlign: 'center',
    fontSize: '15px',
  },
  boxWrapper: {
    background: '#ff8400',
    display: 'flex',
    flexDirection: 'column',
  },
  boxTransparent: {
    background: 'transparent',
    color: 'inherit',
  },
  col: { marginBottom: '16px' },
};

const units = [
  2,
  4,
  6,
  8,
  10,
  12,
  14,
  16,
  18,
  20,
  22,
  24,
  26,
  28,
  30,
  32,
  34,
  36,
  38,
  40,
  42,
  44,
  46,
  48,
  50,
];

const Column = ({ children, className, transparent, ...props }) => {
  return (
    <Col style={styles.col} {...props}>
      <div style={{ ...(!transparent && styles.boxWrapper) }}>
        <div
          className={className}
          style={{ ...styles.box, ...(transparent && styles.boxTransparent) }}
        >
          {children}
        </div>
      </div>
    </Col>
  );
};

<Grid fluid>
  {units.map((unit) => {
    return (
      <Row>
        <Column md={5} className={`margin-top-${unit}`}>
          .margin-top-{unit} / .padding-top-{unit}
        </Column>
        <Column md={2} transparent>
          {unit}px
        </Column>
        <Column md={5} className={`margin-bottom-${unit}`}>
          .margin-bottom-{unit} / .padding-bottom-{unit}
        </Column>
      </Row>
    );
  })}
  <div style={styles.divider}></div>
  {units.map((unit) => {
    return (
      <Row>
        <Column md={5} className={`margin-right-${unit}`}>
          .margin-right-{unit} / .padding-right-{unit}
        </Column>
        <Column md={2} transparent>
          {unit}px
        </Column>
        <Column md={5} className={`margin-left-${unit}`}>
          .margin-left-{unit} / .padding-left-{unit}
        </Column>
      </Row>
    );
  })}
</Grid>;
```
