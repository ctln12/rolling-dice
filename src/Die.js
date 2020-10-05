import React, { Component } from 'react';

import './Die.css';

class Die extends Component {
  render() {
    const {number, isRolling} = this.props;
    return (
      <div className="Die">
        <i
          className={`fas fa-dice-${number}${isRolling ? ' rolling' : ''}`}></i>
      </div>
    );
  }
}

export default Die;
