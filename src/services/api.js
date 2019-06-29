import axios from 'axios';

const baseURL = 'http://localhost:3333';

const api = axios.create({
  baseURL,
});

export const imagesURL = `${baseURL}/files`;

export default api;
