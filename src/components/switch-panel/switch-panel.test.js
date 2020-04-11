import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import { mount, configure } from 'enzyme';
import SwitchPanel from './SwitchPanel';
import Switch from '../switch';

configure({ adapter: new Adapter() });

describe('<SwitchPanel />', () => {
  let switchPanel;
  let onChangeSpy;

  beforeEach(() => {
    onChangeSpy = sinon.spy();

    switchPanel = mount(
      <SwitchPanel>
        <Switch label="Label" onChange={onChangeSpy} />
        <Switch label="Label" onChange={onChangeSpy} />
        <Switch label="Label" onChange={onChangeSpy} />
      </SwitchPanel>,
    );
  });

  it('Should render without errors', () => {
    expect(switchPanel.length).toBe(1);
  });

  it('Should render children', () => {
    expect(switchPanel.find('.switch-panel').children().length).toBe(3);
  });
});
