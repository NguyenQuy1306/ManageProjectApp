import axios from 'axios';
import { API_SERVER_URL } from '../../config';

const AuthAPI = {
  login: (username, password) =>
    axios.post(`${API_SERVER_URL}/api/auth/login`, {
      username,
      password,
    }),
};

export default AuthAPI;