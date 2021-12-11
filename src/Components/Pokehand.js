import React, { Component } from "react";
import Pokecard from "./Pokecard";
import PokeList from "../Data/PokemonList";

import "./Pokehand.css";

class Pokehand extends Component {
  render() {
    return (
      <div className="Pokehand">
        <h1>Pokedex</h1>
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
