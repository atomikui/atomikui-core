import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Button from './Button';

configure({ adapter: new Adapter() });

describe('<Button />', () => {
  let button;

  beforeEach(() => {
    button = shallow(
      <Button
        classes="btn--custom"
        size="lg"
        variant="primary"
        type="submit"
        block
        disabled
      >
        <span>Submit</span>
      </Button>,
    );
  });

  it('Should render without errors', () => {
    expect(button.length).toBe(1);
  });

  it('Should render children', () => {
    expect(button.find('span').length).toBe(1);
    expect(button.find('span').text()).toBe('Submit');
  });

  it('Should render theme based on `variant prop`', () => {
    expect(button.find('.btn').hasClass('btn--primary')).toBe(true);
  });

  it('Should accept custom classes', () => {
    expect(button.find('.btn').hasClass('btn--custom')).toBe(true);
  });

  it('Should render button as block', () => {
    expect(button.find('.btn').hasClass('btn--block')).toBe(true);
  });

  it('Should render button size variant', () => {
    expect(button.find('.btn').hasClass('btn--lg')).toBe(true);
  });

  it('Should rbe able to disable button', () => {
    expect(button.find('.btn').prop('disabled')).toBe(true);
  });
});
