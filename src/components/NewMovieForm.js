import React, { useContext, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";

const NewMovieForm = () => {
  const { addMovie } = useContext(MovieContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    //console.log(title, author);
    addMovie(title, author);
    setTitle("");
    setAuthor("");
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
        placeholder="author name"
        value={author}
        onChange={e => setAuthor(e.target.value)}
      />
      <input type="submit" value="add Movie" />
    </form>
  );
};
