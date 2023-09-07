import {
  GET_MOVIE_DETAILS_ERROR,
  GET_MOVIE_DETAILS_REQUEST,
  GET_MOVIE_DETAILS_SUCCESS,
  GET_MOVIE_ERROR,
  GET_MOVIE_REQUEST,
  GET_MOVIE_SUCCESS,
  GET_POPULAR_MOVIE_ERROR,
  GET_POPULAR_MOVIE_REQUEST,
  GET_POPULAR_MOVIE_SUCCESS,
  GET_TRENDING_MOVIE_ERROR,
  GET_TRENDING_MOVIE_REQUEST,
  GET_TRENDING_MOVIE_SUCCESS,
} from "./actionType";

const movieState = {
  isLoading: true,
  movieList: [],
  isError: false,
};

export const movieListReducer = (
  state = popularInitialState,
  { type, payload }
) => {
  switch (type) {
    case GET_MOVIE_REQUEST:
      return { ...state, isLoading: true };
    case GET_MOVIE_SUCCESS:
      return { ...state, isLoading: false, movieList: payload };
    case GET_MOVIE_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

const initialState = {
  isLoading: true,
  movie: [],
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TRENDING_MOVIE_REQUEST:
      return { ...state, isLoading: true };
    case GET_TRENDING_MOVIE_SUCCESS:
      return { ...state, isLoading: false, movie: payload };
    case GET_TRENDING_MOVIE_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

const popularInitialState = {
  isLoading: true,
  popularMovie: [],
  isError: false,
};

export const popularReducer = (
  state = popularInitialState,
  { type, payload }
) => {
  switch (type) {
    case GET_POPULAR_MOVIE_REQUEST:
      return { ...state, isLoading: true };
    case GET_POPULAR_MOVIE_SUCCESS:
      return { ...state, isLoading: false, popularMovie: payload };
    case GET_POPULAR_MOVIE_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

const detailInitialState = {
  isLoading:true,
  movieDetail:[],
  isError:false
}

export const detailReducer = (
  state = detailInitialState,
  { type, payload }
) => {
  switch (type) {
    case GET_MOVIE_DETAILS_REQUEST:
      return { ...state, isLoading: true };
    case GET_MOVIE_DETAILS_SUCCESS:
      return { ...state, isLoading: false, movieDetail: payload };
    case GET_MOVIE_DETAILS_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};