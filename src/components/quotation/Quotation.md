The Quotation component defines a section of content used to pull a quote out of the documents context, or reference a quote from an external source.

The default style variant is a block quotation.

<br />

### Block Quote Example

Block quotes should inclue a cite URL to the extenal source, and if applicable, provide a name and source in the footer.

<br />

```jsx
import { Quotation } from '@atomikui/core';

<Quotation
  cite="https://www.atomikui.com"
  footer={
    <>
      - Alan Eicker (<cite>Atomik UI</cite>)
    </>
  }
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed quam a odio
  egestas suscipit. Aenean suscipit eros eleifend, tempus elit non, malesuada
  tortor. Lorem ipsum dolor sit amet.
</Quotation>;
```

### Pull Quote Example

Pull quotes are used to pull a text passage out of the reader’s flow and give it a more dominant position in the post or the article. They do not require any citation.

**Note:** As a best practice, try not to use more than 1-2 pull quotes per article.

<br />

```jsx
import { Quotation } from '@atomikui/core';

<Quotation pullquote>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed quam a odio
  egestas suscipit. Aenean suscipit eros eleifend, tempus elit non, malesuada
  tortor. Lorem ipsum dolor sit amet.
</Quotation>;
```
