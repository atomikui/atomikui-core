A menu displays grouped navigation actions

### Vertical Menu

```jsx
import { Menu, Link } from '@alaneicker/react-component-library';

<Menu>
  <Link href="/home">Home</Link>
  <Link href="/about">About</Link>
  <Link href="/services">Services</Link>
  <Link href="/blocg">Blog</Link>
  <Link href="/contact">Contact</Link>
</Menu>;
```

### Inline Menus

```jsx
import { Menu, Link } from '@alaneicker/react-component-library';

<>
  <Menu inline>
    <Link href="/home">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/services">Services</Link>
    <Link href="/blocg">Blog</Link>
    <Link href="/contact">Contact</Link>
  </Menu>
  <Menu align="center" inline>
    <Link href="/home">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/services">Services</Link>
    <Link href="/blocg">Blog</Link>
    <Link href="/contact">Contact</Link>
  </Menu>
  <Menu align="right" inline>
    <Link href="/home">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/services">Services</Link>
    <Link href="/blocg">Blog</Link>
    <Link href="/contact">Contact</Link>
  </Menu>
</>;
```
