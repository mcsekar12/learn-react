import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';
import CountDown from './CountDown';
import NewItem from './NewItem';
import Items from './Items';

import './Application.css';
import { connect } from 'react-redux';
import PackedItemContainer from './containers/PackedItemContainer';
import PackedFilterContainer from './containers/PackedFilterContainer';
import UnpackedItemContainer from './containers/UnpackedItemContainer';
import UnpackedFilterContainer from './containers/UnpackedFilterContainer';
import { addNewItem } from './../store/actions/jetActions';

class Application extends Component {
  state = {
    // Set the initial state,
    items: this.props.items,
  };

  // How are we going to manipulate the state?
  // Ideally, users are going to want to add, remove,
  // and check off items, right?

  addItem = (item) => {
    // this.setState({
    //   items: [
    //     ...this.state.items,
    //     { value: item, id: uniqueId(), packed: false },
    //   ],
    // });
    this.props.addItem(item);
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
    let unpacked = items.filter((item) => !item.packed);

    return (
      <div className="Application">
        <NewItem
          onSubmit={(e) => {
            this.addItem(e);
          }}
        />
        <CountDown />
        <UnpackedItemContainer
          title="Unpacked Items"
          render={() => <UnpackedFilterContainer />}
        />
        <PackedItemContainer
          title="Packed Items"
          render={() => <PackedFilterContainer />}
        />
        <button
          className="button full-width"
          onClick={() => {
            this.setState({
              items: this.props.items.map((item) => {
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

const mapPropsToState = (state) => ({
  items: state.jet.items,
});
const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (value) => dispatch(addNewItem(value)),
  };
};

export default connect(mapPropsToState, mapDispatchToProps)(Application);
