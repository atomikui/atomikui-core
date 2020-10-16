import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mount, configure } from 'enzyme';
import Card from './Card';

configure({ adapter: new Adapter() });

describe('<Card />', () => {
  let card;

  beforeEach(() => {
    card = mount(
      <Card title="Card Title" footer={<div />}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum
        lectus vel libero gravida, sit amet sodales ipsum maximus.
      </Card>,
    );
  });

  it('Should render a header', () => {
    expect(card.find('.atomikui-card__header')).toBeTruthy();
  });

  it('Should render a body', () => {
    expect(card.find('.atomikui-card__body')).toBeTruthy();
  });

  it('Should render a footer', () => {
    expect(card.find('.atomikui-card__footer')).toBeTruthy();
  });
});
