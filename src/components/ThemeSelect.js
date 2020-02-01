import React, { useContext, useState } from "react";

import { ThemeContext } from "../contexts/ThemeContext";

const ThemeSelect = () => {
  const { FilterTheme, setFilterTheme } = useContext(ThemeContext);
  const [ filter, setFilter ] = useState('none');

  function handleChange(e) {
    setFilterTheme(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();

  };



    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={FilterTheme} onChange={this.handleChange}>
            <option value="blur">blur</option>
            <option value="grayscale">GrayScale</option>
            <option value="invert">Invert</option>
            <option value="sepia">Sepia</option>
          </select>
        </label>
        <input type="submit" value="Choose Filter" />
      </form>
    );
  };


export default ThemeSelect;
