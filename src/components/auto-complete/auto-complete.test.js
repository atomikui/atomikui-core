import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import { mount, configure } from 'enzyme';
import AutoComplete from './AutoComplete';

configure({ adapter: new Adapter() });

describe('<AutoComplete />', () => {
  let autocomplete;
  let onChangeSpy;

  beforeEach(() => {
    onChangeSpy = sinon.spy();

    autocomplete = mount(
      <AutoComplete
        label="Select Your Favorite Fruit"
        onChange={onChangeSpy}
        items={[
          { value: 'Apple' },
          { value: 'Banana' },
          { value: 'Cantaloupe' },
          { value: 'Grape' },
          { value: 'Mango' },
          { value: 'Nectarine' },
          { value: 'Orange' },
          { value: 'Pear' },
          { value: 'Peach' },
          { value: 'Strawberry' },
          { value: 'Tangerine' },
        ]}
      />,
    );
  });

  it('Should trigger onChange callback with selected item', () => {
    autocomplete.find('input').simulate('change');
    autocomplete
      .find('[data-test-id="autocomplete-list"]')
      .children()
      .last()
      .simulate('click');

    expect(onChangeSpy.withArgs('Tangerine').called).toBeTruthy();
  });

  it('Should trigger onChange callback with empty value', () => {
    autocomplete
      .find('input')
      .simulate('keydown', { key: 'Escape', keyCode: 27, which: 27 });

    expect(onChangeSpy.withArgs('').called).toBeTruthy();
  });

  it('Should set the class of the selected item to `.is-selected`', () => {
    autocomplete.find('input').simulate('change');
    autocomplete
      .find('[data-test-id="autocomplete-list"]')
      .children()
      .first()
      .simulate('click');
    autocomplete.find('input').simulate('change');

    expect(
      autocomplete
        .find('[data-test-id="autocomplete-list"]')
        .children()
        .first()
        .hasClass('is-selected'),
    ).toBeTruthy();
  });
});
