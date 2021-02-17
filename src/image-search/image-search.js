import React, { Component } from 'react';
import unsplashAPI from '../unsplash.service.js';

import './image-search.css';
import SearchBar from '../search/search';
import ImageList from './image-list/image.list.js';

class ImageSearch extends Component {
  state = {
    images: [],
  };
  constructor(props) {
    super(props);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }
  componentDidMount() {
    // this.onSearchSubmit('cars');
  }
  async onSearchSubmit(event) {
    event.preventDefault();
    let term = event.target.elements.term.value;
    const response = await unsplashAPI.get('/search/photos', {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  }
  render() {
    return (
      <div className="ui container">
        <div className="">Image Search</div>
        <SearchBar onFormSubmit={this.onSearchSubmit}></SearchBar>
        <div>Found: {this.state.images.length} images found</div>
        <ImageList images={this.state.images}></ImageList>
      </div>
    );
  }
}

export default ImageSearch;
