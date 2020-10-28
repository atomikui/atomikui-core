import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { configure, mount } from 'enzyme';
import Portal from './Portal';

configure({ adapter: new Adapter() });

describe('<Portal />', () => {
  let Container = (props) => {
    const el = global.document.createElement('div');
    el.id = 'portal-root';
    global.document.body.appendChild(el);

    return (
      <>
        <Portal
          container={global.document.querySelector('#portal-root')}
          {...props}
        >
          This content will be rendered in the portal
        </Portal>
      </>
    );
  };

  afterEach(() => {
    global.document.body.removeChild(
      global.document.querySelector('#portal-root'),
    );
  });

  it('Should render without errors', () => {
    mount(<Container />);
    expect(global.document.body.querySelector('#portal-root').innerHTML).toBe(
      'This content will be rendered in the portal',
    );
  });

  it('Should not render in target contaner if disabled', () => {
    mount(<Container disabled />);
    expect(
      global.document.body.querySelector('#portal-root').innerHTML,
    ).not.toBe('This content will be rendered in the portal');
  });
});
