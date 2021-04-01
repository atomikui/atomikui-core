import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mount, configure } from 'enzyme';
import sinon from 'sinon';
import Tabs from './Tabs';

configure({ adapter: new Adapter() });

describe('<Tabs />', () => {
  let tabs;
  let onChangeSpy;

  beforeEach(() => {
    onChangeSpy = sinon.spy();

    tabs = mount(
      <div>
        <Tabs onChange={onChangeSpy}>
          <Tabs.Button label="Tab One" />
          <Tabs.Button label="Tab Two" />
          <Tabs.Button label="Tab Three" />
        </Tabs>
      </div>,
    );
  });

  it('Should trigger onChange when a tab is clicked', () => {
    tabs.find('TabButton').first().simulate('click');

    expect(onChangeSpy.called).toBeTruthy();
  });
});
