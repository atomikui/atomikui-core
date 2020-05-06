### Basic Rating

The basic implementation displays a predefined rating as set by the `stars` prop. A rating can have no more than 5 stars.

```jsx
import { Rating } from '@alaneicker/react-component-library';

<Rating stars={3.5} />;
```

### Selectable Rating

The `onSelect` prop makes each star selectable and returns a callback with the rating score. Use the `maxStars` prop to set the number of stars to display. E.g `maxStars={5}` would set a rating out of 5 stars. A rating can have no more than 5 stars.

```jsx
import { Rating } from '@alaneicker/react-component-library';

<Rating stars={2} maxStars={5} onSelect={(rating) => console.log(rating)} />;
```

### Rating Sizes

```jsx
import { Rating } from '@alaneicker/react-component-library';

<>
  <Rating stars={3.5} size="xs" />
  <Rating stars={3.5} size="sm" />
  <Rating stars={3.5} />
  <Rating stars={3.5} size="lg" />
  <Rating stars={3.5} size="2x" />
  <Rating stars={3.5} size="3x" />
  <Rating stars={3.5} size="4x" />
</>;
```
