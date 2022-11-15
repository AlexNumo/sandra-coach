import axios from 'axios';
// https://sandra-back-end.herokuapp.com http://localhost:8080
const instance = axios.create({
  baseURL: 'https://sandra-back-end.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
