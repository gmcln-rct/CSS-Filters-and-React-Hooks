import React, { useContext, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";

const NewMovieForm = () => {
    const { addMovie } = useContext(MovieContext);
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [year, setYear] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        addMovie(title, director, year);
        setTitle("");
        setDirector("");
    };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Movie title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="director name"
        value={director}
        onChange={e => setDirector(e.target.value)}
      />
      <input
        type="text"
        placeholder="year"
        value={year}
        onChange={e => setYear(e.target.value)}
      />
      <input type="submit" value="Add Movie" />
    </form>
  );
};

export default NewMovieForm;