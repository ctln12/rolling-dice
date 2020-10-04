import React, { Component } from 'react';

import Die from './Die';

import './RollDice.css';

class RollDice extends Component {
  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-dice">
          <Die />
          <Die />
        </div>
        <button className="RollDice-button">Roll Dice!</button>
      </div>
    );
  }
}

export default RollDice;
