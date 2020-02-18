import React, { useContext } from "react";

import { ThemeContext } from "../contexts/ThemeContext";

const ThemeNav = () => {

    const { filterTheme } = useContext(ThemeContext);



    return (
        <div className='filter-theme'>Current Filter:  <span className='filter-name'> {filterTheme}</span> </div>
    );
};

export default ThemeNav;