import axios from 'axios';

const api = axios.create({
  baseURL: 'https://randomuser.me/api/',
  params: {
    results: 50,
    seed: '9869cf97e8fa90ab',
  },
});

export default api;
