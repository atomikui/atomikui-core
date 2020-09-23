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

  it('Should render without errors', () => {
    expect(progressBar.length).toBe(1);
  });

  it('Should set the bar color class based on the `theme` prop', () => {
    expect(progressBar.hasClass('atomikui-progress-bar--info')).toBe(true);
  });

  it('Should set the bar color class based on the `shape` prop', () => {
    expect(progressBar.hasClass('atomikui-progress-bar--pill')).toBe(true);
  });

  it('Should set the bar color class based on the `thickness` prop', () => {
    expect(progressBar.hasClass('atomikui-progress-bar--thin')).toBe(true);
  });

  it('Should render as animated based on `animated` prop', () => {
    expect(progressBar.hasClass('atomikui-progress-bar--animated')).toBe(true);
  });

  it('Should set a custom class', () => {
    expect(progressBar.hasClass('atomikui-progress-bar--custom')).toBe(true);
  });

  it('Should set the label', () => {
    expect(progressBar.find('.atomikui-progress-bar__label').text()).toBe(
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
