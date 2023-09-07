import axios from "axios";
import { apiKey } from "../../links";
import {
  GET_POPULAR_TV_SHOW_ERROR,
  GET_POPULAR_TV_SHOW_REQUEST,
  GET_POPULAR_TV_SHOW_SUCCESS,
  GET_TRENDING_TV_SHOW_ERROR,
  GET_TRENDING_TV_SHOW_REQUEST,
  GET_TRENDING_TV_SHOW_SUCCESS,
} from "./actionType";

export const getTrendingTvShowRequest = () => {
  return { type: GET_TRENDING_TV_SHOW_REQUEST };
};

export const getTrendingTvShowSuccess = (payload) => {
  return { type: GET_TRENDING_TV_SHOW_SUCCESS, payload };
};

export const getTrendingTvShowError = () => {
  return { type: GET_TRENDING_TV_SHOW_ERROR };
};

//fetching trending Tv Show data
export const getTrendingTvShow = () => (dispatch) => {
  dispatch(getTrendingTvShowRequest());
  axios
    .get(
      `https://api.themoviedb.org/3/trending/tv/day?language=all&api_key=${apiKey}`
    )
    .then((res) => {
      dispatch(getTrendingTvShowSuccess(res.data.results));
    })
    .catch((error) => {
      dispatch(getTrendingTvShowError());
    });
};


export const getPopularTvRequest = () => {
  return { type: GET_POPULAR_TV_SHOW_REQUEST };
};

export const getPopularTvSuccess = (payload) => {
  return { type: GET_POPULAR_TV_SHOW_SUCCESS, payload };
};

export const getPopularTvError = () => {
  return { type: GET_POPULAR_TV_SHOW_ERROR };
};

// fetching popular Tv Show data

export const getPopularTvShow = () => (dispatch) => {
  dispatch(getPopularTvRequest());
  axios
    .get(
      `https://api.themoviedb.org/3/tv/popular?language=all&page=1&api_key=${apiKey}`
    )
    .then((res) => {
      dispatch(getPopularTvSuccess(res.data.results));
    })
    .catch((error) => {
      dispatch(getPopularTvError());
    });
};