import React, { useContext } from 'react';
import { movieContext } from '../contexts/movieContext';

const Navbar = () => {
  const { movies } = useContext(movieContext);
  return (
    <div className="navbar">
      <h1>movies To Watch</h1>
    </div>
  );
}
 
export default Navbar;