/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import PageItem from './PageItem';

configure({ adapter: new Adapter() });

describe('<PageItem />', () => {
  let pageItem;

  beforeEach(() => {
    pageItem = shallow(<PageItem>1</PageItem>);
  });

  it('Should render without errors', () => {
    expect(pageItem.length).toBe(1);
  });

  it('Should render an href', () => {
    pageItem.setProps({ href: '/' });
    expect(pageItem.find('Link').prop('href')).toBeDefined();
  });

  it('Should render an onClick', () => {
    pageItem.setProps({ onClick: () => {} });
    expect(pageItem.find('Link').prop('onClick')).toBeDefined();
  });
});
