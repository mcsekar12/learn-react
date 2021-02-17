import axios from 'axios';
const KEY = 'AIzaSyC-Fc4Mzbl68nTtHYtWYwd9MBqkSWLbzzA';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
