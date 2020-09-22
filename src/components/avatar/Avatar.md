An avatar is a graphical representation of something.

### Image Avatars

An image avatar can be created by passing in a `src` and `alt` prop.

```jsx
import { Avatar } from '@alaneicker/atomik-ui';

<Avatar src="bob.png" alt="Bob Smith" />;
```

### Avatar With a Label

A label can be added to an avatar with `label` prop.

By default the label is positioned to the right of the avatar. Use the `flipLabel` prop to align it to the left.

```jsx
import { Avatar } from '@alaneicker/atomik-ui';

<>
  <Avatar src="bob.png" alt="Some alt text" label="Right Aligned Label" />
  <Avatar
    src="mary.png"
    alt="Some alt text"
    label="Left Aligned Label"
    flipLabel
  />
</>;
```

### Letter Avatars

A letter avatar can be created simply by passing in one or two initials as children.

```jsx
import { Avatar } from '@alaneicker/atomik-ui';

<Avatar theme="red">AE</Avatar>;
```

### Icon Avatars

Add an SVG as a child to create an icon avatar.

```jsx
import { Avatar } from '@alaneicker/atomik-ui';

<Avatar theme="red">
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 512 512"
    xmlSpace="preserve"
    width="24"
  >
    <title>Map</title>
    <path
      d="M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"
      fill="white"
    />
  </svg>
</Avatar>;
```

### Color Themes

There are many color themes to choose from. simplay pass in a `theme` prop with the color of your choice.

#### Dark

```jsx
import { Avatar } from '@alaneicker/atomik-ui';

<>
  <Avatar theme="red">AE</Avatar>
  <Avatar theme="pink">T</Avatar>
  <Avatar theme="purple">M</Avatar>
  <Avatar theme="deep-purple">LP</Avatar>
  <Avatar theme="indigo">MJ</Avatar>
  <Avatar theme="blue">JJ</Avatar>
  <Avatar theme="sky-blue">A</Avatar>
  <Avatar theme="cyan">O</Avatar>
  <Avatar theme="teal">LF</Avatar>
  <Avatar theme="green">NE</Avatar>
  <Avatar theme="light-green">Z</Avatar>
  <Avatar theme="lime">WG</Avatar>
  <Avatar theme="yellow">S</Avatar>
  <Avatar theme="light-orange">TC</Avatar>
  <Avatar theme="orange">C</Avatar>
  <Avatar theme="deep-orange">N</Avatar>
  <Avatar theme="amber">AJ</Avatar>
  <Avatar theme="brown">WY</Avatar>
  <Avatar theme="gray">TC</Avatar>
  <Avatar theme="blue-gray">B</Avatar>
  <Avatar theme="black">BD</Avatar>
</>;
```

#### Light

```jsx
import { Avatar } from '@alaneicker/atomik-ui';

<>
  <Avatar theme="red" themeVariant="light">
    AE
  </Avatar>
  <Avatar theme="pink" themeVariant="light">
    T
  </Avatar>
  <Avatar theme="purple" themeVariant="light">
    M
  </Avatar>
  <Avatar theme="deep-purple" themeVariant="light">
    LP
  </Avatar>
  <Avatar theme="indigo" themeVariant="light">
    MJ
  </Avatar>
  <Avatar theme="blue" themeVariant="light">
    JJ
  </Avatar>
  <Avatar theme="sky-blue" themeVariant="light">
    A
  </Avatar>
  <Avatar theme="cyan" themeVariant="light">
    O
  </Avatar>
  <Avatar theme="teal" themeVariant="light">
    LF
  </Avatar>
  <Avatar theme="green" themeVariant="light">
    NE
  </Avatar>
  <Avatar theme="light-green" themeVariant="light">
    Z
  </Avatar>
  <Avatar theme="lime" themeVariant="light">
    WG
  </Avatar>
  <Avatar theme="yellow" themeVariant="light">
    S
  </Avatar>
  <Avatar theme="light-orange" themeVariant="light">
    TC
  </Avatar>
  <Avatar theme="orange" themeVariant="light">
    C
  </Avatar>
  <Avatar theme="deep-orange" themeVariant="light">
    N
  </Avatar>
  <Avatar theme="amber" themeVariant="light">
    AJ
  </Avatar>
  <Avatar theme="brown" themeVariant="light">
    WY
  </Avatar>
  <Avatar theme="gray" themeVariant="light">
    TC
  </Avatar>
  <Avatar theme="blue-gray" themeVariant="light">
    B
  </Avatar>
  <Avatar theme="white" themeVariant="light">
    BD
  </Avatar>
</>;
```

### Avatar shapes

Avatar shapes include `bevel` and `square`. The default shape is round.

```jsx
import { Avatar } from '@alaneicker/atomik-ui';

<>
  <Avatar src="mary.png" alt="Mary" />
  <Avatar src="steve.png" shape="square" alt="Steve" />
  <Avatar src="bob.png" shape="bevel" alt="Bob" />
</>;
```

### Avatar Sizes

The `size` prop can be used to change the size of the avatar

```jsx
import { Avatar } from '@alaneicker/atomik-ui';

<>
  <Avatar src="mary.png" alt="Mary" size="sm" />
  <Avatar src="steve.png" alt="Steve" />
  <Avatar src="bob.png" alt="Bob" size="lg" />
</>;
```
