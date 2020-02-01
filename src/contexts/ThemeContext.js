import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    filterTheme: "none",
    none: "none",
    blur: "blur(10px)",
    grayscale: "grayscale(100%)"
  }

  chooseTheme = (value) => {
    this.setState({ filterTheme: value});
  }

  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state, chooseTheme: this.chooseTheme }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;