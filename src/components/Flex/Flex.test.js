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

  it('Should render children', () => {
    expect(flex.find('[data-test-id="flex"]').children()).toHaveLength(3);
  });

  it('Should set custom class', () => {
    flex.setProps({ className: 'my-class' });
    expect(
      flex.find('[data-test-id="flex"]').hasClass('my-class'),
    ).toBeTruthy();
  });

  it('Should set class to apply flex wrapping', () => {
    flex.setProps({ wrap: true });
    expect(
      flex.find('[data-test-id="flex"]').hasClass('atomikui-flex--wrap'),
    ).toBeTruthy();
  });

  test.each(['4', '8', '16', '24', '32', '40', '48', '56'])(
    'Should set spacing class to atomikui-flex--spacing-%p',
    (spacing) => {
      flex.setProps({ spacing });
      expect(
        flex
          .find('[data-test-id="flex"]')
          .hasClass(`atomikui-flex--spacing-${spacing}`),
      ).toBeTruthy();
    },
  );

  test.each(['flex-start', 'center', 'flex-end', 'stretch'])(
    'Should set alignment class to atomikui-flex--align-%p',
    (align) => {
      flex.setProps({ align });
      expect(
        flex
          .find('[data-test-id="flex"]')
          .hasClass(`atomikui-flex--align-${align}`),
      ).toBeTruthy();
    },
  );

  test.each([
    'flex-start',
    'center',
    'flex-end',
    'space-between',
    'space-around',
    'space-evenly',
  ])(
    'Should set justification class to atomikui-flex--justify-%p',
    (justify) => {
      flex.setProps({ justify });
      expect(
        flex
          .find('[data-test-id="flex"]')
          .hasClass(`atomikui-flex--justify-${justify}`),
      ).toBeTruthy();
    },
  );

  test.each(['row', 'row-reverse', 'column', 'column-reverse'])(
    'Should set direction class to atomikui-flex--direction-%p',
    (direction) => {
      flex.setProps({ direction });
      expect(
        flex
          .find('[data-test-id="flex"]')
          .hasClass(`atomikui-flex--direction-${direction}`),
      ).toBeTruthy();
    },
  );

  test.each(['small', 'medium', 'large', 'extra-large'])(
    'Should set breakpoint class to atomikui-flex--breakpoint-%p',
    (breakpoint) => {
      flex.setProps({ breakpoint });
      expect(
        flex
          .find('[data-test-id="flex"]')
          .hasClass(`atomikui-flex--breakpoint-${breakpoint}`),
      ).toBeTruthy();
    },
  );
});
