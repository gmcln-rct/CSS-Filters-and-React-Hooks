import React, { useContext, useState } from "react";

import { ThemeContext } from "../contexts/ThemeContext";

const ThemeSelect = () => {
  const { filterTheme, setFilterTheme } = useContext(ThemeContext);

  function handleChange(e) {
    setFilterTheme(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();

  };


    return (
      <form onSubmit={handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={filterTheme} onChange={this.handleChange}>
            <option value="none">No Filter</option>
            <option value="blur">blur</option>
            <option value="grayscale">GrayScale</option>
          </select>
        </label>
        <input type="submit" value="Choose Filter" />
      </form>
    );
  };


export default ThemeSelect;
