import React, { Component } from 'react';
import './image-card.css';
class ImageCard extends Component {
  state = {
    spans: 0,
  };
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }
  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }
  setSpans = (e) => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };
  render() {
    return (
      <div
        key={this.props.id}
        style={{ gridRowEnd: `span ${this.state.spans}` }}
      >
        <img
          ref={this.imageRef}
          className="ui fluid image"
          src={this.props.src}
          alt={this.props.alt_description}
        />
      </div>
    );
  }
}

export default ImageCard;
