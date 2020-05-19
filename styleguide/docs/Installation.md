Adding Atomik UI to your project is simple.

### Setup

#### 1. Install the component library

Install the core Atomik UI module as a production dependency.

```html
npm install --save @alaneicker/atomik-ui
```

Or, if you're using Yarn.

```html
yarn add @alaneicker/atomik-ui
```

#### 2. Import the Component library CSS

Import the Atomik UI library core CSS. This will provide the default light theme and dark theme.

```html
import '@alaneicker/atomik-ui/dist/styles/main.mim.css';
```

#### 3. Begin Importing Components

It is recommended to import components as needed instead of importing the whole Atomik UI.

```html
import { FormField, CheckOption, Dropdown } from '@alaneicker/atomik-ui';
```
