import axios from 'axios';

const API_KEY = 'd32f60a1'; // Replace this
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

export const fetchMoviesByTitle = async (title, page = 1) => {
  const response = await axios.get(`${BASE_URL}&s=${title}&page=${page}`);
  console.log(response.data);
  return response.data;
};

export const fetchMovieDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}&i=${id}`);
  console.log(response.data);
  return response.data;
};
