import axios from "axios";

const API_BASE = "https://dummyjson.com";

export const loginUser = async (username: string, password: string) => {
  const response = await axios.post(`${API_BASE}/auth/login`, { username, password });
  return response.data;
};

export const getProducts = async () => {
  const response = await axios.get(`${API_BASE}/products`);
  return response.data.products;
};
