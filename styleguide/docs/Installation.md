Adding Atomik UI to your project is simple.

### Setup

#### 1. Install the component library

Install the core Atomik UI module as a production dependency.
<br /><br />

```html
npm install --save @alaneicker/atomik-ui
```

#### 2. Import the Component library CSS

Import the Atomik UI library core CSS.
<br /><br />

```html
import '@alaneicker/atomik-ui/dist/styles/main.min.css';
```

#### 3. Install and Import the Sass Utilities Package (Optional)

The Sass Utilities package contains utility classes, functions, mixins, variables, and colors that can be used in you project.

[https://www.npmjs.com/package/@alaneicker/sass-utilities](https://www.npmjs.com/package/@alaneicker/sass-utilities)

<br />

```html
npm install @alaneicker/sass-utilities;
```

```css
@import 'node_modules/@alaneicker/sass-utilities/main';
```

#### 4. Begin Importing Components

It is recommended to import components as needed instead of importing the whole Atomik UI.
<br /><br />

```html
import { FormField, CheckOption, Dropdown } from '@alaneicker/atomik-ui';
```
