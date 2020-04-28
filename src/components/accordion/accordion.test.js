import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mount, configure } from 'enzyme';
import Accordion from './Accordion';
import AccordionItem from './AccordionItem';

configure({ adapter: new Adapter() });

describe('<Accordion />', () => {
  let accordion;

  beforeEach(() => {
    accordion = mount(
      <Accordion>
        <AccordionItem label="Accordion Heading 1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          diam justo, luctus eu tincidunt at, commodo vitae arcu. Suspendisse
          quis ultricies diam.
        </AccordionItem>
        <AccordionItem label="Accordion Heading 2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          diam justo, luctus eu tincidunt at, commodo vitae arcu. Suspendisse
          quis ultricies diam.
        </AccordionItem>
        <AccordionItem label="Accordion Heading 3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          diam justo, luctus eu tincidunt at, commodo vitae arcu. Suspendisse
          quis ultricies diam.
        </AccordionItem>
      </Accordion>,
    );
  });

  it('Should render without errors', () => {
    expect(accordion.length).toBe(1);
  });

  it('Should should render 3 children', () => {
    expect(accordion.find('.rcl-accordion').children().length).toBe(3);
  });

  it('Should handle the click event if `multipleOpen` prop is false', () => {
    accordion.find('.rcl-accordion-item__trigger').first().simulate('click');

    expect(
      accordion.find('.rcl-accordion-item').first().prop('aria-expanded'),
    ).toBe(true);

    accordion.find('.rcl-accordion-item__trigger').first().simulate('click');

    expect(
      accordion.find('.rcl-accordion-item').first().prop('aria-expanded'),
    ).toBe(false);
  });
});
