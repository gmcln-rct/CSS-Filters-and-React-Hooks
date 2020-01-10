import React from 'react';

// COMPONENTS
import BookList from './components/BookList';
import Navbar from './components/Navbar';

// CONTEXT
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;