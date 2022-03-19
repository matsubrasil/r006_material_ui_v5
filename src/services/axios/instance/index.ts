import axios from 'axios';
import { Environment } from 'shared/environments';
import {
  responseInterceptor,
  errorInterceptor,
} from 'services/axios/interceptors';

const apiInstance = axios.create({
  baseURL: Environment.URL_BASE || 'http://localhost:3333',
});

apiInstance.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error)
);

export { apiInstance };
