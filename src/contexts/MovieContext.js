import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const movieContext = createContext();

const movieContextProvider = (props) => {
  const [movies, setmovies] = useState([
    { title: "Citizen Kane", director: "Orson Welles", year: "1941", id: 1 },
    { title: "The Waterboy", director: "Frank Coraci", year: "1998", id: 2 },
    { title: "Remains of the Day", director: "Frank Coraci", year: "1989", id: 3 },
    { title: "Moonlight", director: "Barry Jenkins", year: "2017", id: 4 },
    { title: "Harakiri", director: "Masaki Kobayashi", year: "1962", id: 5 }
  ]);

  const addmovie = (title, director, year) => {
    setmovies([...movies, {title, director, year, id: uuid()}]);
  };
  const removemovie = (id) => {
    setmovies(movies.filter(movie => movie.id !== id));
  }

  return (
    <movieContext.Provider value={{ movies, addmovie, removemovie }}>
      {props.children}
    </movieContext.Provider>
  );
}
 
export default movieContextProvider;