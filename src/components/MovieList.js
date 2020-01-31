import React, { useContext } from 'react';
import MovieDetails from './MovieDetails';
import { MovieContext } from '../contexts/MovieContext';

const MovieList = () => {
  const { Movies } = useContext(MovieContext);
  let movieVar = Movies.length === 1 ? 'movie' : 'movies';
  return Movies.length ? (
    <div className="Movie-list">
      <div className="subheader"><p>You have {Movies.length} {movieVar} to watch. <br /> Chop-chop!</p></div>
      
      <ul>
        {Movies.map(Movie => {
          return ( <MovieDetails Movie={Movie} key={Movie.id} /> );
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">You have no movies to watch. Perhaps try reading?</div>
  );
}

export default MovieList;