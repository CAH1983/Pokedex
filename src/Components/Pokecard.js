import React, { Component } from "react";
import "./Pokecard.css";

function getRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

class Pokecard extends Component {
  render() {
    return (
      <div className="Pokecard">
        <h3 className="Pokecard-title">{this.props.name}</h3>
        <img
          className="Pokecard-img"
          src="https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg"
        ></img>
        <p>Type: {this.props.type}</p>
        <p>EXP: {this.props.exp}</p>
      </div>
    );
  }
}

export default Pokecard;
