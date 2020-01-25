import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
  const [Movies, setMovies] = useState([
    {title: 'name of the wind', director: 'patrick rothfuss', id: 1},
    {title: 'the final empire', director: 'brandon sanderson', id: 2},
  ]);
  const addMovie = (title, director) => {
    setMovies([...Movies, {title, director, id: uuid()}]);
  };
  const removeMovie = (id) => {
    setMovies(Movies.filter(Movie => Movie.id !== id));
  }

  return (
    <MovieContext.Provider value={{ Movies, addMovie, removeMovie }}>
      {props.children}
    </MovieContext.Provider>
  );
}
 
export default MovieContextProvider;