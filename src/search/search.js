import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    term: '',
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.props.onFormSubmit}>
          <div className="field">
            <input
              name="term"
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
