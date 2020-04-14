import React, { useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import classnames from 'classnames';
import generateId from '../../utilities/generateId';
import ToastContext from './toast-context';
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

    const { position } = props;

    return (
      <ToastContext.Provider value={providerValue}>
        <Component {...props} />
        {createPortal(
          <ul
            className={classnames('toaster', {
              [`toaster--${position}`]: position,
            })}
          >
            {toasts.map(({ id, content, type }, i) => {
              const isNew = i + 1 === toasts.length;

              return (
                <Toast
                  key={id}
                  isNew={isNew}
                  type={type}
                  remove={() => {
                    return remove(id);
                  }}
                >
                  {content}
                </Toast>
              );
            })}
          </ul>,
          document.body,
        )}
      </ToastContext.Provider>
    );
  };

  return WithToastProvider;
};

export default withToastProvider;
