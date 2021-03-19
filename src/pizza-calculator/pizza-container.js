import React, { Component } from 'react';
import Input from './Input';
import Result from './result';

class PizzaContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      numberOfPeople,
      updateNumberOfPeople,
      updateSlicesPerPerson,
      numberOfPizzas,
      reset,
      slicesPerPerson,
    } = this.props;
    return (
      <div>
        <div>
          <Input
            value={numberOfPeople}
            onValueChange={updateNumberOfPeople}
            label="No of People"
          ></Input>
        </div>
        <div>
          <Input
            value={slicesPerPerson}
            onValueChange={updateSlicesPerPerson}
            label="Slices Per Person"
          ></Input>
        </div>
        <div>
          <Result amount={numberOfPizzas}></Result>
        </div>
        <div>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default PizzaContainer;
