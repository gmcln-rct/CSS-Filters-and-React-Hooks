import React, { useContext } from 'react';
import { movieContext } from '../contexts/movieContext';

const movieDetails = ({ movie }) => {
  const { removemovie } = useContext(movieContext);
  return (
    <li onClick={() => removemovie(movie.id)}>
      <div className="title"><span className='movie-title'>{movie.title}</span> </div>
      <div className="director">Director: {movie.director}</div>
      <div className="year">Year: {movie.year}</div>
    </li>
  );
}



export default movieDetails;