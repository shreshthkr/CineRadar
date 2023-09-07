import {
  GET_POPULAR_TV_SHOW_ERROR,
  GET_POPULAR_TV_SHOW_REQUEST,
  GET_POPULAR_TV_SHOW_SUCCESS,
  GET_TRENDING_TV_SHOW_ERROR,
  GET_TRENDING_TV_SHOW_REQUEST,
  GET_TRENDING_TV_SHOW_SUCCESS,
} from "./actionType";

const initialState = {
  isLoading: true,
  trendingTv: [],
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TRENDING_TV_SHOW_REQUEST:
      return { ...state, isLoading: true };
    case GET_TRENDING_TV_SHOW_SUCCESS:
      return { ...state, isLoading: false, trendingTv: payload };
    case GET_TRENDING_TV_SHOW_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

const tvPopularInitialState = {
  isLoading: true,
  tvPopular: [],
  isError: false,
};

export const popularTvReducer = (
  state = tvPopularInitialState,
  { type, payload }
) => {
  switch (type) {
    case GET_POPULAR_TV_SHOW_REQUEST:
      return { ...state, isLoading: true };
    case GET_POPULAR_TV_SHOW_SUCCESS:
      return { ...state, isLoading: false, tvPopular: payload };
    case GET_POPULAR_TV_SHOW_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
