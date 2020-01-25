import React from 'react';
import Navbar from './components/Navbar';
import MovieContextProvider from './contexts/MovieContext';
import MovieList from './components/MovieList';


function App() {
  return (
    <div className="main-app">
      <MovieContextProvider>
        <Navbar />
        <MovieList />
      </MovieContextProvider>
    </div>
  );
}

export default App;
