import React, { Component } from 'react';
import './image-list.css';

import ImageCard from '../image-card/image-card.js';

class ImageList extends Component {
  state = {};
  render() {
    return (
      <div className="image-list">
        {this.props.images.map((item) => {
          return (
            <ImageCard
              key={item.id}
              src={item.urls.regular}
              alt_description={item.alt_description}
            ></ImageCard>
          );
        })}
      </div>
    );
  }
}

export default ImageList;
