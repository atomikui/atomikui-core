Adding Atomik UI to your project is simple.

### Setup

#### 1. Install the component library

Install the core Atomik UI module as a production dependency.
<br /><br />

```html
npm install --save @alaneicker/atomik-ui
```

Or, if you're using Yarn.
<br /><br />

```html
yarn add @alaneicker/atomik-ui
```

#### 2. Import the Component library CSS

Import the Atomik UI library core CSS. This will provide the default light theme and dark theme.
<br /><br />

```html
import '@alaneicker/atomik-ui/dist/styles/main.min.css';
```

Atomik UI comes with ready to use Sass variables, mixins, and functions which can imported into your main Sass file and used them as needed.
<br /><br />

```html
@import 'node_modules/@alaneicker/atomik-ui/dist/styles/sass/main.scss';
```

#### 3. Begin Importing Components

It is recommended to import components as needed instead of importing the whole Atomik UI.
<br /><br />

```html
import { FormField, CheckOption, Dropdown } from '@alaneicker/atomik-ui';
```
