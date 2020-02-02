import React, { useContext, useState } from "react";

import { MovieContext } from "../contexts/MovieContext";
import { ThemeContext } from "../contexts/ThemeContext";

const NewMovieForm = () => {
    const { addMovie } = useContext(MovieContext);
    const { filterTheme } = useContext(ThemeContext);

    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [year, setYear] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        addMovie(title, director, year);
        setTitle("");
        setDirector("");
        setYear("");
    };

  return (
    <div className='movie-form-container'>

      <form className='movie-form' onSubmit={handleSubmit} style={{ filter: filterTheme }}>
        <input
          type="text"
          placeholder="Movie Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Director Name"
          value={director}
          onChange={e => setDirector(e.target.value)}
        />
        <input
          type="text"
          placeholder="Year"
          value={year}
          onChange={e => setYear(e.target.value)}
        />
        <input type="submit" value="Add movie" />

      </form>

        <div className='filter-theme'>Current Filter: {filterTheme}</div>
    </div>
  );
};

export default NewMovieForm;