The CheckList component displays a list of items that can be checked.

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
        items: state.items.map((item) =>
          item.id === action.payload.id
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
