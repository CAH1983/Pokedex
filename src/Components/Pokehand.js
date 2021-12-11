import React, { Component } from "react";
import Pokecard from "./Pokecard";
import PokeList from "../Data/PokemonList";

import "./Pokehand.css";

class Pokehand extends Component {
  render() {
    let playerName = this.props.player;
    return (
      <div className="Pokehand">
        <h1>Player {playerName}</h1>
        <ul className="Pokehand-ul">
          {PokeList.map((poke) => (
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
