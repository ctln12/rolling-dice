import React, { Component } from 'react';

import Die from './Die';

class RollDice extends Component {
  render() {
    return (
      <div className="RollDice">
        <div>
          <Die />
          <Die />
        </div>
        <button>Roll Dice!</button>
      </div>
    );
  }
}

export default RollDice;
