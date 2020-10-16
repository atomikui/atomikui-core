import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mount, configure } from 'enzyme';
import Collapse from './Collapse';

configure({ adapter: new Adapter() });

describe('<Collapse />', () => {
  let collapse;

  beforeEach(() => {
    collapse = mount(<Collapse toggleText="Car Brands">Content...</Collapse>);
  });

  it('Should set the initial height of the collapse body', () => {
    expect(collapse.find('.atomikui-collapse__bd').prop('style').height).toBe(
      '0px',
    );
  });

  it('Should toggle content visibility', () => {
    collapse.find('button.atomikui-collapse__trigger').simulate('click');

    expect(
      collapse.find('button.atomikui-collapse__trigger').hasClass('is-open'),
    ).toBe(true);

    collapse.find('button.atomikui-collapse__trigger').simulate('click');

    expect(
      collapse.find('button.atomikui-collapse__trigger').hasClass('is-open'),
    ).toBe(false);
  });
});
