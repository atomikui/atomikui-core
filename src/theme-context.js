import { createContext } from 'react';

const ThemeContext = createContext({ theme: process.env.DARK_MODE });

export default ThemeContext;
