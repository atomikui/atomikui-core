/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import List from './List';
import ListItem from './ListItem';

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
    'Should apply .rcl-list--%p modifier class',
    (modifier) => {
      list.setProps({ type: modifier });

      expect(list.hasClass(`rcl-list--${modifier}`)).toBe(true);
    },
  );

  test.each(['center', 'right'])(
    'Should apply .rcl-list--%p modifier class',
    (modifier) => {
      list.setProps({ align: modifier });

      expect(list.hasClass(`rcl-list--align-${modifier}`)).toBe(true);
    },
  );
});
