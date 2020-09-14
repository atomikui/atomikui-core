### SVG Flags

```jsx
import { Flag } from '@alaneicker/atomik-ui';
import { Grid, Row, Col } from 'react-flexbox-grid';

<Grid>
  <Row>
    {Flag.countries.map((country) => {
      return (
        <Col
          key={`svg-${country}`}
          xs={3}
          sm={3}
          md={2}
          lg={1}
          className="text-align-center"
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
import { Flag } from '@alaneicker/atomik-ui';
import { Grid, Row, Col } from 'react-flexbox-grid';

<Grid>
  <Row>
    {Flag.countries.map((country) => {
      return (
        <Col
          key={`unicode-${country}`}
          xs={1}
          md={1}
          className="text-align-center"
        >
          <Flag country={country} unicode />
          <div>{country}</div>
        </Col>
      );
    })}
  </Row>
</Grid>;
```
