import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Hint from './Hint';

configure({ adapter: new Adapter() });

describe('<Hint />', () => {
  let hint;

  beforeEach(() => {
    hint = shallow(
      <Hint type="error" className="rcl-hint--custon-class">
        This is a hint
      </Hint>,
    );
  });

  it('Should render without errors', () => {
    expect(hint.length).toBe(1);
  });

  it('Should render children', () => {
    expect(hint.length).toBe(1);
    expect(hint.text()).toBe('This is a hint');
  });

  it('Should render theme based on `type` prop', () => {
    expect(hint.hasClass('rcl-hint--error')).toBe(true);
  });

  it('Should render with a custom class', () => {
    expect(hint.hasClass('rcl-hint--custon-class')).toBe(true);
  });
});
