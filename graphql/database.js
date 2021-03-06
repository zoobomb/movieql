import fetch from "node-fetch";
require("dotenv").config();

const api_key = process.env.API_KEY;
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`;

export const getMovies = () => {
  return fetch(API_URL)
    .then((res) => res.json())
    .then((json) => json.results);
};
