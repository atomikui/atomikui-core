import Adapter from 'enzyme-adapter-react-16';
import React, { useEffect } from 'react';
import { mount, configure } from 'enzyme';
import { withToastProvider, useToast } from '.';

configure({ adapter: new Adapter() });

describe('useToast', () => {
  const App = withToastProvider(() => {
    const toast = useToast();

    const createToast = (type, message) => {
      toast.add(type, message);
    };

    useEffect(() => {
      createToast('info', 'This is a toast message.');
    }, []);

    return <button onClick={createToast}>Add Toast</button>;
  });

  let app;

  beforeEach(() => {
    app = mount(<App />);
  });

  it('Should create a toaster', () => {
    expect(app.find('[data-test-id="toaster"]')).toHaveLength(1);
  });

  it('Should create one toast', () => {
    expect(app.find('[data-test-id="toaster"]').children()).toHaveLength(1);
  });
});
