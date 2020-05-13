A comment displays user feedback about site content such as a blog post or a news article.

```jsx
import { Comment } from '@alaneicker/atomik-ui';

const replies = [
  <Comment
    avatar="mary.png"
    author="Mary"
    authorLink="/profile/mary"
    metadata="Today at 11:17 AM"
    replyAction={() => {}}
  >
    I agree. Great post!
  </Comment>,
  <Comment
    avatar="steve.png"
    author="Steve Johnson"
    authorLink="/profile/steve-johnson"
    metadata="Yesterday at 3:21 PM"
    replyAction={() => {}}
  >
    Great content like this is hard to find. I look forward to more posts.
  </Comment>,
];

<>
  <Comment
    avatar="bob.png"
    author="Bob Smith"
    authorLink="/profile/bob-smith"
    metadata="3 days ago at 5:35 PM"
    replyAction={() => {}}
    replies={replies}
  >
    Awesome post! Keep the content coming!
  </Comment>
</>;
```
