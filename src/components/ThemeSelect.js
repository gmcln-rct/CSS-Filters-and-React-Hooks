import React, { useContext, useState } from "react";

import { ThemeContext } from "../contexts/ThemeContext";

const ThemeSelect = () => {
  const {   blur, grayscale, chooseTheme } = useContext(ThemeContext);

  const [filterTheme] = useState('');

  function handleChange(e) {
    chooseTheme(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    // chooseTheme(e.target.value);
  };


    return (
      <form onSubmit={handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={filterTheme} onChange={handleChange}>
              <option value="none">No Filter</option>
              <option value="blur(10px)">Blur</option>
              <option value="grayscale(100%)">GrayScale</option>
            <option value="sepia(1))">Sepia</option>
              <option value="grayscale(100%)">GrayScale</option>
          </select>
        </label>
        <input type="submit" value="Choose Filter" />
      </form>
    );
  };


export default ThemeSelect;
