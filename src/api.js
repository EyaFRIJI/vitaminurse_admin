// src/api.js
import axios from "axios";

const API_URL = "http://localhost:2000"; // Update this if your backend is running on a different URL

// Allergie API
export const getAllergies = () => axios.get(`${API_URL}/allergie`);
export const createAllergie = (allergie) =>
  axios.post(`${API_URL}/allergie`, allergie);
export const deleteAllergie = (id) =>
  axios.delete(`${API_URL}/allergie`, { data: { id } });

// Maladie API
export const getMaladies = () => axios.get(`${API_URL}/maladie`);
export const createMaladie = (maladie) =>
  axios.post(`${API_URL}/maladie`, maladie);
export const deleteMaladie = (id) =>
  axios.delete(`${API_URL}/maladie`, { data: { id } });

// User API
export const getUsers = () => axios.get(`${API_URL}/user`);
export const createUser = (user) => axios.post(`${API_URL}/register`, user);
export const deleteUser = (id) =>
  axios.delete(`${API_URL}/user`, { data: { id } });
export const adminLogin = (email, mot_passe) =>
  axios.post(`${API_URL}/adminlogin`, { email, mot_passe });
