<h1 id="brand-heading">Atomik UI</h1>
<h2 id="brand-subheading">A Library of Accessible React Components for Rapid Application Development</h2>

![Travis CI Status Image](https://travis-ci.com/alaneicker1975/atomik-ui.svg?branch=master)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=alaneicker1975_atomik-ui&metric=alert_status)](https://sonarcloud.io/dashboard?id=alaneicker1975_atomik-ui)
![Package Version Image](https://badgen.net/npm/v/@atomikui/core)
![GitHub repo size](https://img.shields.io/github/repo-size/alaneicker1975/atomik-ui)
![GitHub issues](https://img.shields.io/github/issues-raw/alaneicker1975/atomik-ui)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/alaneicker1975/atomik-ui)

<hr />

Atomik UI is a comprehensive library of React components for kickstarting any React based project. From form controls to informational components like modals, alerts and toast notifications, you'll find everything you need here to get your next project off the ground.

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

<br />

### Atomik UI Maintainers

- Alan Eicker [alaneicker@gmail.com](mailto:alaneicker@gmail.com)
