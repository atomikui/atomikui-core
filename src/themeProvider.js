import React from 'react';

const useTheme = (Component) => {
  const UseTheme = (props) => {
    return <Component {...{ ...props, theme: process.env.THEME }} />;
  };

  return UseTheme;
};

export default useTheme;
