import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://react-order-app-37a18.firebaseio.com/'
});

export default axiosInstance;
