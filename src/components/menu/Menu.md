A menu displays grouped navigation actions

### Vertical Menu

```jsx
import { Menu, MenuItem, Link } from '@alaneicker/react-component-library';

<Menu>
  <MenuItem>
    <Link href="/home">Home</Link>
  </MenuItem>
  <MenuItem>
    <Link href="/about">About</Link>
  </MenuItem>
  <MenuItem>
    <Link href="/services">Services</Link>
  </MenuItem>
  <MenuItem>
    <Link href="/blocg">Blog</Link>
  </MenuItem>
  <MenuItem>
    <Link href="/contact">Contact</Link>
  </MenuItem>
</Menu>;
```

### Inline Menus

```jsx
import { Menu, MenuItem, Link } from '@alaneicker/react-component-library';

<>
  <Menu inline>
    <MenuItem>
      <Link href="/home">Home</Link>
    </MenuItem>
    <MenuItem>
      <Link href="/about">About</Link>
    </MenuItem>
    <MenuItem>
      <Link href="/services">Services</Link>
    </MenuItem>
    <MenuItem>
      <Link href="/blocg">Blog</Link>
    </MenuItem>
    <MenuItem>
      <Link href="/contact">Contact</Link>
    </MenuItem>
  </Menu>
  <Menu align="center" inline>
    <MenuItem>
      <Link href="/home">Home</Link>
    </MenuItem>
    <MenuItem>
      <Link href="/about">About</Link>
    </MenuItem>
    <MenuItem>
      <Link href="/services">Services</Link>
    </MenuItem>
    <MenuItem>
      <Link href="/blocg">Blog</Link>
    </MenuItem>
    <MenuItem>
      <Link href="/contact">Contact</Link>
    </MenuItem>
  </Menu>
  <Menu align="right" inline>
    <MenuItem>
      <Link href="/home">Home</Link>
    </MenuItem>
    <MenuItem>
      <Link href="/about">About</Link>
    </MenuItem>
    <MenuItem>
      <Link href="/services">Services</Link>
    </MenuItem>
    <MenuItem>
      <Link href="/blocg">Blog</Link>
    </MenuItem>
    <MenuItem>
      <Link href="/contact">Contact</Link>
    </MenuItem>
  </Menu>
  <Menu inlineStretch>
    <MenuItem>
      <Link href="/home">Home</Link>
    </MenuItem>
    <MenuItem>
      <Link href="/about">About</Link>
    </MenuItem>
    <MenuItem>
      <Link href="/services">Services</Link>
    </MenuItem>
    <MenuItem>
      <Link href="/blocg">Blog</Link>
    </MenuItem>
    <MenuItem>
      <Link href="/contact">Contact</Link>
    </MenuItem>
  </Menu>
</>;
```

### Menus with Dividers

```jsx
import { Menu, MenuItem, Link } from '@alaneicker/react-component-library';

<>
  <Menu dividers>
    <MenuItem>
      <Link href="/home">Home</Link>
    </MenuItem>
    <MenuItem>
      <Link href="/about">About</Link>
    </MenuItem>
    <MenuItem>
      <Link href="/services">Services</Link>
    </MenuItem>
    <MenuItem>
      <Link href="/blocg">Blog</Link>
    </MenuItem>
    <MenuItem>
      <Link href="/contact">Contact</Link>
    </MenuItem>
  </Menu>
  <Menu inline dividers>
    <MenuItem>
      <Link href="/home">Home</Link>
    </MenuItem>
    <MenuItem>
      <Link href="/about">About</Link>
    </MenuItem>
    <MenuItem>
      <Link href="/services">Services</Link>
    </MenuItem>
    <MenuItem>
      <Link href="/blocg">Blog</Link>
    </MenuItem>
    <MenuItem>
      <Link href="/contact">Contact</Link>
    </MenuItem>
  </Menu>
  <Menu inlineStretch dividers>
    <MenuItem>
      <Link href="/home">Home</Link>
    </MenuItem>
    <MenuItem>
      <Link href="/about">About</Link>
    </MenuItem>
    <MenuItem>
      <Link href="/services">Services</Link>
    </MenuItem>
    <MenuItem>
      <Link href="/blocg">Blog</Link>
    </MenuItem>
    <MenuItem>
      <Link href="/contact">Contact</Link>
    </MenuItem>
  </Menu>
</>;
```
