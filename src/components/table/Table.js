import React, { useContext } from 'react';
import { useTable, usePagination } from 'react-table';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import ThemeContext from '../../themeContext';

const Table = ({
  className,
  columns,
  data,
  isPaginated,
  isLoading,
  pageCount,
  ...others
}) => {
  const { theme } = useContext(ThemeContext);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
    ...(isPaginated && { usePagination }),
  });

  return (
    <table
      {...getTableProps()}
      className={classnames('rcl-table', className, {
        [`rcl-table--${theme}`]: theme,
      })}
      {...others}
    >
      <thead>
        {headerGroups.map((headerGroup) => {
          return (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => {
                return (
                  <th {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                );
              })}
            </tr>
          );
        })}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Table columns */
  columns: PropTypes.array,
  /** Data to be rendered as table rows */
  data: PropTypes.array,
  /** Adds pagination */
  isPaginated: PropTypes.bool,
  /** Data is being loaded */
  isLoading: PropTypes.bool,
  /**  If paginated, the total number of pages */
  pageCount: PropTypes.number,
};

Table.defaultProps = {
  className: '',
  columns: [],
  data: [],
  isPaginated: false,
  isLoading: false,
  pageCount: 0,
};

export default Table;
