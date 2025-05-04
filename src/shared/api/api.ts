import axios from 'axios';
const __API__ = 'http://localhost:3001';

export const $api = axios.create({
  baseURL: __API__,
});

export const WS_CONFIG = {
  DIAGRAM: 'ws://localhost:8080',
} as const;