A statistic is a piece of data about a specific attribute.

### Basic Statistic

A basict statistic has a value and a label.

```jsx
import { Statistic } from '@alaneicker/react-component-library';

<>
  <div>
    <Statistic value="$20,000" label="Money Raised" />
  </div>
  <div>
    <Statistic
      value={
        <>
          Twenty
          <br />
          Thousand
        </>
      }
      label="Participants"
    />
  </div>
</>;
```

### Top aligned Label

The `topLabel` prop can be used to position the label above the value.

```jsx
import { Statistic } from '@alaneicker/react-component-library';

<Statistic value="$20,000" label="Money Raised" topLabel />;
```

### Statistic With Icon

The `icon` prop can be used to set an icon nex to the calue. Set the icon color with the `iconColor` prop.

```jsx
import { Statistic } from '@alaneicker/react-component-library';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

<Statistic
  icon={faThumbsUp}
  iconColor="#027abf"
  value="100,000"
  label="Thumbs Up"
/>;
```
