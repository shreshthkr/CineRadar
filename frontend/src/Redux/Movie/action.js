import axios from "axios";
import { GET_TRENDING_MOVIE_ERROR, GET_TRENDING_MOVIE_REQUEST, GET_TRENDING_MOVIE_SUCCESS } from "./actionType";
import { apiKey } from "../../links";




export const getTrendingMovieRequest = () => {
    return {type:GET_TRENDING_MOVIE_REQUEST}
}


export const getTrendingMovieSuccess = (payload) => {
    return {type:GET_TRENDING_MOVIE_SUCCESS, payload}
}

export const getTrendingMovieError = () => {
    return {type:GET_TRENDING_MOVIE_ERROR}
}

// fetching trending movie data
export const getTrendingMovie = () => (dispatch) =>{
    dispatch(getTrendingMovieRequest());
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?language=all&api_key=${apiKey}`)
    .then((res) => {
        dispatch(getTrendingMovieSuccess(res.data.results))
    })
    .catch((error) => {
        dispatch(getTrendingMovieError())
    })
}