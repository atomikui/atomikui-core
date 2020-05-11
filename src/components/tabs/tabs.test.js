import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mount, configure } from 'enzyme';
import sinon from 'sinon';
import Tabs from './Tabs';
import Tab from './Tab';

configure({ adapter: new Adapter() });

describe('<Tabs />', () => {
  let tabs;
  let onChangeSpy;

  beforeEach(() => {
    onChangeSpy = sinon.spy();

    tabs = mount(
      <div>
        <Tabs onChange={onChangeSpy}>
          <Tab label="Tab One" />
          <Tab label="Tab Two" />
          <Tab label="Tab Three" />
        </Tabs>
      </div>,
    );
  });

  it('Should render without errors', () => {
    expect(tabs.length).toBe(1);
  });

  it('Should trigger onChange when a tab is clicked', () => {
    tabs.find('Tab').first().simulate('click');

    expect(onChangeSpy.called).toBe(true);
  });
});
