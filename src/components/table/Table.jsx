import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useTable, usePagination } from 'react-table';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../button';
import Dropdown from '../dropdown';
import FormField from '../form-field';

const creategGotToPageOptions = (numRows, numRowsPerPage) => {
  let next = 0;
  const numViews = numRows / numRowsPerPage;
  const increments =
    numViews % 2 === 0 ? Math.floor(numViews) : Math.ceil(numViews);
  const optionsArray = [];

  for (let i = 0; i < increments; i += 1) {
    next += numRowsPerPage;
    optionsArray.push(next > numRows ? numRows : next);
  }

  return optionsArray;
};

creategGotToPageOptions(156);

const Table = ({
  className,
  columns,
  data,
  isFixedLayout,
  isFullWidth,
  isPaginated,
  isStriped,
  numRowsPerPage,
  ...others
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    rows,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: numRowsPerPage },
    },
    usePagination,
  );

  return (
    <>
      <div style={{ width: '100%', overflow: 'auto' }}>
        <table
          {...getTableProps()}
          className={classnames('atomikui-table', className, {
            'is-full-width': isFullWidth,
            'is-fixed-layout': isFixedLayout,
            'is-striped': isStriped,
          })}
          {...others}
        >
          <thead>
            {headerGroups.map((headerGroup, rowIndex) => {
              return (
                <tr
                  key={`row-${rowIndex + 1}`}
                  {...headerGroup.getHeaderGroupProps()}
                >
                  {headerGroup.headers.map((column, colIndex) => {
                    return (
                      <th
                        key={`col-${colIndex + 1}`}
                        {...column.getHeaderProps()}
                      >
                        {column.render('Header')}
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </thead>
          <tbody {...getTableBodyProps()}>
            {(isPaginated ? page : rows).map((row, bodyRowIndex) => {
              prepareRow(row);
              return (
                <tr key={`body-row-${bodyRowIndex + 1}`} {...row.getRowProps()}>
                  {row.cells.map((cell, bodyCellIndex) => {
                    return (
                      <td
                        key={`body-cell-${bodyCellIndex + 1}`}
                        {...cell.getCellProps()}
                      >
                        {cell.render('Cell')}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {isPaginated && (
        <div
          id="pagination"
          className="margin-top-16 margin-bottom-2 flex flex--align-middle flex--justify-flex-end flex--hr-8"
        >
          <Button
            id="to-first"
            theme="sky-blue"
            size="md"
            onClick={() => {
              return gotoPage(0);
            }}
            disabled={!canPreviousPage}
            aria-label="Go to first page"
          >
            <Icon
              icon={faAngleDoubleLeft}
              color={!canPreviousPage ? '#BDBDBD' : 'white'}
            />
          </Button>
          <Button
            id="to-previous"
            theme="sky-blue"
            size="md"
            onClick={() => {
              return previousPage();
            }}
            disabled={!canPreviousPage}
            aria-label="Go to previous page"
          >
            <Icon
              icon={faAngleLeft}
              color={!canPreviousPage ? '#BDBDBD' : 'white'}
            />
          </Button>
          <Button
            id="to-next"
            theme="sky-blue"
            size="md"
            onClick={() => {
              return nextPage();
            }}
            disabled={!canNextPage}
            aria-label="Go to next page"
          >
            <Icon
              icon={faAngleRight}
              color={!canNextPage ? '#BDBDBD' : 'white'}
            />
          </Button>
          <Button
            id="to-last"
            theme="sky-blue"
            size="md"
            onClick={() => {
              return gotoPage(pageCount - 1);
            }}
            disabled={!canNextPage}
            aria-label="Go to last page"
          >
            <Icon
              icon={faAngleDoubleRight}
              color={!canNextPage ? '#BDBDBD' : 'white'}
            />
          </Button>
          <span className="flex flex--align-middle">
            Page{' '}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
          </span>
          <span className="flex flex--align-middle">
            <span>| Go to page:</span>
            <FormField
              id="go-to-page-textbox"
              aria-label="Enter page number"
              className="margin-left-4"
              style={{ width: '50px' }}
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const { value } = e.target;
                const thePage = value ? Number(value) - 1 : 0;
                gotoPage(thePage);
              }}
            />
          </span>
          <Dropdown
            id="go-to-page-dropdown"
            aria-label="Select page range"
            style={{ width: '130px' }}
            value={String(pageSize)}
            onChange={(e) => {
              const { value } = e.target;
              if (value !== '') {
                setPageSize(Number(value));
              }
            }}
            options={creategGotToPageOptions(data.length, numRowsPerPage).map(
              (pSize) => {
                return { text: `Show ${pSize}`, value: String(pSize) };
              },
            )}
          />
        </div>
      )}
    </>
  );
};

Table.propTypes = {
  /** Adds custom class names */
  className: PropTypes.string,
  /** Sets the table columns */
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      Header: PropTypes.string,
      accessor: PropTypes.string,
    }),
  ).isRequired,
  /** Data representing table rows */
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  /** Sets table-layout: fixed */
  isFixedLayout: PropTypes.bool,
  /** Makes table 100% width of parent container */
  isFullWidth: PropTypes.bool,
  /** Sets striped even/odd rows */
  isStriped: PropTypes.bool,
  /** Shows pagination */
  isPaginated: PropTypes.bool,
  /** If paginated, the number of rows per page */
  numRowsPerPage: PropTypes.number,
};

Table.defaultProps = {
  className: '',
  isFixedLayout: false,
  isFullWidth: false,
  isStriped: false,
  isPaginated: false,
  numRowsPerPage: 10,
};

export default Table;
