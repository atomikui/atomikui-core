All of the free <a href="https://fontawesome.com/icons?d=gallery&m=free" target="__blank">Font Awesome</a> icons are available to use.

Import the Font Awesome React component.

```html
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
```

Import the icons that you'd like to use.

```html
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
```

Implement the component in your app.

```html
<Icon icon="{faCalendarAlt}" size="2x" color="#444" />
```

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
