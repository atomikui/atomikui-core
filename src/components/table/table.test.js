import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mount, configure } from 'enzyme';
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
    ];

    table = mount(
      <Table
        columns={columns}
        data={data}
        numRowsPerPage={5}
        isStriped
        isFixedLayout
        isFullWidth
        isPaginated
      />,
    );
  });

  it('Should have pagination', () => {
    expect(table.find('[data-test-id="table-pagination"]')).toHaveLength(1);
  });

  it('Should not have pagination is `isPaginated` is false', () => {
    table.setProps({ isPaginated: false });
    expect(table.find('[data-test-id="table-pagination"]')).toHaveLength(0);
  });

  test.each(['is-full-width', 'is-fixed-layout', 'is-striped'])(
    'Should set the table modifier: %p',
    (claaaName) => {
      expect(
        table.find('[data-test-id="table"]').hasClass(claaaName),
      ).toBeTruthy();
    },
  );

  it('Should only render 5 rows', () => {
    expect(table.find('tbody').children()).toHaveLength(5);
  });

  it('Should show next and previous pages', () => {
    table
      .find('button[data-test-id="pagination-to-next-btn"]')
      .simulate('click');

    expect(
      table.find('tbody').children().first().children().first().text(),
    ).toBe('6');

    table
      .find('button[data-test-id="pagination-to-previous-btn"]')
      .simulate('click');

    expect(
      table.find('tbody').children().first().children().first().text(),
    ).toBe('1');
  });

  it('Should show first and last pages', () => {
    table
      .find('button[data-test-id="pagination-to-last-btn"]')
      .simulate('click');

    expect(
      table.find('tbody').children().first().children().first().text(),
    ).toBe('6');

    table
      .find('button[data-test-id="pagination-to-first-btn"]')
      .simulate('click');

    expect(
      table.find('tbody').children().first().children().first().text(),
    ).toBe('1');
  });

  it('Should advance when page number is entered in text field', () => {
    table
      .find('input[data-test-id="pagination-to-page-input"]')
      .simulate('change', { target: { value: '2' } });

    expect(
      table.find('tbody').children().first().children().first().text(),
    ).toBe('6');
  });

  it('Should advance when page number is entered in text field', () => {
    table
      .find('input[data-test-id="pagination-to-page-input"]')
      .simulate('change', { target: { value: '2' } });

    expect(
      table.find('tbody').children().first().children().first().text(),
    ).toBe('6');
  });

  it('Should show more rows when option is selected from dropdown', () => {
    table
      .find('select[data-test-id="pagination-to-page-dropdown"]')
      .simulate('change', { target: { value: '10' } });

    expect(table.find('tbody').children()).toHaveLength(10);
  });

  it('Should not show more rows if dropdown value is empty', () => {
    table
      .find('select[data-test-id="pagination-to-page-dropdown"]')
      .simulate('change', { target: { value: '' } });

    expect(table.find('tbody').children()).toHaveLength(5);
  });

  it('Should set dropdown options based on number of rows', () => {
    expect(
      table
        .find('select[data-test-id="pagination-to-page-dropdown"]')
        .childAt(0)
        .text(),
    ).toBe('Show 5');
    expect(
      table
        .find('select[data-test-id="pagination-to-page-dropdown"]')
        .childAt(1)
        .text(),
    ).toBe('Show 10');

    table.setProps({ numRowsPerPage: 4 });

    expect(
      table
        .find('select[data-test-id="pagination-to-page-dropdown"]')
        .childAt(0)
        .text(),
    ).toBe('Show 4');
    expect(
      table
        .find('select[data-test-id="pagination-to-page-dropdown"]')
        .childAt(1)
        .text(),
    ).toBe('Show 8');
    expect(
      table
        .find('select[data-test-id="pagination-to-page-dropdown"]')
        .childAt(2)
        .text(),
    ).toBe('Show 10');
  });
});
