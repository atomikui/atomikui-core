Adding Atomik UI to your project is simple.

### Setup

#### 1. Install the component library

Install the core Atomik UI module as a production dependency.
<br /><br />

```shell
// NPM
npm install --save @atomikui/core

// Yarn
yarn add @atomikui/core
```

#### 2. Import the Component library CSS

Import the Atomik UI library core CSS.
<br /><br />

```shell
import '@atomikui/core/dist/styles/main.min.css';
```

#### 3. Install and Import @atomikui/core-sass library abstracts (Optional)

The Atomik UI Core Sass package is the backbone of the Atomik UI Component library theme. It contains functions, mixins, variables and 192 colors that can be used in you project.

More information is available under the [Sass Utilities](https://www.atomikui.com/#/Sass%20Utilities) Section.

To use the [@atomikui/core-sass](https://www.npmjs.com/package/@atomikui/core-sass) package in your projects CSS:

<br />

```shell
// npm
npm install @atomikui/core-sass;

// Yarn
yarn add @atomikui/core-sass;
```

```css
@import 'node_modules/@atomikui/core-sass/abstracts';
```

#### 4. Begin Importing Components

It is recommended to import components as needed instead of importing the whole Atomik UI.
<br /><br />

```shell
import { FormField, CheckOption, Dropdown } from '@atomikui/core';
```
