import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mount, configure } from 'enzyme';
import ButtonControls from './ButtonControls';
import Button from '../button';

configure({ adapter: new Adapter() });

describe('<ButtonControls />', () => {
  let buttonControls;

  beforeEach(() => {
    buttonControls = mount(
      <ButtonControls>
        <Button>Chevrolet</Button>
        <Button>Ford</Button>
      </ButtonControls>,
    );
  });

  it('Should render without errors', () => {
    expect(buttonControls).toHaveLength(1);
  });
});
