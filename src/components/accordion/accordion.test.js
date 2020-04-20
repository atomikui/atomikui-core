import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mount, configure } from 'enzyme';
import Accordion from './Accordion';

configure({ adapter: new Adapter() });

describe('<Accordion />', () => {
  let accordion;

  beforeEach(() => {
    accordion = mount(
      <Accordion
        panels={[
          { label: 'Panel Heading 1', content: 'Panel 1 content...' },
          { label: 'Panel Heading 2', content: 'Panel 2 content...' },
          { label: 'Panel Heading 3', content: 'Panel 3 content...' },
        ]}
      />,
    );
  });

  it('Should render without errors', () => {
    expect(accordion.length).toBe(1);
  });

  it('Should expand a panel', () => {
    accordion.find('input').first().simulate('change');

    expect(
      accordion
        .find('.rcl-accordion__panel__label')
        .first()
        .prop('aria-expanded'),
    ).toBe(true);
  });

  it('Should expand a multiple panels', () => {
    accordion.setProps({ multipleOpen: true });

    accordion
      .find('input')
      .first()
      .simulate('change', { target: { checked: true } });

    accordion
      .find('input')
      .last()
      .simulate('change', { target: { checked: true } });

    expect(
      accordion
        .find('.rcl-accordion__panel__label')
        .first()
        .prop('aria-expanded'),
    ).toBe(true);

    expect(
      accordion
        .find('.rcl-accordion__panel__label')
        .last()
        .prop('aria-expanded'),
    ).toBe(true);
  });
});
