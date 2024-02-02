import axios from 'axios';
import { GET_PRODUCTS_URL } from '../../api';

export const getProducts = () => {
  return axios.get(GET_PRODUCTS_URL).then((res) => res.data);
};
