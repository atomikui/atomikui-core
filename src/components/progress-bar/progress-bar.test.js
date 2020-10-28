import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import ProgressBar from './ProgressBar';

configure({ adapter: new Adapter() });

describe('<ProgressBar />', () => {
  let progressBar;

  beforeEach(() => {
    const now = 60;
    progressBar = shallow(
      <ProgressBar
        className="atomikui-progress-bar--custom"
        theme="info"
        shape="pill"
        thickness="thin"
        now={now}
        label={`${now}%`}
        animated
      />,
    );
  });

  test.each(['info', 'pill', 'thin', 'animated'])(
    'Should set ProgressBar theme based on prop value: %p',
    (prop) => {
      expect(progressBar.hasClass(`atomikui-progress-bar--${prop}`)).toBe(true);
    },
  );

  it('Should set a custom class', () => {
    expect(progressBar.hasClass('atomikui-progress-bar--custom')).toBe(true);
  });

  it('Should set the label', () => {
    expect(progressBar.find('[data-test-id="progress-bar-label"]').text()).toBe(
      '60%',
    );
  });

  it('Should set the width to 60%', () => {
    expect(
      progressBar.find('.atomikui-progress-bar__bar').prop('style'),
    ).toHaveProperty('width', '60%');
  });

  it('Should render dark theme', () => {
    progressBar.setProps({ theme: 'red' });
    expect(progressBar.hasClass('atomikui-progress-bar--red')).toBe(true);
  });

  it('Should render light theme', () => {
    progressBar.setProps({ theme: 'red', themeVariant: 'light' });
    expect(progressBar.hasClass('atomikui-progress-bar--red-light')).toBe(true);
  });
});
