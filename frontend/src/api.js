import axios from 'axios';

const API_ROOT = 'http://localhost:5000/api';

export const loginUser = async (email) => {
  const { data } = await axios.post(`${API_ROOT}/users/auth`, { email });
  // Set to localstorage for mock session
  localStorage.setItem('sourcein_user', JSON.stringify(data));
  return data;
};

export const getItems = async (category, genderTag) => {
  let query = '?';
  if (category && category !== 'All') query += `category=${category}&`;
  if (genderTag && genderTag !== 'All') query += `genderTag=${genderTag}`;
  
  const { data } = await axios.get(`${API_ROOT}/items${query}`);
  return data;
};

export const getItemById = async (id) => {
  const { data } = await axios.get(`${API_ROOT}/items/${id}`);
  return data;
};

export const createItemListing = async (itemData) => {
  const { data } = await axios.post(`${API_ROOT}/items`, itemData);
  return data;
};

export const createTransaction = async (checkoutData) => {
  const { data } = await axios.post(`${API_ROOT}/transactions/checkout`, checkoutData);
  return data;
};

export const getUserDashboard = async (userId) => {
  const { data } = await axios.get(`${API_ROOT}/users/${userId}/dashboard`);
  return data;
};
