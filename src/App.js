import React from 'react';
import Navbar from './components/Navbar';
import MovieContextProvider from './contexts/MovieContext';
import MovieList from './components/MovieList';
import NewMovieForm from './components/NewMovieForm';


function App() {
  return (
    <div className="main-app">
      <MovieContextProvider>
        <Navbar />
        <MovieList />
        <NewMovieForm />
      </MovieContextProvider>
    </div>
  );
}

export default App;
