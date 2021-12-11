import React, { Component } from "react";
import "./Pokecard.css";

function getRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

// let assetURL = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${currId}.png`;
// let currId = this.props.id;

function formatNumber(num) {
  num = num.toString();
  // if ID contains only 1 or 2 digits, add 2 or 1 zeros before
  num = num.padStart(3, "0");
  return num;
}

class Pokecard extends Component {
  render() {
    const { id, name, type, exp } = this.props;
    let newId;
    newId = formatNumber(id);
    let assetURL = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${newId}.png`;

    return (
      <div>
        <div className="Pokecard">
          <h3 className="Pokecard-title">{name}</h3>
          <img className="Pokecard-img" src={assetURL}></img>
          <p>Type: {type}</p>
          <p>EXP: {exp}</p>
        </div>
      </div>
    );
  }
}

export default Pokecard;
