import React from 'react';
import Navbar from './components/Navbar';
import movieContextProvider from './contexts/movieContext';
import movieList from './components/movieList';
import NewmovieForm from './components/NewmovieForm';


function App() {
  return (
    <div className="main-app">
      <ThemeContextProvider>
        <movieContextProvider>
          <Navbar />
          <movieList />
          <NewmovieForm />
        </movieContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
