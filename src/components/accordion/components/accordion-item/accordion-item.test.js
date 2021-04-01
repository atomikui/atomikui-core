import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mount, configure } from 'enzyme';
import sinon from 'sinon';
import AccordionItem from './AccordionItem';

configure({ adapter: new Adapter() });

describe('<AccordionItem />', () => {
  let accordionItem;
  let handleClickSpy;

  beforeEach(() => {
    handleClickSpy = sinon.spy();

    accordionItem = mount(
      <AccordionItem label="Accordion Heading 1">
        Accordion Content
      </AccordionItem>,
    );
  });

  it('Should render a label', () => {
    expect(
      accordionItem
        .find('[data-test-id="accordion-item-trigger-label"]')
        .text(),
    ).toBe('Accordion Heading 1');
  });

  it('Should set the state internally', () => {
    accordionItem
      .find('[data-test-id="accordion-item-trigger"]')
      .simulate('click');

    expect(
      accordionItem
        .find('[data-test-id="accordion-item-trigger"]')
        .prop('aria-expanded'),
    ).toBeTruthy();
  });

  it('Should trigger handleClick callback', () => {
    accordionItem.setProps({ handleClick: handleClickSpy });
    accordionItem
      .find('[data-test-id="accordion-item-trigger"]')
      .simulate('click');

    expect(handleClickSpy.called).toBeTruthy();
  });
});
