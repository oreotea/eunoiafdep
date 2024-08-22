// frontend/src/api/api.js
import axios from 'axios';

// Instance for existing backend
const backendAPI = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

backendAPI.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

backendAPI.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Instance for FastAPI backend (for chat)
const fastAPI = axios.create({
  baseURL: process.env.REACT_APP_FASTAPI_URL,
});

fastAPI.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

fastAPI.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export { backendAPI, fastAPI };
