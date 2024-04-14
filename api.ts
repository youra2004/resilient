import { BASE_URL } from '@/constants';
import axiosInstance from 'axios';

// Create an Axios instance with a base URL
const axios = axiosInstance.create({
  baseURL: "https://8448-195-160-235-15.ngrok-free.app/v1",
});

export default axios;
