### Basic Table

```jsx
import { useMemo } from 'react';
import { Table } from '@alaneicker/react-component-library';

const columns = useMemo(
  () => [
    {
      Header: 'First Name',
      accessor: 'firstName',
    },
    {
      Header: 'Last Name',
      accessor: 'lastName',
    },
    {
      Header: 'Age',
      accessor: 'age',
    },
    {
      Header: 'Occupation',
      accessor: 'occupation',
    },
  ],
  [],
);

const data = useMemo(
  () => [
    {
      firstName: 'Alan',
      lastName: 'Eicker',
      age: '30',
      occupation: 'Front End Engineer',
    },
    {
      firstName: 'Bob',
      lastName: 'Smith',
      age: '22',
      occupation: 'Car Salesman',
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
      age: '38',
      occupation: 'VP of Marketing',
    },
    {
      firstName: 'Paul',
      lastName: 'MnCormick',
      age: '54',
      occupation: 'Plumber',
    },
  ],
  [],
);

<Table columns={columns} data={data}></Table>;
```
