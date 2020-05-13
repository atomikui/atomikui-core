Content displayed for public viewing. E.g a blog post.

```jsx
import { Post, Comment } from '@alaneicker/atomik-ui';

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
  comments={[
    <Comment
      key="comment-1"
      avatar="mary.png"
      author="Mary"
      authorLink="/profile/mary"
      metadata="Today at 11:17 AM"
      replyAction={() => {}}
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
