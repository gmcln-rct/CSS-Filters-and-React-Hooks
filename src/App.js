import React from 'react';
import Navbar from './components/Navbar';
import ThemeSelect from './components/ThemeSelect';

import MovieList from './components/MovieList';
import NewMovieForm from './components/NewMovieForm';

import MovieContextProvider from './contexts/MovieContext';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
      <ThemeContextProvider>
        <div className="main-app">
            <MovieContextProvider>
              <Navbar />
              <MovieList />
              <NewMovieForm />
            </MovieContextProvider>
          < ThemeSelect />
        </div>
      </ThemeContextProvider>
  );
}

export default App;
