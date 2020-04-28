import React from 'react';

console.log(process.env.REACT_APP_THEME);

const useTheme = (Component) => {
  const UseTheme = (props) => {
    return <Component {...{ ...props, theme: process.env.REACT_APP_THEME }} />;
  };

  return UseTheme;
};

export default useTheme;
