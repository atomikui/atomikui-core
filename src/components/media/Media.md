The Media component helps build repetitive layouts where some media is positioned alongside content.

```jsx
import { Media, Button } from '@alaneicker/atomik-ui';

<Media
  align="middle"
  header={<img src="apple.png" height="120" alt="product image" />}
  body={
    <>
      <h3>Red Delicious Apples</h3>
      <p>
        The Red Delicious is a clone of apple cultigen, now comprising more than
        50 cultivars, first recognized in Madison County, Iowa, in 1880.
      </p>
    </>
  }
  footer={
    <div className="text-align-center">
      <h4 className="margin-bottom-8">$1.49/LB</h4>
      <Button size="md" theme="primary">
        Add to Cart
      </Button>
    </div>
  }
/>;
```

### Media With Reversed Child Ordering

```jsx
import { Media, Button } from '@alaneicker/atomik-ui';

<Media
  reverse
  align="middle"
  header={<img src="apple.png" height="120" alt="product image" />}
  body={
    <>
      <h3>Red Delicious Apples</h3>
      <p>
        The Red Delicious is a clone of apple cultigen, now comprising more than
        50 cultivars, first recognized in Madison County, Iowa, in 1880.
      </p>
    </>
  }
  footer={
    <div className="text-align-center">
      <h4 className="margin-bottom-8">$1.49/LB</h4>
      <Button size="md" theme="primary">
        Add to Cart
      </Button>
    </div>
  }
/>;
```
