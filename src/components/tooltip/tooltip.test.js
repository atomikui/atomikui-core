import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mount, configure } from 'enzyme';
import Button from '../button';
import Tooltip from './Tooltip';

configure({ adapter: new Adapter() });

const map = {};
document.addEventListener = jest.fn((event, cb) => {
  map[event] = cb;
});

describe('<Tooltip />', () => {
  let tooltip;

  beforeEach(() => {
    tooltip = mount(
      <Tooltip
        trigger={<Button size="md">button</Button>}
        theme="warning"
        align="top-left"
      >
        This is a tooltip
      </Tooltip>,
    );
  });

  afterEach(() => {
    tooltip.find('Button').simulate('blur');
  });

  it('Should create and remove tooltip', () => {
    tooltip.find('Button').simulate('focus');
    expect(tooltip.find('[data-test-id="tooltip"]')).toBeTruthy();

    tooltip.find('Button').simulate('blur');
    expect(tooltip.find('[data-test-id="tooltip"]').length).toBe(0);
  });

  it('Should create themed tooltip', () => {
    tooltip.find('Button').simulate('focus');
    expect(
      document
        .querySelector('[data-test-id="tooltip"]')
        .classList.contains('atomikui-tooltip--warning'),
    ).toBeTruthy();
  });

  test.each([
    'right',
    'left',
    'bottom-left',
    'bottom-center',
    'bottom-right',
    'top-left',
    'top-center',
    'top-right',
  ])(
    'Should set the position modifier class as .atomikui-tooltip--align-%p',
    (align) => {
      tooltip.setProps({ align });
      tooltip.find('Button').simulate('focus');

      expect(
        document
          .querySelector('[data-test-id="tooltip"]')
          .classList.contains(`atomikui-tooltip--align-${align}`),
      ).toBeTruthy();
    },
  );

  it('Should close the tooltip on Click', () => {
    tooltip.setProps({ triggerOnClick: true });

    tooltip.find('Button').simulate('click');
    expect(tooltip.find('[data-test-id="tooltip"]')).toBeTruthy();
  });
});
