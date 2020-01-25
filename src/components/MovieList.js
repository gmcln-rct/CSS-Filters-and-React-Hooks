import React, { useContext } from 'react';
import MovieDetails from './MovieDetails';
import { MovieContext } from '../contexts/MovieContext';

const MovieList = () => {
  const { Movies } = useContext(MovieContext);
  return Movies.length ? (
    <div className="Movie-list">
      <ul>
        {Movies.map(Movie => {
          return ( <MovieDetails Movie={Movie} key={Movie.id} /> );
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No Movies to read. Hello free time :).</div>
  );
}

export default MovieList;