import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import { shallow, configure } from 'enzyme';
import CheckList from './CheckList';

configure({ adapter: new Adapter() });

describe('<CheckList />', () => {
  let onCheckSpy;
  let checkList;

  const items = [
    { id: 1, description: 'Take laundry to the cleaners', isChecked: true },
    { id: 2, description: 'Grocery shopping', isChecked: false },
    { id: 3, description: 'Cut grass', isChecked: false },
    { id: 4, description: 'Wash kitchen floor', isChecked: false },
  ];

  beforeEach(() => {
    onCheckSpy = sinon.spy();
    checkList = shallow(<CheckList items={items} onCheck={onCheckSpy} />);
  });

  it('Should render without errors', () => {
    expect(checkList).toHaveLength(1);
    expect(
      checkList.find('[data-test-id="check-list"]').children(),
    ).toHaveLength(4);
  });

  it('Should triiger onCheck callback when item is clicked', () => {
    checkList.find('Button').first().simulate('click');
    expect(
      onCheckSpy.withArgs({ id: 1, index: 0, isChecked: false }).called,
    ).toBeTruthy();
  });
});
