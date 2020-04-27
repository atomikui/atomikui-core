/* eslint-disable no-undef */
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
        data-tooltip="This is a tooltip"
        theme="warning"
        align="top-left"
      >
        <Button size="md">button</Button>
      </Tooltip>,
    );
  });

  afterEach(() => {
    tooltip.find('Button').simulate('blur');
  });

  it('Should create and remove tooltip', () => {
    tooltip.find('Button').simulate('focus');
    expect(tooltip.find('#rcl-tooltip').length).toBe(1);

    tooltip.find('Button').simulate('blur');
    expect(tooltip.find('#rcl-tooltip').length).toBe(0);
  });

  it('Should create themed tooltip', () => {
    tooltip.find('Button').simulate('focus');
    expect(
      document
        .querySelector('#rcl-tooltip')
        .classList.contains('rcl-tooltip--warning'),
    ).toBe(true);
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
    'Should set the position modifier class as .rcl-tooltip--align-%p',
    (align) => {
      tooltip.setProps({ align });
      tooltip.find('Button').simulate('focus');
      expect(
        document
          .querySelector('#rcl-tooltip')
          .classList.contains(`rcl-tooltip--align-${align}`),
      ).toBe(true);
    },
  );
});
