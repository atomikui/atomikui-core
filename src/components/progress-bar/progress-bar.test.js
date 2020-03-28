/* eslint-disable no-undef */
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
        classes="progress-bar--custom"
        variant="info"
        now={now}
        label={`${now}%`}
      />,
    );
  });

  it('Should render without errors', () => {
    expect(progressBar.length).toBe(1);
  });

  it('Should set the theme based on the `variant prop`', () => {
    expect(progressBar.hasClass('progress-bar--info')).toBe(true);
  });

  it('Should set a custom class', () => {
    expect(progressBar.hasClass('progress-bar--custom')).toBe(true);
  });

  it('Should set the label', () => {
    expect(progressBar.find('.progress-bar__label').text()).toBe('60%');
  });

  it('Should set the width to 60%', () => {
    expect(progressBar.find('.progress-bar__bar').prop('style')).toHaveProperty(
      'width',
      '60%',
    );
  });
});
