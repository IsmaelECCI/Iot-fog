import axios from 'axios';

const IOTApi = axios.create({
  baseURL: "http://localhost:8000/",
});

IOTApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers = {
      ...config.headers,
      'Authorization': `Bearer ${token}`, 
    };
  }

  return config;
});

export default IOTApi;
