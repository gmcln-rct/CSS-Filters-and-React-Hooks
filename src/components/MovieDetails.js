import React, { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';

const MovieDetails = ({ Movie }) => {
  const { removeMovie } = useContext(MovieContext);
  return (
    <li onClick={() => removeMovie(Movie.id)}>
      <div className="title"><span className='movie-title'>{Movie.title}</span>    </div>
      <div className="director">Director: {Movie.director}</div>
      <div className="year">Year: {Movie.year}</div>
    </li>
  );
}



export default MovieDetails;