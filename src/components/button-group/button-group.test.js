/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import ButtonGroup from './ButtonGroup';
import Button from '../button';

configure({ adapter: new Adapter() });

describe('<Component />', () => {
  let buttonGroup;

  beforeEach(() => {
    buttonGroup = shallow(
      <ButtonGroup label="Favorite Car Brand">
        <Button>Chevrolet</Button>
        <Button classes="is-selected">Ford</Button>
        <Button>GMC</Button>
      </ButtonGroup>,
    );
  });

  it('Should render without errors', () => {
    expect(buttonGroup.length).toBe(1);
  });
});
