/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Pagination from './Pagination';
import Link from '../link';

configure({ adapter: new Adapter() });

describe('<Pagination />', () => {
  let pagination;

  beforeEach(() => {
    pagination = shallow(
      <Pagination>
        <Link href="#">Previous</Link>
        <Link href="#">1</Link>
        <Link href="#">2</Link>
        <Link href="#">3</Link>
        <Link href="#">4</Link>
        <Link href="#">Next</Link>
      </Pagination>,
    );
  });

  it('Should render without errors', () => {
    expect(pagination.length).toBe(1);
  });

  it('Should render 6 PageItems', () => {
    expect(pagination.find('Link').length).toBe(6);
  });
});
