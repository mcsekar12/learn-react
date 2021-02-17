import React, { Component } from 'react';
import './video-item.css';
const VideoItem = (props) => {
  return (
    <div
      className="item video_item"
      onClick={() => {
        props.onVideoSelect();
      }}
    >
      <img className="ui image" src={props.url} />
      <div className="content">
        <a className="header">{props.title}</a>
        <div className="description">{props.channelTitle}</div>
      </div>
    </div>
  );
};

export default VideoItem;
