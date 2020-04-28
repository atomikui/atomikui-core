/* eslint-disable no-undef */
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

  it('Should render without errors', () => {
    expect(accordionItem.length).toBe(1);
  });

  it('Should render without errors', () => {
    expect(
      accordionItem.find('.rcl-accordion-item__body__content').children()
        .length,
    ).toBe(1);
  });

  it('Should render a label', () => {
    expect(
      accordionItem.find('.rcl-accordion-item__trigger__label').text(),
    ).toBe('Accordion Heading 1');
  });

  it('Should set the state internally', () => {
    accordionItem.find('button').simulate('click');

    expect(
      accordionItem.find('.rcl-accordion-item').prop('aria-expanded'),
    ).toBe(true);
  });

  it('Should trigger handleClick callback', () => {
    accordionItem.setProps({ handleClick: handleClickSpy });
    accordionItem.find('button').simulate('click');

    expect(handleClickSpy.called).toBe(true);
  });
});
