const apiKey = process.env.REACT_APP_API_KEY

const Trending_movie=`https://api.themoviedb.org/3/trending/movie/day?language=all&api_key=${apiKey}`;


const Trending_tv = `https://api.themoviedb.org/3/trending/tv/day?language=en-US&api_key=${apiKey}`;

const Trending_people = `https://api.themoviedb.org/3/trending/persson/day?language=en-US&api_key=${apiKey}`

const now_playing_movie = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${apiKey}`;

const popular_movies = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${apiKey}`;


const toprated_movies = `https://api.themoviedb.org/3/movie/top_rated?language=all&page=1&api_key=${apiKey}`



