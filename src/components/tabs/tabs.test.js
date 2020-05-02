/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import sinon from 'sinon';
import Tabs from './Tabs';
import Tab from './Tab';
import TabPanel from './TabPanel';

configure({ adapter: new Adapter() });

describe('<Tabs />', () => {
  let tabs;
  let onChangeSpy;

  beforeEach(() => {
    onChangeSpy = sinon.spy();

    tabs = shallow(
      <div>
        <Tabs onChange={onChangeSpy}>
          <Tab label="Tab One" />
          <Tab label="Tab Two" />
          <Tab label="Tab Three" />
        </Tabs>
        <TabPanel state={[1, 0]}>Item One</TabPanel>
        <TabPanel state={[1, 1]}>Item Two</TabPanel>
        <TabPanel state={[1, 2]}>Item Three</TabPanel>
      </div>,
    );
  });

  it('Should render without errors', () => {
    expect(tabs.length).toBe(1);
  });
});
