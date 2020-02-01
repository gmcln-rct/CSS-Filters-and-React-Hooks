import React  from 'react';

import Navbar from './components/Navbar';
import ThemeSelect from './components/ThemeSelect';
import MovieList from './components/MovieList';
import NewMovieForm from './components/NewMovieForm';

import MovieContextProvider from './contexts/MovieContext';
import ThemeContextProvider from './contexts/ThemeContext';


function App() {


  return (
    <div className="main-app">
        <ThemeContextProvider>
            <MovieContextProvider>
              <Navbar />
              <MovieList />
              <NewMovieForm />
            </MovieContextProvider>
          < ThemeSelect />
          </ThemeContextProvider>
        </div>
  );
}

export default App;
