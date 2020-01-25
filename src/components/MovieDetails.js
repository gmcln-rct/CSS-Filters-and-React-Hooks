import React, { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';

const MovieDetails = ({ Movie }) => {
  const { removeMovie } = useContext(MovieContext);
  return (
    <li onClick={() => removeMovie(Movie.id)}>
      <div className="title">{Movie.title}</div>
      <div className="director">{Movie.director}</div>
    </li>
  );
}

export default MovieDetails;