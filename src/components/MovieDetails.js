import React, { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';

const MovieDetails = ({ movie }) => {
  const { removeMovie } = useContext(MovieContext);
  return (
    <li onClick={() => removeMovie(movie.id)}>
      <div className="title"><span className='movie-title'>{movie.title}</span> </div>
      <div className="director">Director: {movie.director}</div>
      <div className="year">Year: {movie.year}</div>
    </li>
  );
}

export default MovieDetails;