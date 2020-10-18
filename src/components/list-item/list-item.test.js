import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import ListItem from './ListItem';

configure({ adapter: new Adapter() });

describe('<ListItem />', () => {
  let listItem;

  beforeEach(() => {
    listItem = shallow(<ListItem className="custom-class">Item 1</ListItem>);
  });

  it('Should set a custom class', () => {
    expect(listItem.hasClass('custom-class')).toBe(true);
  });
});
