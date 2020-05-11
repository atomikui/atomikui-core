import Adapter from 'enzyme-adapter-react-16';
import React, { useEffect } from 'react';
import { mount, configure } from 'enzyme';
import { withToastProvider, useToast } from '.';

configure({ adapter: new Adapter() });

describe('withToastProvider', () => {
  const App = withToastProvider(() => {
    const toast = useToast();

    useEffect(() => {
      toast.add('info', 'This is a toast message.');
    }, []);

    return <div />;
  });

  let app;

  beforeEach(() => {
    app = mount(<App />);
  });

  it('Should remove a toast', () => {
    app.find('Button').simulate('click');
    expect(app.find('.atomikui-toaster').children().length).toBe(0);
  });
});
