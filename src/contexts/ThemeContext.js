import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    filterTheme: "none",
    none: "none",
    blur: "blur(10px)",
    grayscale: "grayscale(100%)"
  }

  toggleTheme = () => {
    this.setState({ filterTheme: this.filterTheme });
  }

  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;