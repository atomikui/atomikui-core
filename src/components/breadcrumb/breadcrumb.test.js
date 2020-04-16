/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Breadcrumb from './Breadcrumb';
import BreadcrumbItem from './BreadcrumbItem';

configure({ adapter: new Adapter() });

describe('<Breadcrumb />', () => {
  let breadcrumb;

  beforeEach(() => {
    breadcrumb = shallow(
      <Breadcrumb>
        <BreadcrumbItem href="/home">Home</BreadcrumbItem>
        <BreadcrumbItem href="/products">Products</BreadcrumbItem>
        <BreadcrumbItem href="/t-shirts" active>
          T-Shirts
        </BreadcrumbItem>
      </Breadcrumb>,
    );
  });

  it('Should render without errors', () => {
    expect(breadcrumb.length).toBe(1);
  });

  it('Should render 4 children', () => {
    expect(breadcrumb.find('BreadcrumbItem').length).toBe(3);
  });

  it('Should should not render a Link for the active BreadcrumbItem', () => {
    const link = breadcrumb.find('BreadcrumbItem').last().dive().find('Link');
    expect(link.length).toBe(0);
  });
});
