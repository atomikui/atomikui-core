The Randomize component randomizes child content passed into it. The `duration` prop can be used to specify the length of time each child will be displayed.

For accessibility, randomized content is focusable. The timer will be paused when a randomized item is focused. Alternatively, the timer will also be paused when randomized content is hovered over.

The example below displays random lorem ipsums.

<br />

```jsx
import { Randomize } from '@alaneicker/atomik-ui';

<>
  <h3 className="margin-bottom-16">Random Lorem Ipsums</h3>
  <Randomize duration={5000}>
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      viverra eu est a rutrum.
    </span>
    <span>
      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
      inceptos himenaeos.
    </span>
    <span>
      Cras semper ornare fringilla. Curabitur viverra sodales orci, eu hendrerit
      orci dapibus ut.
    </span>
    <span>Praesent rutrum ex eget ante pretium pulvinar.</span>
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum metus
      metus, vestibulum ornare dapibus in, efficitur non nisi.
    </span>
  </Randomize>
</>;
```
