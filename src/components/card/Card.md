### Basic Card

```jsx
import { Card, Link, Button } from '@alaneicker/react-component-library';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  faThumbsUp,
  faComment,
  faBookmark,
  faEye,
} from '@fortawesome/free-solid-svg-icons';

<Card
  style={{ width: '50%' }}
  title="Why React is Better Than Angular"
  footer={
    <div className="text-align-center">
      <Button variant="hollow" condensed>
        <Icon icon={faThumbsUp} size="lg" color="#444" />
      </Button>
      <Button variant="hollow" condensed>
        <Icon icon={faComment} size="lg" color="#444" />
      </Button>
      <Button variant="hollow" condensed>
        <Icon icon={faBookmark} size="lg" color="#444" />
      </Button>
      <Button variant="hollow" condensed>
        <Icon icon={faEye} size="lg" color="#444" />
      </Button>
    </div>
  }
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum
  lectus vel libero gravida, sit amet sodales ipsum maximus. Vivamus quis
  blandit arcu...
  <Link href="/articles/why-react-is-better-than-angular">Read more</Link>
</Card>;
```

### Inverse Card

```jsx
import { Card, Link, Button } from '@alaneicker/react-component-library';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  faThumbsUp,
  faComment,
  faBookmark,
  faEye,
} from '@fortawesome/free-solid-svg-icons';

<Card
  style={{ width: '50%' }}
  inverse
  title="Why React is Better Than Angular"
  footer={
    <div className="text-align-center">
      <Button variant="hollow" condensed>
        <Icon icon={faThumbsUp} size="lg" color="white" />
      </Button>
      <Button variant="hollow" condensed>
        <Icon icon={faComment} size="lg" color="white" />
      </Button>
      <Button variant="hollow" condensed>
        <Icon icon={faBookmark} size="lg" color="white" />
      </Button>
      <Button variant="hollow" condensed>
        <Icon icon={faEye} size="lg" color="white" />
      </Button>
    </div>
  }
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum
  lectus vel libero gravida, sit amet sodales ipsum maximus. Vivamus quis
  blandit arcu...
  <Link href="/articles/why-react-is-better-than-angular">Read more</Link>
</Card>;
```
