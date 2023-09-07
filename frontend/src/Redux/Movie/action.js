import axios from "axios";
import {
  GET_POPULAR_MOVIE_ERROR,
  GET_POPULAR_MOVIE_REQUEST,
  GET_POPULAR_MOVIE_SUCCESS,
  GET_TRENDING_MOVIE_ERROR,
  GET_TRENDING_MOVIE_REQUEST,
  GET_TRENDING_MOVIE_SUCCESS,
} from "./actionType";
import { apiKey } from "../../links";

export const getTrendingMovieRequest = () => {
  return { type: GET_TRENDING_MOVIE_REQUEST };
};

export const getTrendingMovieSuccess = (payload) => {
  return { type: GET_TRENDING_MOVIE_SUCCESS, payload };
};

export const getTrendingMovieError = () => {
  return { type: GET_TRENDING_MOVIE_ERROR };
};

// fetching trending movie data
export const getTrendingMovie = () => (dispatch) => {
  dispatch(getTrendingMovieRequest());
  axios
    .get(
      `https://api.themoviedb.org/3/trending/movie/day?language=all&api_key=${apiKey}`
    )
    .then((res) => {
      dispatch(getTrendingMovieSuccess(res.data.results));
    })
    .catch((error) => {
      dispatch(getTrendingMovieError());
    });
};


export const getPopularMovieRequest = () => {
  return { type: GET_POPULAR_MOVIE_REQUEST };
};

export const getPopularMovieSuccess = (payload) => {
  return { type: GET_POPULAR_MOVIE_SUCCESS, payload };
};

export const getPopularMovieError = () => {
  return { type: GET_POPULAR_MOVIE_ERROR };
};

// fetching popular movie data
export const getPopularMovie = () => (dispatch) => {
  dispatch(getPopularMovieRequest());
  axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?language=all&api_key=${apiKey}`
    )
    .then((res) => {
      console.log(res.data.results)
      dispatch(getPopularMovieSuccess(res.data.results));
    })
    .catch((error) => {
      dispatch(getPopularMovieError());
    });
};
