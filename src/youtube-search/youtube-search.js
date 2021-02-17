import React, { Component } from 'react';
import SearchBar from '../search/search';
import VideoList from './video-list';
import VideoDetail from './video-detail';
import youtube from './youtube-api.service';

class YoutubeSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoItems: [],
      video: '',
    };
  }
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log('getDerivedStateFromProps', nextProps, prevState);
  //   return null;
  // }

  onSearchSubmit = async (e) => {
    e.preventDefault();
    let term = e.target.elements.term.value;
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    this.setState({ videoItems: response.data.items });
    this.setState({ video: response.data.items[0] });
  };
  onVideoSelect = (e) => {
    debugger;
    this.setState({ video: { ...e } });
  };
  render() {
    return (
      <div>
        <div className="ui title">Youtube Search</div>
        <SearchBar onFormSubmit={this.onSearchSubmit}></SearchBar>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.video}></VideoDetail>
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videoItems}
                onVideoSelect={this.onVideoSelect}
              ></VideoList>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default YoutubeSearch;
