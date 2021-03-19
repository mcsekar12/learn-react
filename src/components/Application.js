import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';
import CountDown from './CountDown';
import NewItem from './NewItem';
import Items from './Items';

import './Application.css';

const defaultState = [
  { value: 'Pants', id: uniqueId(), packed: false },
  { value: 'Jacket', id: uniqueId(), packed: false },
  { value: 'iPhone Charger', id: uniqueId(), packed: false },
  { value: 'MacBook', id: uniqueId(), packed: false },
  { value: 'Sleeping Pills', id: uniqueId(), packed: true },
  { value: 'Underwear', id: uniqueId(), packed: false },
  { value: 'Hat', id: uniqueId(), packed: false },
  { value: 'T-Shirts', id: uniqueId(), packed: false },
  { value: 'Belt', id: uniqueId(), packed: false },
  { value: 'Passport', id: uniqueId(), packed: true },
  { value: 'Sandwich', id: uniqueId(), packed: true },
];

class Application extends Component {
  state = {
    // Set the initial state,
    items: defaultState,
  };

  // How are we going to manipulate the state?
  // Ideally, users are going to want to add, remove,
  // and check off items, right?

  addItem = (item) => {
    this.setState({
      items: [
        ...this.state.items,
        { value: item, id: uniqueId(), packed: false },
      ],
    });
  };
  updateItem = (id, checked) => {
    let items = this.state.items.map((item) => {
      if (id === item.id) {
        item.packed = checked;
      }
      return item;
    });
    this.setState({ items });
  };
  removeItem = (id) => {
    let items = this.state.items.filter((item) => item.id !== id);
    this.setState({ items });
  };

  render() {
    // Get the items from state
    let { items } = this.state;

    let packed = items.filter((item) => item.packed);
    let unpacked = items.filter((item) => !item.packed);

    return (
      <div className="Application">
        <NewItem
          onSubmit={(e) => {
            this.addItem(e);
          }}
        />
        <CountDown />
        <Items
          title="Unpacked Items"
          items={unpacked}
          updateItem={this.updateItem}
          removeItem={this.removeItem}
        />
        <Items
          title="Packed Items"
          items={packed}
          updateItem={this.updateItem}
          removeItem={this.removeItem}
        />
        <button
          className="button full-width"
          onClick={() => {
            this.setState({
              items: defaultState.map((item) => {
                return { ...item, packed: false };
              }),
            });
          }}
        >
          Mark All As Unpacked
        </button>
      </div>
    );
  }
}

export default Application;
