Adding Atomik UI to your project is simple.

### Setup

#### 1. Install the component library

Install the core Atomik UI module as a production dependency.
<br /><br />

```html
npm install --save @atomikui/core
```

#### 2. Import the Component library CSS

Import the Atomik UI library core CSS.
<br /><br />

```html
import '@atomikui/core/dist/styles/main.min.css';
```

#### 3. Install and Import the Sass Utilities Abstracts (Optional)

The Sass Utilities package contains functions, mixins, variables, and 192 colors that can be used in you project.

[https://www.npmjs.com/package/@atomikui/core-sass](https://www.npmjs.com/package/@atomikui/core-sass)

<br />

```html
npm install @atomikui/core-sass;
```

```css
@import 'node_modules/@atomikui/core-sass/abstracts';
```

#### 4. Begin Importing Components

It is recommended to import components as needed instead of importing the whole Atomik UI.
<br /><br />

```html
import { FormField, CheckOption, Dropdown } from '@atomikui/core';
```
