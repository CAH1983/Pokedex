import React, { Component } from "react";
import Pokehand from "./Pokehand";

class Pokedex extends Component {
  render() {
    return (
      <div className="Pokedex">
        <Pokehand player="Tintin" />
        <Pokehand player="Capitaine Haddock" />
      </div>
    );
  }
}

export default Pokedex;
