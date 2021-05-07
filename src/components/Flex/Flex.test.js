import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mount, configure } from 'enzyme';
import Flex from './Flex';

configure({ adapter: new Adapter() });

describe('<Flex />', () => {
  let flex;

  beforeEach(() => {
    flex = mount(
      <Flex>
        <Flex.Item>Item 1</Flex.Item>
        <Flex.Item>Item 1</Flex.Item>
        <Flex.Item>Item 1</Flex.Item>
      </Flex>,
    );
  });

  it('Should render without errors', () => {
    expect(flex).toHaveLength(1);
  });
});
