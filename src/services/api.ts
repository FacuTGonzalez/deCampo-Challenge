import Axios, { type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';

const api = Axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default api;


api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error) => {
    console.error(error);
    return await Promise.reject(error);
  }
);

api.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    return config;
  },
  async (error) => {
    console.warn(error);

    return await Promise.reject(error);
  }
);