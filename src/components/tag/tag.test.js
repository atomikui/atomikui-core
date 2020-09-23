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

  it('Should render without errors', () => {
    expect(tag.length).toBe(1);
  });
});
