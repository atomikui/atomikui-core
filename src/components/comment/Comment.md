A comment displays user feedback about site content such as a blog post or a news article.

```jsx
import { Comment, Avatar } from '@alaneicker/atomik-ui';

const replies = [
  <Comment
    avatar="mary.png"
    author="Mary"
    authorLink="/path/to/author/page"
    metadata="Yesterday at 11:17pm"
    replyAction={() => {}}
  >
    I agree. Great post!
  </Comment>,
  <Comment
    avatar="steve.png"
    author="Steve Johnson"
    authorLink="/path/to/author/page"
    metadata="Today at 3:21pm"
    replyAction={() => {}}
  >
    Great content like this is hard to find. I look forward to more posts.
  </Comment>,
];

<>
  <Comment
    avatar="bob.png"
    author="Bob Smith"
    authorLink="/path/to/author/page"
    metadata="Today at 5:35pm"
    replyAction={() => {}}
    replies={replies}
  >
    Awesome post! Keep the content coming!
  </Comment>
</>;
```
