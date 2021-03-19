import React, { Component } from 'react';
import Counter from './counter';

class CounterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  reset = () => {
    this.setState({ count: 0 });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <Counter
          count={count}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onReset={this.reset}
        ></Counter>
        <Counter
          count={count}
          onIncremant={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onReset={this.reset}
        ></Counter>
      </div>
    );
  }
}

export default CounterContainer;
