import React, { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';

const Navbar = () => {
  const { Movies } = useContext(MovieContext);
  return (
    <div className="navbar">
      <h1>Movies To Watch</h1>
    </div>
  );
}
 
export default Navbar;