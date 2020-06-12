import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Jumbotron from './Jumbotron';
import { TestScheduler } from 'jest';

configure({ adapter: new Adapter() });

describe('<Jumbotron />', () => {
  let jumbotron;

  beforeEach(() => {
    jumbotron = shallow(
      <Jumbotron>
        <h1 className="text-size-24 text-size-42@medium">Jumbtron Headline</h1>
        <p className="text-size-14 text-size-16@medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          eget ligula id nibh finibus semper. Donec cursus in lacus a commodo.
        </p>
      </Jumbotron>,
    );
  });

  it('Should render without errors', () => {
    expect(jumbotron.length).toBe(1);
  });

  test.each([
    'red',
    'orange',
    'yellow',
    'gold',
    'green',
    'light-blue',
    'medium-blue',
    'dark-blue',
    'light-gray',
    'medium-gray',
    'dark-gray',
    'black',
  ])(
    'Should set the theme variant class as atomikui-jumbotron--%p',
    (variant) => {
      jumbotron.setProps({ variant });
      expect(
        jumbotron
          .find('.atomikui-jumbotron')
          .hasClass(`atomikui-jumbotron--${variant}`),
      ).toBe(true);
    },
  );
});
