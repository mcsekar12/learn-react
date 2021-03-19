import React, { Component } from 'react';
import calculatePizzasNeeded from '../lib/calculate-pizza-needed';
import PizzaContainer from './pizza-container';

const initialState = {
  numberOfPeople: 10,
  slicesPerPerson: 2,
};

const withPizzaCalculations = (WrappedComponent) => {
  return class extends Component {
    static displayName = `WithPizzaCalculations(${
      WrappedComponent.displayName || WrappedComponent.name
    })`;
    constructor(props) {
      super(props);
      this.state = { ...initialState };
    }
    updateNumberOfPeople = (event) => {
      if (event.target.value) {
        const numberOfPeople = parseInt(event.target.value, 10);
        this.setState({ numberOfPeople });
      } else {
        this.setState({ numberOfPeople: 0 });
      }
    };
    updateSlicesPerPerson = (event) => {
      if (event.target.value) {
        const slicesPerPerson = parseInt(event.target.value, 10);
        this.setState({ slicesPerPerson });
      } else {
        this.setState({ slicesPerPerson: 0 });
      }
    };
    reset = () => {
      this.setState({ ...initialState });
    };
    render() {
      const { numberOfPeople, slicesPerPerson } = this.state;
      const numberOfPizzas = calculatePizzasNeeded(
        numberOfPeople,
        slicesPerPerson
      );
      return (
        <div>
          <WrappedComponent
            reset={this.reset}
            numberOfPeople={numberOfPeople}
            updateNumberOfPeople={this.updateNumberOfPeople}
            updateSlicesPerPerson={this.updateSlicesPerPerson}
            numberOfPizzas={numberOfPizzas}
            slicesPerPerson={slicesPerPerson}
          ></WrappedComponent>
        </div>
      );
    }
  };
};

const PizzaContainerRender = withPizzaCalculations(PizzaContainer);

export default class PizzaContainerHOC extends Component {
  render() {
    return <PizzaContainerRender />;
  }
}
