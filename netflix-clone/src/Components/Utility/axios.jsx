import axios from "axios";
// get base url from TMDB to make request the movies
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});
export default instance;
