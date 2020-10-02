<h1 id="brand-heading" align="center">
  ATOMIK UI
</h1>

<div id="status-images">
  <p align="center">
      <img src="https://travis-ci.com/atomikui/atomikui-core.svg?branch=master" alt="Travis CI Status Image" />
    <a href="https://sonarcloud.io/dashboard?id=atomikui_atomikui-core">
      <img src="https://sonarcloud.io/api/project_badges/measure?project=atomikui_atomikui-core&metric=alert_status" alt="Quality Gate Status" />
    </a>
    <img src="https://badgen.net/npm/v/@atomikui/core" alt="Package Version Image" />
    <img alt="GitHub Issues" src="https://img.shields.io/github/issues-raw/atomikui/atomikui-core" />
    <img alt="License" src="https://img.shields.io/github/license/atomikui/atomikui-core" />
  </p>
</div>

Atomik UI is a library of accessible React components for rapid application development. From form controls to informational components like modals, alerts and toast notifications, you'll find everything you need here to get your next project off the ground.

<br />

### Features

Atomik UI comes with a variety of customizable React components to suit any development need:

- Containers
- Content
- Data Display
- Form Controls
- Informational
- Layout
- Navigational
- Templates

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

#### 3. Install and Import @atomikui/core-sass (Optional)

The Atomik UI Core Sass package is the backbone of the Atomik UI Component library theme. It contains functions, mixins, variables, and 192 colors that can be used in you project.

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

<br />

### Release Notes

Recently updated? Check out the [Release Notes](https://github.com/atomikui/atomikui-core/releases).

<br />

### License

Atomik UI is licensed under the terms of the [MIT license](https://github.com/atomikui/atomikui-core/blob/master/LICENSE).

<br />

### Atomik UI Maintainers

- Alan Eicker [alaneicker@gmail.com](mailto:alaneicker@gmail.com)

### Credit

- Atomik UI Logo - atom by Marta Ambrosetti from the Noun Project
