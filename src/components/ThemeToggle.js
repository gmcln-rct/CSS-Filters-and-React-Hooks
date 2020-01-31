import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class ThemeToggle extends Component {
  static contextType = ThemeContext;
  render() {
    const { toggleTheme } = this.context;
    return (<form id="dropdown-container">
            <select id="station_id" class="select-css">
                <option value="" selected>Select U.S. Coastal Station</option>
                <option value="8737048">Mobile State Dock Pier E - AL</option>
                <option value="8737048">Bridgeport - CT</option>
                
            </select>
            <br>
            <div class="organ-buttons">

                <div class="input-wrapper-play">
                    <input type="button" value="Play Organ" name="submit" id="select-button" class="play-button">       
                </div>

            </div>
        </form>);
  }
}

export default ThemeToggle;
