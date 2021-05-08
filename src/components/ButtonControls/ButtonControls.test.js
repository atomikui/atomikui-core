import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import ButtonControls from './ButtonControls';
import Button from '../button';

configure({ adapter: new Adapter() });

describe('<ButtonControls />', () => {
  let buttonControls;

  beforeEach(() => {
    buttonControls = shallow(
      <ButtonControls>
        <Button>Chevrolet</Button>
        <Button>Ford</Button>
      </ButtonControls>,
    );
  });

  it('Should render without errors', () => {
    expect(buttonControls).toHaveLength(1);
  });

  it('Should render children', () => {
    expect(buttonControls.children()).toHaveLength(2);
  });

  it('Should set items in reverse order', () => {
    buttonControls.setProps({ isReverse: true });
    expect(buttonControls.find(Button).first().children().text()).toBe('Ford');
  });

  it('Should set stack children', () => {
    buttonControls.setProps({ isBlock: true });
    expect(buttonControls.hasClass('is-block')).toBeTruthy();
  });

  test.each(['left', 'center', 'right'])(
    'Should set the aligment class to atomikui-button-controls--align-%p',
    (align) => {
      buttonControls.setProps({ align });
      expect(
        buttonControls.hasClass(`atomikui-button-controls--align-${align}`),
      ).toBeTruthy();
    },
  );

  test.each(['small', 'medium', 'large', 'extra-large'])(
    'Should set the aligment class to atomikui-button-controls--breakpoint-%p',
    (breakpoint) => {
      buttonControls.setProps({ breakpoint });
      expect(
        buttonControls.hasClass(
          `atomikui-button-controls--breakpoint-${breakpoint}`,
        ),
      ).toBeTruthy();
    },
  );
});
