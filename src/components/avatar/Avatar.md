### Image Avatars

An image avatar can be created by passing in a `src` and `alt` prop.

```jsx
import { Avatar } from '@alaneicker/react-component-library';

<Avatar
  src="https://avatars2.githubusercontent.com/u/56617615?s=460&u=954e132d7392963051ef1882aaa6d788fb6eb373&v=4"
  alt="Alan Smith"
/>;
```

### Avatar With a Label

A label can be added to an avatar with `label` prop.

By default the label is positioned to the right of the avatar. Use the `flipLabel` prop to align it to the left.

```jsx
import { Avatar } from '@alaneicker/react-component-library';

<>
  <Avatar
    src="https://avatars2.githubusercontent.com/u/56617615?s=460&u=954e132d7392963051ef1882aaa6d788fb6eb373&v=4"
    alt="Some alt text"
    label="Right Aligned Label"
  />
  <Avatar
    src="https://avatars2.githubusercontent.com/u/56617615?s=460&u=954e132d7392963051ef1882aaa6d788fb6eb373&v=4"
    alt="Some alt text"
    label="Left Aligned Label"
    flipLabel
  />
</>;
```

### Letter Avatars

A letter avatar can be created simply by passing in one or two initials as children.

```jsx
import { Avatar } from '@alaneicker/react-component-library';

<Avatar variant="medium-blue">AE</Avatar>;
```

### Icon Avatars

Add an SVG as a child to create an icon avatar.

```jsx
import { Avatar } from '@alaneicker/react-component-library';

<Avatar variant="red">
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

### Avatars Color Themes

There are many color themes to choose from. simplay pass in a `variant` prop with the color of your choice.

```jsx
import { Avatar } from '@alaneicker/react-component-library';

<>
  <Avatar>AE</Avatar>
  <Avatar variant="red">AE</Avatar>
  <Avatar variant="orange">P</Avatar>
  <Avatar variant="yellow">MS</Avatar>
  <Avatar variant="green">AJ</Avatar>
  <Avatar variant="light-blue">MA</Avatar>
  <Avatar variant="medium-blue">T</Avatar>
  <Avatar variant="dark-blue">S</Avatar>
  <Avatar variant="light-gray">SM</Avatar>
  <Avatar variant="medium-gray">JD</Avatar>
  <Avatar variant="dark-gray">M</Avatar>
  <Avatar variant="black">O</Avatar>
</>;
```
