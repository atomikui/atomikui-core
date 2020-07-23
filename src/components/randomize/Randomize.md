The Randomize component randomizes child content passed into it. The `duration` prop can be used to specify the length of time each child will be displayed.

For accessibility, randomized content is focusable. The timer will be paused when a randomized item is focused. Alternatively, the timer will also be paused when randomized content is hovered over.

<br />

```jsx
import { Randomize, Card } from '@alaneicker/atomik-ui';

<Card title="Random Lorem Ipsums">
  <Randomize duration={5000}>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      viverra eu est a rutrum.
    </div>
    <div>
      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
      inceptos himenaeos.
    </div>
    <div>
      Cras semper ornare fringilla. Curabitur viverra sodales orci, eu hendrerit
      orci dapibus ut.
    </div>
    <div>Praesent rutrum ex eget ante pretium pulvinar.</div>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum metus
      metus, vestibulum ornare dapibus in, efficitur non nisi.
    </div>
  </Randomize>
</Card>;
```
