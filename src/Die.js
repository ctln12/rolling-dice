import React, { Component } from 'react';

import './Die.css';

class Die extends Component {
  render() {
    const {number} = this.props;
    return (
      <div className="Die">
        <i className={`fas fa-dice-${number}`}></i>
      </div>
    );
  }
}

export default Die;
