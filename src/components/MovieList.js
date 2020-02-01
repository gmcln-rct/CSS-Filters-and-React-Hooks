import React, { useContext } from 'react';
import MovieDetails from './MovieDetails';

import { MovieContext } from '../contexts/MovieContext';
import { ThemeContext } from "../contexts/ThemeContext";

const MovieList = () => {
  const { Movies } = useContext(MovieContext);
  const { filterTheme } = useContext(ThemeContext);
  let movieVar = Movies.length === 1 ? 'movie' : 'movies';
  
  return Movies.length ? (
    <div className="movie-list" style={{ filter: filterTheme }}>
      <div className="subheader"><p>You have {Movies.length} {movieVar} to watch. <br /> Chop-chop!</p></div>
      <ul>
        {Movies.map(movie => {
          return ( <MovieDetails movie={movie} key={movie.id} /> );
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">You have no movies to watch. Perhaps try reading?</div>
  );
}

export default MovieList;