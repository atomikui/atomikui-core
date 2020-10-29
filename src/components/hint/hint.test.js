import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Hint from './Hint';

configure({ adapter: new Adapter() });

describe('<Hint />', () => {
  let hint;

  beforeEach(() => {
    hint = shallow(
      <Hint type="error" className="atomikui-hint--custon-class">
        This is a hint
      </Hint>,
    );
  });

  it('Should render children', () => {
    expect(hint).toHaveLength(1);
    expect(hint.text()).toBe('This is a hint');
  });

  it('Should render theme based on `type` prop', () => {
    expect(hint.hasClass('atomikui-hint--error')).toBeTruthy();
  });

  it('Should render with a custom class', () => {
    expect(hint.hasClass('atomikui-hint--custon-class')).toBeTruthy();
  });
});
