Adding the React Component Library to your project is simple.

### Setup

#### 1. Install the component library

Install the core React Component Library module as a production dependency.

```html
npm install --save @alaneicker/react-component-library
```

Or, if you're using Yarn.

```html
yarn add @alaneicker/react-component-library
```

#### 2. Import the Component library CSS

Import the React Component Library core. This will provide the default light theme and dark theme.

```html
import
'@alaneicker/react-component-library/dist/styles/react-component-library.css';
```

#### 3. Begin Importing Components

It is recommended to import components as needed instead of importing the whole React Component Library.

```html
import { FormField, FormOption, Dropdown } from
'@alaneicker/react-component-library';
```
