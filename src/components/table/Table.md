### Basic Table

```jsx
import { useState, useMemo } from 'react';
import { useAsyncMemo } from 'use-async-memo';
import { Table } from '@alaneicker/react-component-library';

const columns = useMemo(
  () => [
    {
      Header: 'User ID',
      accessor: 'userId',
    },
    {
      Header: 'ID',
      accessor: 'id',
    },
    {
      Header: 'Title',
      accessor: 'title',
    },
    {
      Header: 'Completed',
      accessor: 'completed',
    },
  ],
  [],
);

const data = useAsyncMemo(async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const responseData = await response.json();

  return await responseData.map((row) => {
    return { ...row, completed: String(row.completed) };
  });
}, []);

<Table columns={columns} data={data} />;
```
