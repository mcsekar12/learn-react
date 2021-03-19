import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="Counter">
        <h1>Count:{this.props.count}</h1>
        <button onClick={this.props.onIncrement}>Increment</button>
        <button onClick={this.props.onDecrement}>Decrement</button>
        <button onClick={this.props.onReset}>Reset</button>
      </section>
    );
  }
}

export default Counter;
