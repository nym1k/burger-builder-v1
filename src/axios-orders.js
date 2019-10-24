import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-d7e75.firebaseio.com/'
});

export default instance; 