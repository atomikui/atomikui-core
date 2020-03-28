/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Hint from './Hint';

configure({ adapter: new Adapter() });

describe('<Hint />', () => {
  let hint;

  beforeEach(() => {
    hint = shallow(
      <Hint type="error" classes="hint--custon-class">
        <span>This is a hint</span>
      </Hint>,
    );
  });

  it('Should render without errors', () => {
    expect(hint.length).toBe(1);
  });

  it('Should render children', () => {
    expect(hint.find('span').length).toBe(1);
    expect(hint.find('span').text()).toBe('This is a hint');
  });

  it('Should render theme based on `type` prop', () => {
    expect(hint.find('.hint').hasClass('hint--error')).toBe(true);
  });

  it('Should render with a custom class', () => {
    expect(hint.find('.hint').hasClass('hint--custon-class')).toBe(true);
  });
});
