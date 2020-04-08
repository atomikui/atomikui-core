/* eslint-disable no-undef */
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

  it('Should render withput errors', () => {
    expect(autocomplete.length).toBe(1);
  });

  it('Should trigger onChange callback', () => {
    autocomplete.find('input').simulate('change');
    autocomplete.find('.auto-complete__list > :last-child').simulate('click');

    expect(onChangeSpy.withArgs('Tangerine').called).toBe(true);
  });
});
