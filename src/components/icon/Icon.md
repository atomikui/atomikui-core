The component library uses the <a href="https://fontawesome.com/icons?d=gallery&m=free" target="__blank">Font Awesome</a> icon library, however, it does not ship with it as a dependency. If you would like to use Font Awesome icons in your project, There are many free ones available to use.

Below demonstrates how to get started with Font Awesome icons.

### Usage

Install and import the Font Awesome dependencies and the icons that you'd like to use.

```jsx
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

<Icon icon={faCalendarAlt} size="2x" color="#444" />;
```

### Icon Reference

```jsx
import shortid from 'shortid';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import * as faIcons from '@fortawesome/free-solid-svg-icons';

const icons = faIcons.fas;

<div className="icon-list">
  {Object.keys(icons).map((icon) => {
    return (
      <div key={shortid.generate()} className="icon-list__item">
        <Icon icon={icons[icon]} color="#444" size="2x" />
        <div className="icon-list__label">{icon}</div>
      </div>
    );
  })}
</div>;
```
