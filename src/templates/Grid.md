Atomik UI recommends [React Flexbox Grid](http://roylee0704.github.io/react-flexbox-grid/) to handle layputs requiring a grid. It offers a variety of options and is inuitive for those with experience using grid systems.

```jsx
import { Grid, Row, Col } from 'react-flexbox-grid';

const styles = {
  box: {
    padding: '8px',
    background: '#027abf',
    color: 'white',
    textAlign: 'center',
  },
  col: { marginBottom: '16px' },
};

const Column = ({ children, ...props }) => {
  return (
    <Col style={styles.col} {...props}>
      <div style={styles.box}>{children}</div>
    </Col>
  );
};

<Grid>
  <Row>
    <Column md={6}>Six Column</Column>
    <Column md={6}>Six Column</Column>
  </Row>
  <Row>
    <Column md={4}>Four Column</Column>
    <Column md={4}>Four Column</Column>
    <Column md={4}>Four Column</Column>
  </Row>
  <Row>
    <Column md={3}>Three Column</Column>
    <Column md={3}>Three Column</Column>
    <Column md={3}>Three Column</Column>
    <Column md={3}>Three Column</Column>
  </Row>
  <Row>
    <Column md={2}>Two Column</Column>
    <Column md={2}>Two Column</Column>
    <Column md={2}>Two Column</Column>
    <Column md={2}>Two Column</Column>
    <Column md={2}>Two Column</Column>
    <Column md={2}>Two Column</Column>
  </Row>
</Grid>;
```
