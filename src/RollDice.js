import React, { Component } from 'react';

import Die from './Die';

import './RollDice.css';

class RollDice extends Component {
  constructor(props){
    super(props);
    this.state = {
      number1: 'one',
      number2: 'one'
    }
    this.getRandomNumber = this.getRandomNumber.bind(this);
    this.roll = this.roll.bind(this);
  }
  static defaultProps = {
    numbers: ['one', 'two', 'three', 'four', 'five', 'six']
  };
  getRandomNumber(numbers){
    let idx = Math.floor(Math.random() * numbers.length);
    return numbers[idx];
  }
  roll(){
    const {numbers} = this.props;
    let num1 = this.getRandomNumber(numbers);
    this.setState({number1: num1});
    let num2 = this.getRandomNumber(numbers);
    this.setState({number2: num2});
  }
  render() {
    const {number1, number2} = this.state;
    return (
      <div className="RollDice">
        <div className="RollDice-dice">
          <Die number={number1} />
          <Die number={number2} />
        </div>
        <button
          className="RollDice-button"
          onClick={this.roll}>
          Roll Dice!
        </button>
      </div>
    );
  }
}

export default RollDice;
