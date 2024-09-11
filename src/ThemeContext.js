import React, { createContext, useState } from 'react';

// Create a Context object
export const ThemeContext = createContext();

// Create a Provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // State for managing the theme

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children} {/* Render children components */}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;