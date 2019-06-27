import axios from 'axios';

const api = axios.create({
  baseURL: 'YOUR_URL',
});

export default api;
