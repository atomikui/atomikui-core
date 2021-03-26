A comment displays user feedback about site content such as a blog post or a news article.

```jsx
import { Comment } from '@atomikui/core';

const replies = [
  <Comment
    key="comment-1"
    avatar="mary.png"
    author="Mary"
    authorLink="/profile/mary"
    metadata="Today at 11:17 AM"
    onReply={() => {}}
  >
    I agree. Great post!
  </Comment>,
  <Comment
    key="comment-2"
    avatar="steve.png"
    author="Steve Johnson"
    authorLink="/profile/steve-johnson"
    metadata="Yesterday at 3:21 PM"
    onReply={() => {}}
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
    onReply={() => {}}
    replies={replies}
  >
    Awesome post! Keep the content coming!
  </Comment>
</>;
```

### Used With:

[`<Post />`](/styleguide/#/Content/Post)
