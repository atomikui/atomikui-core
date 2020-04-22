All of the free <a href="https://fontawesome.com/icons?d=gallery&m=free" target="__blank">Font Awesome</a> icons are available to use.

### Usage

Import the Font Awesome dependencies and the icons that you'd like to use.

```jsx
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

<Icon icon={faCalendarAlt} size="2x" color="#444" />;
```

### Icon Library

```jsx
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import * as faIcons from '@fortawesome/free-solid-svg-icons';

const icons = faIcons.fas;

<div className="icon-list">
  {Object.keys(icons).map((icon) => {
    return (
      <div key={Math.random()} className="icon-list__item">
        <Icon icon={icons[icon]} color="#444" size="2x" />
        <div className="icon-list__label">{icon}</div>
      </div>
    );
  })}
</div>;
```
