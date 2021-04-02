import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import TabPanel from './TabPanel';

configure({ adapter: new Adapter() });

describe('<TabPanel />', () => {
  let tabPanel;

  beforeEach(() => {
    tabPanel = shallow(
      <TabPanel isActive={true}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sem
        elit, aliquam sit amet elit et, porta hendrerit turpis. Donec metus
        nulla, aliquam sagittis sagittis vel, maximus sit amet turpis. Curabitur
        nec dapibus quam.
      </TabPanel>,
    );
  });

  it('Should render without errors', () => {
    expect(tabPanel).toBeTruthy();
  });
});
