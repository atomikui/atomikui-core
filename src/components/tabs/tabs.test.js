import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mount, configure } from 'enzyme';
import Tabs from './Tabs';

configure({ adapter: new Adapter() });

describe('<Tabs />', () => {
  let tabs;

  beforeEach(() => {
    tabs = mount(
      <div>
        <Tabs>
          <Tabs.Item label="Tab One" content="1" />
          <Tabs.Item label="Tab Two" content="2" />
          <Tabs.Item label="Tab Three" content="3" />
        </Tabs>
      </div>,
    );
  });

  it('Should render 3 tabs and 3 tab panels', () => {
    expect(tabs.find('TabItem')).toHaveLength(3);
    expect(tabs.find('TabPanel')).toHaveLength(3);
  });

  it('Should change tab panel on click', () => {
    tabs.find('TabItem').at(1).simulate('click');
    expect(
      tabs.find('TabPanel').at(1).children().hasClass('is-active'),
    ).toBeTruthy();
  });
});
