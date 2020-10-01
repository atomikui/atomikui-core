The Quotation component defines a section of content used to pull a quote out of the documents context, or reference a quote from an external source.

The default style variant is a block quotation.

<br />

### Block Quote

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

### Pull Quote

Pull quotes are used to pull a text passage out of the reader’s flow and give it a more dominant position in the post or the article. They do not require any citation.

**Note:** As a best practice, try not to use more than 1-2 pull quotes per article.

<br />

```jsx
import { Quotation } from '@atomikui/core';

<article>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet
    pulvinar lorem. In a quam lorem. Donec rutrum elit iaculis massa pretium,
    vitae pulvinar ex hendrerit. Curabitur pretium ac lectus nec convallis.
    Vestibulum tincidunt sodales nulla et dignissim. Aliquam tempus mauris non
    leo scelerisque tincidunt. Cras dapibus est eu arcu ultricies, in tristique
    nibh semper. Cras sollicitudin viverra est, vel faucibus risus.
  </p>
  <div className="margin-top-20 margin-bottom-20">
    <Quotation pullquote>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus
      velit, vehicula eget orci in, scelerisque gravida enim. Quisque finibus mi
      sed accumsan vulputate. Sed lacinia, sapien vitae varius tincidunt.
    </Quotation>
  </div>
  <p>
    Nam vulputate massa erat, a tincidunt justo elementum quis. Phasellus auctor
    imperdiet aliquam. Sed feugiat nunc et enim elementum, at cursus est
    accumsan. Nunc aliquet suscipit sapien vitae vehicula. Pellentesque nunc
    sem, porta at mattis ut, lacinia et velit. Duis sed lectus euismod, dapibus
    mi pulvinar, tristique neque. Sed id purus dignissim, mattis lacus sit amet,
    luctus neque. Donec vulputate accumsan eleifend.
  </p>
</article>;
```
