import axios from 'axios';
const __API__ = 'http://localhost:3000';

export const $api = axios.create({
  baseURL: __API__,
});
