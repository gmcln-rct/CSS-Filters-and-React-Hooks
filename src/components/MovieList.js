import React, { useContext } from 'react';
import movieDetails from './movieDetails';
import { movieContext } from '../contexts/movieContext';

const movieList = () => {
  const { movies } = useContext(movieContext);
  let movieVar = movies.length === 1 ? 'movie' : 'movies';
  return movies.length ? (
    <div className="movie-list">
      <div className="subheader"><p>You have {movies.length} {movieVar} to watch. <br /> Chop-chop!</p></div>
      
      <ul>
        {movies.map(movie => {
          return ( <movieDetails movie={movie} key={movie.id} /> );
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">You have no movies to watch. Perhaps try reading?</div>
  );
}

export default movieList;