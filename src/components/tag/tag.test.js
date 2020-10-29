import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Tag from './Tag';

configure({ adapter: new Adapter() });

describe('<Tag />', () => {
  let tag;

  beforeEach(() => {
    tag = shallow(<Tag>New</Tag>);
  });

  it('Should render dark theme', () => {
    tag.setProps({ theme: 'red' });
    expect(tag.hasClass('atomikui-tag--red')).toBeTruthy();
  });

  it('Should render light theme', () => {
    tag.setProps({ theme: 'red', themeVariant: 'light' });
    expect(tag.hasClass('atomikui-tag--red-light')).toBeTruthy();
  });
});
