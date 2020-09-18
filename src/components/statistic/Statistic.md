A statistic is a piece of data about a specific attribute.

### Basic Statistic

A basict statistic has a value and a label.

```jsx
import { Statistic } from '@alaneicker/atomik-ui';

<>
  <Statistic value="25,000" label="Views" />
  <Statistic
    value={
      <>
        Seventy
        <br />
        Thousand
      </>
    }
    label="Registered Users"
  />
</>;
```

### Top aligned Label

The `topLabel` prop can be used to position the label above the value.

```jsx
import { Statistic } from '@alaneicker/atomik-ui';

<Statistic value="$75,000" label="Money Raised" topLabel />;
```

### Statistic With Icon

The `icon` prop can be used to set an icon next to the value. Set the icon color with the `iconColor` prop.

```jsx
import { Statistic } from '@alaneicker/atomik-ui';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

<Statistic
  icon={faUsers}
  iconColor="#027abf"
  value="100,000"
  label="Members"
/>;
```

### Horizntal Statistic

The `horizontal` prop can be used to create a horizontal layout.

```jsx
import { Statistic } from '@alaneicker/atomik-ui';

<Statistic value="45,700" label="Miles" horizontal />;
```

### Sizes

The `size` prop can be used to alter the statistic size. Sizes values include `sm`, `md`, and `lg`;

```jsx
import { Statistic } from '@alaneicker/atomik-ui';

<>
  <Statistic value="33,000" label="Downloads" size="sm" />
  <Statistic value="33,000" label="Downloads" size="md" />
  <Statistic value="33,000" label="Downloads" size="lg" />
  <Statistic value="33,000" label="Downloads" />
</>;
```

### Color Themes

The `theme` prop can be used to set the color of the statistic value.

```jsx
import { Statistic } from '@alaneicker/atomik-ui';

<>
  <Statistic value="27" label="Red" theme="red" />
  <Statistic value="8" label="Orange" theme="orange" />
  <Statistic value="34" label="Gold" theme="gold" />
  <Statistic value="27" label="Green" theme="green" />
  <Statistic value="1" label="Light Blue" theme="light-blue" />
  <Statistic value="11" label="Medium Blue" theme="medium-blue" />
  <Statistic value="22" label="Dark Blue" theme="dark-blue" />
  <Statistic value="3" label="Light Gray" theme="light-gray" />
  <Statistic value="17" label="Medium Gray" theme="medium-gray" />
  <Statistic value="87" label="Dark Gray" theme="dark-gray" />
</>;
```
