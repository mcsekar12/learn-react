import React, { Component } from 'react';
import VideoItem from './video-item';

class VideoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="ui list">
          {this.props.videos.map((v) => {
            return (
              <VideoItem
                key={v.id.videoId}
                onVideoSelect={() => {
                  this.props.onVideoSelect(v);
                }}
                url={v.snippet.thumbnails.high.url}
                title={v.snippet.title}
                description={v.snippet.description}
                channelTitle={v.snippet.channelTitle}
                publishedAt={v.snippet.publishedAt}
              ></VideoItem>
            );
          })}
        </div>
      </div>
    );
  }
}

export default VideoList;
