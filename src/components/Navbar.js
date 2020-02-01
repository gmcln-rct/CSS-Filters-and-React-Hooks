import React, { useContext } from 'react';

import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {

  const { filterTheme } = useContext(ThemeContext);
  return (
    <div className="navbar" style={{ filter: filterTheme }}>
      <h1>Move Watchlist</h1>
    </div>
  );
}
 
export default Navbar;