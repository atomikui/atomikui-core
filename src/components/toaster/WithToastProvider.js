import React, { useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import generateId from '../../utilities/generateId';
import ToastContext from './toast-context';
import Toaster from './Toaster';
import Toast from './Toast';

const withToastProvider = (Component) => {
  const WithToastProvider = (props) => {
    const [toasts, setToasts] = useState([]);

    const add = (type, content) => {
      const id = generateId();

      setToasts([...toasts, { id, type, content }]);
    };

    const remove = (id) => {
      return setToasts(
        toasts.filter((toast) => {
          return toast.id !== id;
        }),
      );
    };

    const providerValue = useMemo(() => {
      return { add, remove };
    }, [toasts]);

    const { position, duration } = props;

    return (
      <ToastContext.Provider value={providerValue}>
        <Component {...props} />
        {createPortal(
          <Toaster position={position}>
            {toasts.map(({ id, content, type }, i) => {
              return (
                <Toast
                  key={id}
                  type={type}
                  duration={duration}
                  remove={() => {
                    return remove(id);
                  }}
                >
                  {content}
                </Toast>
              );
            })}
          </Toaster>,
          document.body,
        )}
      </ToastContext.Provider>
    );
  };

  return WithToastProvider;
};

export default withToastProvider;
