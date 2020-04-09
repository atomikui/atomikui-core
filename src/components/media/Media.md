```jsx
import { Media, Button } from '@alaneicker/react-component-library';

<Media
  align="middle"
  header={
    <img
      src="https://www.pikpng.com/pngl/b/118-1189047_red-apple-fruits-png-transparent-images-clipart-icons.png"
      height="120"
      alt="profile image"
    />
  }
  body={
    <>
      <h3>Red Delicious Apples</h3>
      <p>
        The Red Delicious is a clone of apple cultigen, now comprising more than
        50 cultivars, first recognized in Madison County, Iowa, in 1880
      </p>
    </>
  }
  footer={
    <div className="text-align-center">
      <h4 className="margin-bottom-8">$1.49/LB</h4>
      <Button size="md" variant="primary">
        Add to Cart
      </Button>
    </div>
  }
/>;
```
