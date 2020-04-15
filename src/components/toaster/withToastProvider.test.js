/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React, { useEffect } from 'react';
import { mount, configure } from 'enzyme';
import { withToastProvider, useToast } from '.';

configure({ adapter: new Adapter() });

describe('withToastProvider', () => {
  const App = withToastProvider(() => {
    const toast = useToast();

    const createToast = () => {
      toast.add('info', 'This is a toast message.');
    };

    useEffect(() => {
      createToast();
    }, []);

    return <button onClick={createToast}>Add Toast</button>;
  });

  let app;

  beforeEach(() => {
    app = mount(<App />);
  });

  it('Should create a toaster', () => {});
});
