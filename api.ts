import { BASE_URL } from '@/constants';
import axiosInstance from 'axios';

// Create an Axios instance with a base URL
const axios = axiosInstance.create({
  baseURL: "https://992c-37-73-210-182.ngrok-free.app/v1",
});

export default axios;
