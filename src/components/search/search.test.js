import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mount, configure } from 'enzyme';
import Search from './Search';
import sinon from 'sinon';

configure({ adapter: new Adapter() });

describe('<Search />', () => {
  let search;
  let onSubmitSpy;

  beforeEach(() => {
    onSubmitSpy = sinon.spy();
    search = mount(<Search onSubmit={onSubmitSpy} shape="pill" />);
  });

  it('Should trigger onSubmit callback on submit button click', () => {
    search.find('button[data-test-id="search-btn"]').simulate('click');
    expect(onSubmitSpy.called).toBeTruthy();
  });

  it('Should trigger onSubmit callback on enter key press', () => {
    search
      .find('input[data-test-id="search-input"]')
      .simulate('keyUp', { keyCode: 13, which: 13 });
    expect(onSubmitSpy.called).toBeTruthy();
  });

  it('Should not trigger onSubmit callback on key up if not enter key', () => {
    search
      .find('input[data-test-id="search-input"]')
      .simulate('keyUp', { keyCode: 65, which: 65 });
    expect(onSubmitSpy.called).toBeFalsy();
  });

  it('Should set shape variant', () => {
    expect(
      search.find('[data-test-id="search"]').hasClass('atomikui-search--pill'),
    ).toBeTruthy();
  });
});
