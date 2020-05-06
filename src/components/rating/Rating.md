### Basic Rating

The basic implementation displays a predefined rating as set by the `stars` prop. A rating can have no more than 5 stars.

```jsx
import { Rating } from '@alaneicker/react-component-library';

<Rating stars={3.5} />;
```

### Selectable Rating

The `selectable` prop allows for the selection of a rating. Use the `maxStars` prop to set the number of stars to display. E.g `maxStars={5}` would set a rating out of 5 stars. A rating can have no more than 5 stars.

```jsx
import { Rating } from '@alaneicker/react-component-library';

<Rating stars={2} maxStars={5} selectable />;
```
