Content displayed for public viewing, such as a blog post.

```jsx
import shortid from 'shortid';
import { Post, Comment } from '@atomikui/core';

<Post
  title="Getting Started With React Functional Components"
  avatar="bob.png"
  author="Bob Smith"
  authorLink="/profile/Bob-Smith"
  metadata="Tuesday, March 10, 2020 3:36 PM"
  facebookLink="facebook/link"
  linkedInLink="linkedin/link"
  twitterLink="/twitter/link"
  onBookmark={(isBookmarked) => console.log(isBookmarked)}
  onComment={() => console.log('initiailizing comment')}
  onReport={() => console.log('submitting report')}
  comments={[
    <Comment
      key={shortid.generate()}
      avatar="mary.png"
      author="Mary"
      authorLink="/profile/mary"
      metadata="Today at 11:17 AM"
      onReply={() => {}}
    >
      Awesome post. This article is right on point!
    </Comment>,
  ]}
>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in lacus
    nec felis ultricies porttitor vitae ut risus. Nulla pellentesque ligula
    orci, vitae sodales augue ornare sagittis. Aliquam sit amet laoreet felis.
    Nunc porta consequat velit vitae molestie. Suspendisse suscipit metus risus,
    vitae viverra mi suscipit vitae. Phasellus ut hendrerit dolor, non varius
    dolor. Morbi pretium sed dolor at dapibus. Vestibulum lorem sem, semper
    lobortis mi et, consectetur tincidunt lacus. Phasellus vestibulum iaculis
    malesuada. Donec vitae tincidunt est, eu aliquet nisl. Etiam elementum felis
    purus, sed hendrerit nulla cursus vitae.
  </p>
</Post>;
```

#### Used With:

[`<Comment />`](/styleguide/#/Content/Comment)
