import React from 'react';
import './App.css';
import { ThemeProvider } from './ThemeContext'; // Import ThemeProvider
import ThemedComponent from './ThemedComponent'; // Import a component to use the theme

function App() {
  return (
    <ThemeProvider> {/* Wrap the app with ThemeProvider */}
      <div className="App">
        <h1>Theme Switcher App</h1>
        <ThemedComponent /> {/* Component that consumes the theme context */}
      </div>
    </ThemeProvider>
  );
}

export default App;
