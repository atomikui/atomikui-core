The Truncate component wraps text and truncates it at a word count specified by the `maxWords` prop.

### Defualt With "Show More/Less" Toggle

```jsx
import { Truncate, Link } from '@alaneicker/atomik-ui';

<p>
  <Truncate maxWords={50}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pretium
    aliquam iaculis. Ut sed dolor non turpis tincidunt varius. Fusce vel arcu
    dolor. Vivamus id rutrum lorem, non venenatis neque. Proin dictum sed sem ac
    congue. Aenean lacinia ipsum vel felis tincidunt, et semper augue auctor.
    Vivamus in condimentum erat. Nulla massa dui, accumsan et vulputate et,
    tempus a lorem. Maecenas euismod porta varius. Donec tempus non risus et
    venenatis. Quisque id cursus elit, eu mattis urna. Cras justo sapien,
    consequat ac lacus vel, egestas scelerisque sapien. Interdum et malesuada
    fames ac ante ipsum primis in faucibus. Donec vitae posuere lorem. Integer
    in urna ac mi posuere facilisis in ut justo.
  </Truncate>
</p>;
```

### Custom Ellipses

The `afterEllipses` prop allows for setting custom content after the ellipses.

```jsx
import { Truncate, Link } from '@alaneicker/atomik-ui';

<p>
  <Truncate
    maxWords={50}
    afterEllipses={<Link href="/path/to/article">Read more</Link>}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pretium
    aliquam iaculis. Ut sed dolor non turpis tincidunt varius. Fusce vel arcu
    dolor. Vivamus id rutrum lorem, non venenatis neque. Proin dictum sed sem ac
    congue. Aenean lacinia ipsum vel felis tincidunt, et semper augue auctor.
    Vivamus in condimentum erat. Nulla massa dui, accumsan et vulputate et,
    tempus a lorem. Maecenas euismod porta varius. Donec tempus non risus et
    venenatis. Quisque id cursus elit, eu mattis urna. Cras justo sapien,
    consequat ac lacus vel, egestas scelerisque sapien. Interdum et malesuada
    fames ac ante ipsum primis in faucibus. Donec vitae posuere lorem. Integer
    in urna ac mi posuere facilisis in ut justo.
  </Truncate>
</p>;
```

### Initially Expanded

The `expanded` prop can be used to make the content expanded by default.

```jsx
import { Truncate, Link } from '@alaneicker/atomik-ui';

<p>
  <Truncate maxWords={50} expanded>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pretium
    aliquam iaculis. Ut sed dolor non turpis tincidunt varius. Fusce vel arcu
    dolor. Vivamus id rutrum lorem, non venenatis neque. Proin dictum sed sem ac
    congue. Aenean lacinia ipsum vel felis tincidunt, et semper augue auctor.
    Vivamus in condimentum erat. Nulla massa dui, accumsan et vulputate et,
    tempus a lorem. Maecenas euismod porta varius. Donec tempus non risus et
    venenatis. Quisque id cursus elit, eu mattis urna. Cras justo sapien,
    consequat ac lacus vel, egestas scelerisque sapien. Interdum et malesuada
    fames ac ante ipsum primis in faucibus. Donec vitae posuere lorem. Integer
    in urna ac mi posuere facilisis in ut justo.
  </Truncate>
</p>;
```
