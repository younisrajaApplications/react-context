import React, { useContext } from 'react';
import './App.css';
import { ThemeProvider, ThemeContext } from './ThemeContext'; // Import ThemeProvider
import ThemedComponent from './ThemedComponent'; // Import a component to use the theme

function App() {

  return (
    <ThemeProvider> {/* Wrap the app with ThemeProvider */}
      <div className="App">
        <UpdatedContent />
      </div>
    </ThemeProvider>
  );
}

function UpdatedContent() {

  return (
    <>
    <Content />
    <ThemedComponent />
    </>
  );
}

function Content() {

  const {theme} = useContext(ThemeContext);

  return (
    <h1 style={{backgroundColor: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', padding: '20px', borderRadius: '5px' }}>Theme Switcher App</h1>
  );
}

export default App;
