### SVG Flags

```jsx
import { Flag } from '@atomikui/core';
import { Grid, Row, Col } from 'react-flexbox-grid';

<Grid>
  <Row>
    {Flag.countries.map((country) => {
      return (
        <Col
          key={`svg-${country}`}
          xs={2}
          sm={2}
          md={2}
          lg={1}
          className="text-align-center padding-bottom-8 line-height-flush"
        >
          <Flag country={country} title={country} />
          <div>{country}</div>
        </Col>
      );
    })}
  </Row>
</Grid>;
```

### Unicode Flags

```jsx
import { Flag } from '@atomikui/core';
import { Grid, Row, Col } from 'react-flexbox-grid';

<Grid>
  <Row>
    {Flag.countries.map((country) => {
      return (
        <Col
          key={`unicode-${country}`}
          xs={1}
          md={1}
          className="text-align-center padding-bottom-8"
        >
          <Flag country={country} unicode />
          <div>{country}</div>
        </Col>
      );
    })}
  </Row>
</Grid>;
```
