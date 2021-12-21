import React, { Component } from "react";
import Pokecard from "./Pokecard";

import "./Pokehand.css";

class Pokehand extends Component {
  render() {
    const { player, randomPoke, score, src, isWinner } = this.props;

    return (
      <div className="Pokehand">
        <h1>
          {" "}
          <span>
            <img className="Pokehand-img" src={src} />
          </span>
          Player {player}
        </h1>
        <h2> Score : {score}</h2>
        <p> {isWinner ? "Winner!" : "Loser"} </p>
        <div className="Pokehand-ul-wrapper">
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
      </div>
    );
  }
}

export default Pokehand;
