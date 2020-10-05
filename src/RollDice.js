import React, { Component } from 'react';

import Die from './Die';

import './RollDice.css';

class RollDice extends Component {
  constructor(props){
    super(props);
    this.state = {
      number1: 'one',
      number2: 'six',
      isRolling: false
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
    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
    this.setState({isRolling: true});
    const {numbers} = this.props;
    let num1 = this.getRandomNumber(numbers);
    this.setState({number1: num1});
    let num2 = this.getRandomNumber(numbers);
    this.setState({number2: num2});
  }
  render() {
    const {number1, number2, isRolling} = this.state;
    return (
      <div className="RollDice">
        <div className="RollDice-dice">
          <Die number={number1} isRolling={isRolling} />
          <Die number={number2} isRolling={isRolling} />
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
