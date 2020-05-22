The CreditCardField is an inline fieldset for capturing credit card information. It validates a credit card as it is typed and returns the following state values: `creditCardNumber`, `cardNumberIsValid`, `creditCardExpiry`, `creditCardCvc` and `creditCardZip`.

_Please note: the CreditCardField only performs client-side validation. Server-side validation is still required._

```jsx
import { useState } from 'react';
import { CreditCardField } from '@alaneicker/atomik-ui';

const [state, setState] = useState({
  creditCardNumber: '5555555555555555',
  cardNumberIsValid: false,
  creditCardExpiry: '06/20',
  creditCardCvc: '1234',
  creditCardZip: '60089',
});

const onChange = (value, field) => {
  setState((prevState) => {
    return {
      ...prevState,
      [field]: value,
    };
  });
};

const handleCardNumberValidation = (cardType, isValid) => {
  setState((prevState) => {
    return {
      ...prevState,
      cardNumberIsValid: isValid,
      cardType,
    };
  });
};

<>
  {/*<div>
    Credit Card State:
    <br />
    <pre>{JSON.stringify(state, null, 2)}</pre>
  </div>*/}
  <CreditCardField
    label="Credit Card"
    creditCardNumber={state.creditCardNumber}
    creditCardExpiry={state.creditCardExpiry}
    creditCardCvc={state.creditCardCvc}
    creditCardZip={state.creditCardZip}
    onChange={onChange}
    onCardNumberChange={handleCardNumberValidation}
  />
</>;
```
