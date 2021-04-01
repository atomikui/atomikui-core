import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import { shallow, configure } from 'enzyme';
import SwitchGroup from './SwitchGroup';
import Switch from '../switch';

configure({ adapter: new Adapter() });

describe('<SwitchGroup />', () => {
  let switchGroup;
  let onChangeSpy;

  beforeEach(() => {
    onChangeSpy = sinon.spy();

    switchGroup = shallow(
      <SwitchGroup>
        <Switch label="Label" onChange={onChangeSpy} />
        <Switch label="Label" onChange={onChangeSpy} />
        <Switch label="Label" onChange={onChangeSpy} />
      </SwitchGroup>,
    );
  });

  it('Should render children', () => {
    expect(
      switchGroup.find('[data-test-id="switch-group-list"]').children(),
    ).toHaveLength(3);
  });
});
