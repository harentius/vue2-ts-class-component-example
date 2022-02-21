import ApiClient from './ApiClient';
import { Product } from './types';

const apiClient = new ApiClient('https://fakestoreapi.com');

export {
  ApiClient,
  apiClient,
  Product,
}
