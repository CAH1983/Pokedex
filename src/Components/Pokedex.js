import React, { Component } from "react";
import Pokehand from "./Pokehand";
import PokeList from "../Data/PokemonList";
import Haddock from "../Images/Haddock.jpg";
import Tintin from "../Images/Tintin2.jpg";
import "./Pokedex.css";

let randomPokemons1 = []; // array of pokemons for player 1
let randomPokemons2 = []; // array of pokemons for player 2

// generate a new list with random pokemons
let newList = PokeList.sort(() => Math.random() - Math.random());

randomPokemons1 = newList.slice(0, 4);
randomPokemons2 = newList.slice(4);

let score1 = randomPokemons1.reduce(
  (accumulator, current) => accumulator + current.base_experience,
  0
);
let score2 = randomPokemons2.reduce(
  (accumulator, current) => accumulator + current.base_experience,
  0
);

let msg;

class Pokedex extends Component {
  render() {
    // calculate scores for both players
    score1 > score2 ? (msg = "Tintin wins") : (msg = "Capitaine Haddock wins");

    return (
      <div className="Pokedex">
        <p>{msg}</p>
        <Pokehand
          randomPoke={randomPokemons1}
          player="Tintin"
          score={score1}
          src={Tintin}
        />
        <Pokehand
          randomPoke={randomPokemons2}
          player="Capitaine Haddock"
          score={score2}
          src={Haddock}
        />
      </div>
    );
  }
}

export default Pokedex;
