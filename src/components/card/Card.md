A card contains content and actions related to a single subject.

```jsx
import { Card, Link, Button } from '@atomikui/core';
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
        <Button theme="hollow" aria-label="like button" condensed>
          <Icon icon={faThumbsUp} size="lg" color="#444" />
        </Button>
        <Button theme="hollow" aria-label="comment button" condensed>
          <Icon icon={faComment} size="lg" color="#444" />
        </Button>
        <Button theme="hollow" aria-label="bookmark Button" condensed>
          <Icon icon={faBookmark} size="lg" color="#444" />
        </Button>
        <Button theme="hollow" aria-label="watch Button" condensed>
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
</div>;
```
