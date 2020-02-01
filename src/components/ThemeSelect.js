import React, { useContext, useState } from "react";

import { ThemeContext } from "../contexts/ThemeContext";
  let themeName;
const ThemeSelect = () => {
  const {  chooseTheme } = useContext(ThemeContext);

  const [filterTheme] = useState('');


  function handleChange(e) {
    chooseTheme(e.target.value);
    const { option, value, label } = e.target;

  };

  function handleSubmit(e) {
    e.preventDefault();
  };


    return (
      <div className="theme-form">
        <form onSubmit={handleSubmit}>
          <h1>CSS Filters</h1>
          <h2>
            Choose from dropdown to explore how different CSS filters affect
            page elements.
          </h2>
          <br />
          <select className="select-css" value={filterTheme} onChange={handleChange}>
            <option value="none">Choose Filter</option>
            <option value="blur(10px)">Blur</option>
            <option value="brightness(3)">Brightness</option>
            <option value="contrast(3)">Contrast</option>
            <option value="drop-shadow(16px 16px 10px rgba(0,0,0,0.9)">
              Drop Shadow
            </option>
            <option value="grayscale(100%)">GrayScale</option>
            <option value="invert(100%)">Invert</option>
            <option value="sepia(100%)">Sepia</option>
            <option value="saturate(0%)">Saturate/Desaturate</option>
            <option value="none">Clear Filter</option>
          </select>
            <div>Current Filter: {filterTheme}</div>
          {/* <input type="submit" value="Choose Filter" /> */}
        </form>
      </div>
    );
  };


export default ThemeSelect;
