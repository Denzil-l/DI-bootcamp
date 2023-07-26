import React, { Component } from 'react';

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleClick = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });


  };

  render() {
    if (this.state.counter === 5) {
      throw new Error('I crashed!');
    }
    return <button onClick={this.handleClick}>{this.state.counter}</button>;
  }
}

export default BuggyCounter;
