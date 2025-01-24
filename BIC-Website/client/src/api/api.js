import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getServices = async () => {
  const response = await axios.get(`${API_URL}/services`);
  return response.data;
};

export const loginUser = async (user) => {
  const response = await axios.post(`${API_URL}/auth/login`, user);
  return response.data;
};