import React, { Component } from "react";
import Pokecard from "./Pokecard";
import PokeList from "../Data/PokemonList";

import "./Pokehand.css";

const randomPokemons = PokeList.sort(() => Math.random() - Math.random()).slice(
  0,
  4
);

class Pokehand extends Component {
  render() {
    let playerName = this.props.player;
    let totalPoints = 0;

    return (
      <div className="Pokehand">
        <h1>Player {playerName}</h1>
        <ul className="Pokehand-ul">
          {randomPokemons.map((poke) => (
            <li key={poke.id}>
              <Pokecard
                id={poke.id}
                name={poke.name}
                type={poke.type}
                exp={poke.base_experience}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Pokehand;
