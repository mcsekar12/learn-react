import axios from 'axios';

const apiEndPoint = 'https://ancient-fortress-84687.herokuapp.com/api/file';

export function getFiles(data) {
  return axios.get(`${apiEndPoint}/`);
}

export function getFile(id) {
  return axios.get(`${apiEndPoint}/${id}`);
}

export function deleteFile(id) {
  return axios.delete(`${apiEndPoint}/${id}`);
}

export function uploadFile(bodyFormData) {
  return axios({
    url: `${apiEndPoint}/upload`,
    method: 'POST',
    data: bodyFormData,
    headers: {
      'content-Type': 'multipart/form-data',
    },
  });
}
