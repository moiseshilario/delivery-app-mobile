import axios from 'axios';
import store from '~/store';

const baseURL = 'http://localhost:3333';

const api = axios.create({
  baseURL,
});

api.interceptors.request.use((config) => {
  const { token } = store.getState().auth;

  const headers = { ...config.headers };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return { ...config, headers };
});

export const imagesURL = `${baseURL}/files`;

export default api;
