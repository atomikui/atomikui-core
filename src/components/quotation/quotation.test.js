import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mount, configure } from 'enzyme';
import Quotation from './Quotation';

configure({ adapter: new Adapter() });

describe('<Quotation />', () => {
  let quotation;

  beforeEach(() => {
    quotation = mount(
      <Quotation
        cite="https://www.atomikui.com"
        footer={
          <>
            - Alan Eicker (<cite>Atomik UI</cite>)
          </>
        }
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed quam a
        odio egestas suscipit. Aenean suscipit eros eleifend, tempus elit non,
        malesuada tortor. Lorem ipsum dolor sit amet.
      </Quotation>,
    );
  });

  it('Should render "left quote" icon svg for pullquote variant', () => {
    quotation.setProps({ pullquote: true });
    console.log(quotation.debug());
    expect(quotation.find('svg.fa-quote-left')).toBeTruthy();
  });
});
