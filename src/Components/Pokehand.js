import React, { Component } from "react";
import Pokecard from "./Pokecard";
import PokeList from "../Data/PokemonList";

import "./Pokehand.css";

class Pokehand extends Component {
  render() {
    const { player, randomPoke } = this.props;

    let totalPoints = 0;

    return (
      <div className="Pokehand">
        <h1>Player {player}</h1>
        <ul className="Pokehand-ul">
          {randomPoke.map((poke) => (
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
