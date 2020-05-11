import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Toaster from './Toaster';

configure({ adapter: new Adapter() });

describe('<Toaster />', () => {
  let toaster;

  beforeEach(() => {
    toaster = shallow(
      <Toaster position="top-center">
        <div>Child</div>
      </Toaster>,
    );
  });

  it('Should render without errors', () => {
    expect(toaster.length).toBe(1);
  });

  it('Should render children', () => {
    expect(toaster.children().length).toBe(1);
  });

  it('Should set a position modifier class', () => {
    expect(toaster.hasClass('atomikui-toaster--top-center')).toBe(true);
  });
});
