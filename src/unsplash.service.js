import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID VJI7qrq1TL7VQDoXohCdt-F2snVNCF9u1mnwenMGEkA',
  },
});
