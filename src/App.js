import React  from 'react';

import Navbar from './components/Navbar';
import ThemeSelect from './components/ThemeSelect';
import MovieList from './components/MovieList';
import NewMovieForm from './components/NewMovieForm';
import ThemeNav from './components/ThemeNav';

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
           < ThemeNav />
          < ThemeSelect />
          </ThemeContextProvider>
        </div>
  );
}

export default App;
