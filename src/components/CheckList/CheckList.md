The CheckList component displays a list of items that can be checked. This is a stateless component, so it relies on the external state to render it.

The example below demonstrates how to utilize the React useReducer hook to manage the component's state.

<br />

```jsx
const { useReducer } = React;
import { CheckList } from '@atomikui/core';

const initialState = {
  items: [
    { id: 1, description: 'Take laundry to the cleaners', isChecked: true },
    { id: 2, description: 'Grocery shopping', isChecked: false },
    { id: 3, description: 'Cut grass', isChecked: false },
    { id: 4, description: 'Wash kitchen floor', isChecked: false },
  ],
};

const checkListReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_ITEM':
      return {
        ...state,
        items: state.items.map((item, index) =>
          (item.id && item.id === action.payload.id) ||
          action.payload.index === index
            ? { ...item, isChecked: action.payload.isChecked }
            : item,
        ),
      };
    default:
      return state;
  }
};

const [{ items }, dispatch] = useReducer(checkListReducer, initialState);

<CheckList
  items={items}
  onCheck={(item) => dispatch({ type: 'UPDATE_ITEM', payload: item })}
/>;
```
