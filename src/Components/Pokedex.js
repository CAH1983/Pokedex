import React, { Component } from "react";
import Pokehand from "./Pokehand";
import PokeList from "../Data/PokemonList";

let randomPokemons1 = [];
let randomPokemons2 = [];

let newList = PokeList.sort(() => Math.random() - Math.random());
randomPokemons1 = newList.slice(0, 4);
randomPokemons2 = newList.slice(4);

class Pokedex extends Component {
  render() {
    return (
      <div className="Pokedex">
        <Pokehand randomPoke={randomPokemons1} player="Tintin" />
        <Pokehand randomPoke={randomPokemons2} player="Capitaine Haddock" />
      </div>
    );
  }
}

export default Pokedex;
