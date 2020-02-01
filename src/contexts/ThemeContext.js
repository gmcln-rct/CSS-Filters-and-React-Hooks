import React, { Component, createContext, useState } from "react";

export const ThemeContext = createContext();


const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState([
    { name: "none", filter: "none", id: 1 },
    { name: "blur", filter: "blur(10px)", id: 2 },
    { name: "blur", filter: "blur(10px)", id: 3 }

  ]);




  return (
    <ThemeContext.Provider value={{ FilterThemes, setFilterTheme } }>
      {props.children}
    </ThemeContext.Provider>
  );

}

export default ThemeContextProvider;
