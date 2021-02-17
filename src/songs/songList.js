import React, { Component } from 'react';

import { connect } from 'react-redux';

import { selectSong } from './../store/actions/index';
class SongList extends Component {
  state = {};
  renderList() {
    return this.props.songs.map((item) => {
      return (
        <div className="item" key={item.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => {
                this.props.selectSong(item);
              }}
            >
              Select
            </button>
          </div>
          <div className="content">{item.title}</div>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        SongList
        <div className="ui divided list">{this.renderList()}</div>
        {this.props.selectedSong && (
          <div>
            Selected Song : {this.props.selectedSong.title}
            duration : {this.props.selectedSong.duration}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    songs: state.songs.songs,
    favourite: state.songs.favourite,
    selectedSong: state.selectedSong,
  };
};

export default connect(mapStateToProps, { selectSong })(SongList);
