```jsx
import { Card, Link } from '@alaneicker/react-component-library';
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
      <Link href="/download" className="margin-left-8 margin-right-8">
        <Icon icon={faThumbsUp} size="lg" color="#444" />
      </Link>
      <Link href="/download" className="margin-left-8 margin-right-8">
        <Icon icon={faComment} size="lg" color="#444" />
      </Link>
      <Link href="/download" className="margin-left-8 margin-right-8">
        <Icon icon={faBookmark} size="lg" color="#444" />
      </Link>
      <Link href="/download" className="margin-left-8 margin-right-8">
        <Icon icon={faEye} size="lg" color="#444" />
      </Link>
    </div>
  }
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum
  lectus vel libero gravida, sit amet sodales ipsum maximus. Vivamus quis
  blandit arcu...
  <Link href="/articles/why-react-is-better-than-angular">Read more</Link>
</Card>;
```
