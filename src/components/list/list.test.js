import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import List from './List';
import ListItem from '../list-item/ListItem';

configure({ adapter: new Adapter() });

describe('<List />', () => {
  let list;

  beforeEach(() => {
    list = shallow(
      <List>
        <ListItem>Apple</ListItem>
        <ListItem>Orange</ListItem>
        <ListItem>Banana</ListItem>
        <ListItem>Mango</ListItem>
      </List>,
    );
  });

  it('Should render without errors', () => {
    expect(list.length).toBe(1);
  });

  it('Should render children', () => {
    expect(list.find('ul').children().length).toBe(4);
  });

  it('Should render an <ol /> if type is "ordered"', () => {
    list.setProps({ type: 'ordered' });

    expect(list.find('ol').length).toBe(1);
  });

  test.each(['bulleted', 'ordered', 'horizontal'])(
    'Should apply .atomikui-list--%p modifier class',
    (modifier) => {
      list.setProps({ type: modifier });

      expect(
        list.find('.atomikui-list').hasClass(`atomikui-list--${modifier}`),
      ).toBe(true);
    },
  );

  test.each(['center', 'right'])(
    'Should apply .atomikui-list--%p modifier class',
    (modifier) => {
      list.setProps({ align: modifier });

      expect(
        list
          .find('.atomikui-list')
          .hasClass(`atomikui-list--align-${modifier}`),
      ).toBe(true);
    },
  );

  it('Should render inside of a <nav /> element if type id menu', () => {
    list.setProps({ type: 'menu' });

    expect(list.find('nav').length).toBe(1);
  });
});
