import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import { mount, configure } from 'enzyme';
import CheckOptionGroup from './CheckOptionGroup';
import CheckOption from './CheckOption';

configure({ adapter: new Adapter() });

describe('<CheckOptionGroup />', () => {
  let checkOptionGroup;
  let onChangeSpy;

  beforeEach(() => {
    checkOptionSpy = sinon.spy();

    checkOptionGroup = mount(
      <CheckOptionGroup onChange={onChangeSpy}>
        <CheckOption />
      </CheckOptionGroup>,
    );
  });

  it('Should render without errors', () => {
    expect(checkOptionGroup).toHaveLength(1);
  });
});
