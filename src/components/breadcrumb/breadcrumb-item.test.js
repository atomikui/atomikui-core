/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import BreadcrumbItem from './BreadcrumbItem';

configure({ adapter: new Adapter() });

describe('<BreadcrumbItem />', () => {
  let breadcrumbItem;

  beforeEach(() => {
    breadcrumbItem = shallow(
      <BreadcrumbItem href="/home">Home</BreadcrumbItem>,
    );
  });

  it('Should render without errors', () => {
    expect(breadcrumbItem.length).toBe(1);
  });

  it('Should render a Link for non-active BreadcrumbItem', () => {
    expect(breadcrumbItem.find('li').find('Link').length).toBe(1);
  });

  it('Should not render a Link for the active BreadcrumbItem', () => {
    breadcrumbItem.setProps({ active: true });
    expect(breadcrumbItem.find('li').find('Link').length).toBe(0);
  });
});
