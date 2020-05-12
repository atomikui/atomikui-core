import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import { shallow, mount, configure } from 'enzyme';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import QuickActions from './QuickActions';

configure({ adapter: new Adapter() });

describe('<QuickActions />', () => {
  let quickActions;
  let onclickSpy;

  beforeEach(() => {
    onclickSpy = sinon.spy();

    quickActions = shallow(
      <QuickActions
        actions={[
          {
            label: 'Save',
            icon: <Icon icon={faSave} />,
            onClick: onclickSpy,
          },
          {
            label: 'Copy',
            icon: <Icon icon={faSave} />,
            onClick: onclickSpy,
          },
          {
            label: 'Print',
            icon: <Icon icon={faSave} />,
            onClick: onclickSpy,
          },
          {
            label: 'Share',
            icon: <Icon icon={faSave} />,
            onClick: onclickSpy,
          },
        ]}
      />,
    );
  });

  it('Should render without errors', () => {
    expect(quickActions.length).toBe(1);
  });

  it('Should throw an error if incorrect number of actions is recieved', () => {
    expect(() => mount(<QuickActions />)).toThrow();
  });
});
