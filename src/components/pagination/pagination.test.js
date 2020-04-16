/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Pagination from './Pagination';
import PageItem from './PageItem';

configure({ adapter: new Adapter() });

describe('<Pagination />', () => {
  let pagination;

  beforeEach(() => {
    pagination = shallow(
      <Pagination>
        <PageItem href="#">Previous</PageItem>
        <PageItem href="#">1</PageItem>
        <PageItem href="#">2</PageItem>
        <PageItem href="#">3</PageItem>
        <PageItem href="#">4</PageItem>
        <PageItem href="#">Next</PageItem>
      </Pagination>,
    );
  });

  it('Should render without errors', () => {
    expect(pagination.length).toBe(1);
  });

  it('Should render 6 PageItems', () => {
    expect(pagination.find('PageItem').length).toBe(6);
  });
});
