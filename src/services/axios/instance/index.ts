import axios from 'axios';
import {
  responseInterceptor,
  errorInterceptor,
} from 'services/axios/interceptors';

const apiInstance = axios.create({
  baseURL: 'http://localhost:3333',
});

apiInstance.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error)
);

export { apiInstance };
