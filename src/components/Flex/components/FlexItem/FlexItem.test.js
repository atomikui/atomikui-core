import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mount, configure } from 'enzyme';
import FlexItem from './FlexItem';

configure({ adapter: new Adapter() });

describe('<Component />', () => {
  let flexItem;

  beforeEach(() => {
    flexItem = mount(
      <FlexItem>
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

  it('Should render children with flex CSS rule', () => {
    flexItem.setProps({ flex: '1' });
    expect(flexItem.children().first().props().style.flex).toBe('1');
  });

  it('Should render children with flex-shrink CSS rule', () => {
    flexItem.setProps({ shrink: '1' });
    expect(flexItem.children().first().props().style.flexShrink).toBe('1');
  });
});
