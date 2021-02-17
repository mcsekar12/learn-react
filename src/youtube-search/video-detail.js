import React, { Component } from 'react';

class VideoDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log('constructor');
  }
  UNSAFE_componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  UNSAFE_componentWillReceiveProps(props) {
    console.log('componentWillReceiveProps', props);
  }
  UNSAFE_componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }
  render() {
    return (
      <div>
        {!this.props.video ? (
          <div></div>
        ) : (
          <div className="embed__i">
            <iframe
              height="480"
              width="100%"
              src={`https://www.youtube.com/embed/${this.props.video.id.videoId}`}
            ></iframe>
            <div>{this.props.video.snippet.description}</div>
          </div>
        )}
      </div>
    );
  }
}

export default VideoDetail;
