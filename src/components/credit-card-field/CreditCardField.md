```jsx
import { useState } from 'react';
import { CreditCardField } from '@alaneicker/atomik-ui';

const [state, setState] = useState({
  creditCardNumber: '',
  cardNumberIsValid: false,
  creditCardExpiry: '',
  creditCardCvc: '',
  creditCardZip: '',
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
  <div>
    State:
    <br />
    <pre>{JSON.stringify(state, null, 2)}</pre>
  </div>
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
