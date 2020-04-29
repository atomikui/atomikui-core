import { createContext } from 'react';

const ThemeContext = createContext({ theme: process.env.THEME });

export default ThemeContext;
