A card contains content and actions related to a single subject.

```jsx
import { Card, Link, Button } from '@alaneicker/react-component-library';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  faThumbsUp,
  faComment,
  faBookmark,
  faEye,
} from '@fortawesome/free-solid-svg-icons';

<div className="flex@medium flex@medium--nowrap flex--spacing-16">
  <Card
    title="Default Card"
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
  </Card>
  <Card
    inverse
    title="Inverse Card"
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
  </Card>
</div>;
```
