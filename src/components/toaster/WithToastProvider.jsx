import React, { useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import ToastContext from './toast-context';
import Toaster from './Toaster';
import Toast from './Toast';
import Portal from '../portal';

const withToastProvider = (Component) => {
  const WithToastProvider = (props) => {
    const [toasts, setToasts] = useState([]);

    const add = useCallback(
      (theme, content) => {
        const id = shortid.generate();

        setToasts([...toasts, { id, theme, content }]);
      },
      [toasts],
    );

    const remove = useCallback(
      (id) => {
        return setToasts(
          toasts.filter((toast) => {
            return toast.id !== id;
          }),
        );
      },
      [toasts],
    );

    const providerValue = useMemo(() => {
      return { add, remove };
    }, [add, remove]);

    const { position, duration } = props;

    return (
      <ToastContext.Provider value={providerValue}>
        <Component {...props} />
        <Portal container={document.body}>
          <Toaster position={position}>
            {toasts.map(({ id, content, theme }) => {
              return (
                <Toast
                  key={id}
                  theme={theme}
                  duration={duration}
                  remove={() => {
                    return remove(id);
                  }}
                >
                  {content}
                </Toast>
              );
            })}
          </Toaster>
        </Portal>
      </ToastContext.Provider>
    );
  };

  WithToastProvider.propTypes = {
    position: PropTypes.oneOf([
      'top-left',
      'top-center',
      'bottom-left',
      'bottom-center',
      'bottom-right',
    ]),
    duration: PropTypes.number,
  };

  WithToastProvider.defaultProps = {
    position: null,
    duration: 5000,
  };

  return WithToastProvider;
};

export default withToastProvider;
