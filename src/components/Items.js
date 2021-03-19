import React, { Component } from 'react';
import Item from './Item';
import Filter from './Filter';

class Items extends Component {
  state = {
    // What state does this component have?
    searchTerm: '',
  };

  updateSearchTerm = (searchTerm) => {
    this.setState({ searchTerm });
  };

  updateItem = (id, checked) => {
    this.props.updateItem(id, checked);
  };
  removeItem = (id) => {
    this.props.removeItem(id);
  };
  render() {
    let { title, items } = this.props;
    const searchTerm = this.state.searchTerm;
    return (
      <section className="Items">
        <h2>
          {title} ({items.length})
        </h2>
        {items.length ? (
          <React.Fragment>
            <Filter searchTerm={searchTerm} onChange={this.updateSearchTerm} />
            {items
              .filter((item) => {
                return (
                  !searchTerm ||
                  item.value
                    .toLowerCase()
                    .includes(searchTerm.toLocaleLowerCase())
                );
              })
              .map((item) => (
                <Item
                  key={item.id}
                  onCheckOff={(checked) => {
                    this.updateItem(item.id, checked);
                  }}
                  onRemove={() => {
                    this.removeItem(item.id);
                  }}
                  item={item}
                />
              ))}
          </React.Fragment>
        ) : (
          'No items added here'
        )}
      </section>
    );
  }
}

export default Items;
