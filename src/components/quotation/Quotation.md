The Quotation component defines a section of content used to pull a quote out of the documents context, or reference a quote from an external source.

The default style variant is a block quotation.

<br />

### Block Quotation Example

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
