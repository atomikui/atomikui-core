import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mount, configure } from 'enzyme';
import Randomize from './Randomize';

configure({ adapter: new Adapter() });

describe('<Randomize />', () => {
  let randomize;

  const flushPromises = () =>
    new Promise((resolve) => process.nextTick(resolve));

  beforeEach(() => {
    randomize = mount(
      <Randomize duration={5000}>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          viverra eu est a rutrum.
        </span>
        <span>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos.
        </span>
        <span>
          Cras semper ornare fringilla. Curabitur viverra sodales orci, eu
          hendrerit orci dapibus ut.
        </span>
        <span>Praesent rutrum ex eget ante pretium pulvinar.</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          metus metus, vestibulum ornare dapibus in, efficitur non nisi.
        </span>
      </Randomize>,
    );
  });

  it('Should render without errors', () => {
    expect(randomize).toHaveLength(1);
    expect(randomize.children()).toHaveLength(1);
  });

  it('Should pause randomized content', async () => {
    await flushPromises();
    jest.useFakeTimers();

    const initialContent = randomize.find('span').text();

    randomize.find('span').simulate('focus');

    jest.runAllTimers();

    const updatedText = randomize.find('span').text();

    expect(updatedText).toBe(initialContent);
  });
});
