import React from 'react';

const useTheme = (Component) => {
  return (props) => {
    return <Component {...{ ...props, theme: process.env.THEME }} />;
  };
};

export default useTheme;
