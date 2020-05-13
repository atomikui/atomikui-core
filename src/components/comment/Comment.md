A comment displays user feedback about site content such as a blog post or a news article.

```jsx
import { Comment, Avatar } from '@alaneicker/atomik-ui';

<>
  <Comment
    avatar="profile-image.png"
    author="Bob Smith"
    authorLink="/path/to/author/page"
    metadata="Today at 5:35pm"
    replyAction={() => {}}
  >
    Awesome post! Keep the content coming!
  </Comment>
</>;
```
