import { combineReducers } from 'redux';

import { postsReducer } from './postsReducer';

const songReducer = () => {
  return {
    songs: [
      {
        title: 'Athi yenna',
        duration: '4:05',
      },
      {
        title: 'Kanama kanama',
        duration: '3:55',
      },
    ],
    favourite: 'Athi Yenna',
  };
};

const selectSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECT') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songReducer,

  selectedSong: selectSongReducer,
  posts: postsReducer,
});
