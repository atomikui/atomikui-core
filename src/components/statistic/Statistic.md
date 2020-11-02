A statistic is a piece of data about a specific attribute.

### Basic Statistic

A basict statistic has a value and a label.

```jsx
import { Statistic } from '@atomikui/core';

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
import { Statistic } from '@atomikui/core';

<Statistic value="$75,000" label="Money Raised" topLabel />;
```

### Statistic With Icon

The `icon` prop can be used to set an icon next to the value. Set the icon color with the `iconColor` prop.

```jsx
import { Statistic } from '@atomikui/core';
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
import { Statistic } from '@atomikui/core';

<Statistic value="45,700" label="Miles" horizontal />;
```

### Sizes

The `size` prop can be used to alter the statistic size. Sizes values include `sm`, `md`, and `lg`;

```jsx
import { Statistic } from '@atomikui/core';

<>
  <Statistic value="33,000" label="Downloads" size="sm" />
  <Statistic value="33,000" label="Downloads" size="md" />
  <Statistic value="33,000" label="Downloads" size="lg" />
  <Statistic value="33,000" label="Downloads" />
</>;
```

### Color Themes

There are many color themes to choose from. Simply pass in a `theme` prop with the color of your choice.

#### Dark

```jsx
import { Statistic } from '@atomikui/core';

<>
  <Statistic value="27" label="Red" theme="red" />
  <Statistic value="8" label="Pink" theme="pink" />
  <Statistic value="34" label="purple" theme="purple" />
  <Statistic value="27" label="deep-purple" theme="deep-purple" />
  <Statistic value="1" label="indigo" theme="indigo" />
  <Statistic value="11" label="blue" theme="blue" />
  <Statistic value="22" label="sky-blue" theme="sky-blue" />
  <Statistic value="3" label="cyan" theme="cyan" />
  <Statistic value="17" label="teal" theme="teal" />
  <Statistic value="87" label="green" theme="green" />
  <Statistic value="87" label="light-green" theme="light-green" />
  <Statistic value="87" label="lime" theme="lime" />
  <Statistic value="87" label="yellow" theme="yellow" />
  <Statistic value="87" label="light-orange" theme="light-orange" />
  <Statistic value="87" label="deep-orange" theme="deep-orange" />
  <Statistic value="87" label="amber" theme="amber" />
  <Statistic value="87" label="brown" theme="brown" />
  <Statistic value="87" label="gray" theme="gray" />
  <Statistic value="87" label="blue-gray" theme="blue-gray" />
  <Statistic value="87" label="black" theme="black" />
</>;
```

#### Light

```jsx
import { Statistic } from '@atomikui/core';

<>
  <Statistic value="27" label="Red" theme="red" themeVariant="light" />
  <Statistic value="8" label="Pink" theme="pink" themeVariant="light" />
  <Statistic value="34" label="purple" theme="purple" themeVariant="light" />
  <Statistic
    value="27"
    label="deep-purple"
    theme="deep-purple"
    themeVariant="light"
  />
  <Statistic value="1" label="indigo" theme="indigo" themeVariant="light" />
  <Statistic value="11" label="blue" theme="blue" themeVariant="light" />
  <Statistic
    value="22"
    label="sky-blue"
    theme="sky-blue"
    themeVariant="light"
  />
  <Statistic value="3" label="cyan" theme="cyan" themeVariant="light" />
  <Statistic value="17" label="teal" theme="teal" themeVariant="light" />
  <Statistic value="87" label="green" theme="green" themeVariant="light" />
  <Statistic
    value="87"
    label="light-green"
    theme="light-green"
    themeVariant="light"
  />
  <Statistic value="87" label="lime" theme="lime" themeVariant="light" />
  <Statistic value="87" label="yellow" theme="yellow" themeVariant="light" />
  <Statistic
    value="87"
    label="light-orange"
    theme="light-orange"
    themeVariant="light"
  />
  <Statistic
    value="87"
    label="deep-orange"
    theme="deep-orange"
    themeVariant="light"
  />
  <Statistic value="87" label="amber" theme="amber" themeVariant="light" />
  <Statistic value="87" label="brown" theme="brown" themeVariant="light" />
  <Statistic value="87" label="gray" theme="gray" themeVariant="light" />
  <Statistic
    value="87"
    label="blue-gray"
    theme="blue-gray"
    themeVariant="light"
  />
  <Statistic value="87" label="white" theme="white" themeVariant="light" />
</>;
```
