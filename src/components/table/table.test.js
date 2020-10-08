import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Table from './Table';

configure({ adapter: new Adapter() });

describe('<Table />', () => {
  let table;

  beforeEach(() => {
    const columns = [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Username',
        accessor: 'username',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Phone',
        accessor: 'phone',
      },
    ];

    const data = [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'brettg@email.com',
        phone: '1-770-736-8031 x56442',
      },
      {
        id: 2,
        name: 'Ervin Howell',
        username: 'ervin2234',
        email: 'ervin_howell@email.com',
        phone: '010-692-6593 x09125',
      },
      {
        id: 3,
        name: 'Clementine Bauch',
        username: 'clem1999',
        email: 'cbauch@email.com',
        phone: '1-463-123-4447',
      },
      {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'patricia5678',
        email: 'patricia_lebsack@email.com',
        phone: '493-170-9623 x156',
      },
      {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'chelsey.d@email.com',
        phone: '(254)954-1289',
      },
      {
        id: 6,
        name: 'Dennis Schulist',
        username: 'dennis1234',
        email: 'D.Schulist@email.com',
        phone: '1-477-935-8478 x6430',
      },
      {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'kweissnat4567',
        email: 'Kurtis.Weisnatt@email.com',
        phone: '210.067.6132',
      },
      {
        id: 8,
        name: 'Nicholas Lawrence',
        username: 'nick1987',
        email: 'mick.lawrence@email.com',
        phone: '586.493.6943 x140',
      },
      {
        id: 9,
        name: 'Glenna Reichert',
        username: 'glenna345',
        email: 'g.reichart@email.com',
        phone: '(775)976-6794 x41206',
      },
      {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'clementia9900',
        email: 'clementina_d@email.com',
        phone: '024-648-3804',
      },
      {
        id: 11,
        name: 'Mary Jane',
        username: 'Mary',
        email: 'mary_jane@email.com',
        phone: '1-770-736-8031 x56442',
      },
      {
        id: 12,
        name: 'Terry Smith',
        username: 'terry1234',
        email: 'tsmith@pemailrovider.com',
        phone: '010-692-6593 x09125',
      },
      {
        id: 13,
        name: 'Tom Thumb',
        username: 'tthumb1234',
        email: 'tthumb@email.com',
        phone: '1-463-123-4447',
      },
      {
        id: 14,
        name: 'Patricia McMahon',
        username: 'patm4567',
        email: 'pat.mcmahon@email.com',
        phone: '493-170-9623 x156',
      },
      {
        id: 15,
        name: 'Dick Dietrich',
        username: 'dicky123',
        email: 'dick.d@email.com',
        phone: '(254)954-1289',
      },
      {
        id: 16,
        name: 'Dennis Murphy',
        username: 'dennis_m1998',
        email: 'dennis_murphy@email.com',
        phone: '1-477-935-8478 x6430',
      },
      {
        id: 17,
        name: 'Kurtis Wilson',
        username: 'kwilson9872',
        email: 'kurt.wilson@email.com',
        phone: '210.067.6132',
      },
      {
        id: 18,
        name: 'Nicholas Johnson',
        username: 'nickjohn333',
        email: 'njohn@email.com',
        phone: '586.493.6943 x140',
      },
      {
        id: 19,
        name: 'Bob Roberts',
        username: 'robrob123',
        email: 'broberts@email.com',
        phone: '(775)976-6794 x41206',
      },
      {
        id: 20,
        name: 'Colt Luger',
        username: 'lugercolt',
        email: 'colt.luger@email.com',
        phone: '024-648-3804',
      },
    ];

    table = shallow(
      <Table
        columns={columns}
        data={data}
        numRowsPerPage={5}
        isStriped
        isFullWidth
        isPaginated
      />,
    );
  });

  it('Should render without errors', () => {
    expect(table).toBeTruthy();
  });
});
