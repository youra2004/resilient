import axiosInstance from 'axios';

// Create an Axios instance with a base URL
const axios = axiosInstance.create({
  baseURL: 'https://f69d-37-73-27-158.ngrok-free.app/v1',
});

export default axios;
