import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mount, configure } from 'enzyme';
import Dropdown from './Dropdown';

configure({ adapter: new Adapter() });

describe('<Dropdown />', () => {
  let dropdown;

  beforeEach(() => {
    dropdown = mount(
      <Dropdown
        label="Select a Color"
        value="Orange"
        theme="red"
        options={[
          { text: 'Red', value: 'Red' },
          { text: 'Orange', value: 'Orange' },
          { text: 'Yellow', value: 'Yellow' },
          { text: 'Green', value: 'Green' },
          { text: 'Blue', value: 'Blue' },
          { text: 'Purple', value: 'Purple' },
        ]}
      />,
    );
  });

  it('Should render with 7 options', () => {
    expect(dropdown.find('select').children().length).toBe(7);
  });

  it('Should render a default value', () => {
    dropdown.setProps({ value: null, defaultValue: 'Blue' });
    expect(dropdown.find('select').props().defaultValue).toBe('Blue');
  });

  it('Should handle an error', () => {
    dropdown.setProps({ hasError: true, errorText: 'This field is required' });

    expect(
      dropdown.find('[data-test-id="dropdown"]').hasClass('has-error'),
    ).toBeTruthy();
    expect(dropdown.find('Hint')).toBeTruthy();
    expect(dropdown.find('Hint').text()).toBe('This field is required');
  });

  it('Should render a hint', () => {
    dropdown.setProps({ helpText: 'Some helpful text' });

    expect(dropdown.find('Hint')).toBeTruthy();
    expect(dropdown.find('Hint').text()).toBe('Some helpful text');
  });

  it('Should set color themes', () => {
    expect(
      dropdown
        .find('[data-test-id="dropdown"]')
        .hasClass('atomikui-dropdown--red'),
    ).toBeTruthy();

    dropdown.setProps({ themeVariant: 'light' });

    expect(
      dropdown
        .find('[data-test-id="dropdown"]')
        .hasClass('atomikui-dropdown--red-light'),
    ).toBeTruthy();
  });
});
