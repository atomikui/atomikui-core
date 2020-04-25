/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount, configure } from 'enzyme';
import Button from '../button';
import Tooltip from './Tooltip';

configure({ adapter: new Adapter() });

const map = {};
document.addEventListener = jest.fn((event, cb) => {
  map[event] = cb;
});

describe('withToastProvider', () => {
  const App = () => {
    return (
      <Tooltip
        data-tooltip="This is a tooltip"
        variant="warning"
        triggerOnClick
      >
        <Button size="md">button</Button>
      </Tooltip>
    );
  };

  let app;

  beforeEach(() => {
    app = mount(<App />);
  });

  it('Should create tooltip', () => {
    app.find('Button').simulate('click');
    expect(app.find('#rcl-tooltip').length).toBe(1);
  });

  it('Should create themed tooltip', () => {
    app.find('Button').simulate('click');
    expect(app.find('#rcl-tooltip').hasClass('rcl-tooltip--warning')).toBe(
      true,
    );
  });

  it('Should dismiss on document click', () => {
    app.find('Button').simulate('click');

    act(() => {
      map.click({
        target: {
          getAttribute() {
            return null;
          },
        },
      });
    });

    expect(app.find('#rcl-tooltip').length).toBe(0);
  });
});
