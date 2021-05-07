import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mount, configure } from 'enzyme';
import FlexItem from './FlexItem';

configure({ adapter: new Adapter() });

describe('<Component />', () => {
  let flexItem;

  beforeEach(() => {
    flexItem = mount(
      <FlexItem flexBasis="1" flexShrink="1">
        <div />
      </FlexItem>,
    );
  });

  it('Should render without errors', () => {
    expect(flexItem).toHaveLength(1);
  });

  it('Should render children', () => {
    expect(flexItem.children()).toHaveLength(1);
  });

  it('Should render children with flexBasis', () => {
    expect(flexItem.children().first().props().style.flex).toBe('1');
  });

  it('Should render children with flexShrink', () => {
    expect(flexItem.children().first().props().style.flexShrink).toBe('1');
  });
});
