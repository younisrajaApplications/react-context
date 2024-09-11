// ThemedComponent.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext'; // Import ThemeContext

function ThemedComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext); // Consume the context

  return (
    <div style={{ backgroundColor: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', padding: '20px', borderRadius: '5px' }}>
      <h2>The current theme is {theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ThemedComponent;
