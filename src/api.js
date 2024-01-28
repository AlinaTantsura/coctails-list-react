import axios from "axios";

const optionsAxios = {
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjE2MjdjOWNmYzQ5YjY0MDUxZmE4ZWU2NGFmMDM4MSIsInN1YiI6IjY1N2Q4NDZiYjdmYmJkMDZjODMwNTVkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7NWSj1-y7xBlR5IWWT6t3fEcBUOHkAiJumA6Nwpm4FQ'
  }
}

async function fetchMovies (){
  return await axios.get('/movie/popular', optionsAxios);
   
};

async function fetchMovieByWord(searchWord) {
  return await axios.get(`/search/movie?query=${searchWord}`, optionsAxios)
}

async function fetchMovieDetails(movie_id) {
  return await axios.get(`movie/${movie_id}`, optionsAxios);
}
export { fetchMovies, fetchMovieByWord, fetchMovieDetails};