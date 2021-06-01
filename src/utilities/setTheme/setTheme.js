const setTheme = (baseClass, theme, themeVariant) => {
  const componentTmene = `${baseClass}--${theme}`;
  const componentThemeVariant = themeVariant ? `-${themeVariant}` : '';
  return `${componentTmene}${componentThemeVariant}`;
};

export default setTheme;
