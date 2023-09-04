import axios from "axios";
import { GET_MOVIE_ERROR, GET_MOVIE_REQUEST, GET_MOVIE_SUCCESS } from "./actionType";
import { apiKey } from "../../links";




export const getMovieRequest = () => {
    return {type:GET_MOVIE_REQUEST}
}


export const getMovieSuccess = (payload) => {
    return {type:GET_MOVIE_SUCCESS, payload}
}

export const getMovieError = () => {
    return {type:GET_MOVIE_ERROR}
}

// fetching trending movie data
export const getMovie = () => (dispatch) =>{
    dispatch(getMovieRequest());
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?language=all&page=1&api_key=${apiKey}`)
    .then((res) => {
        dispatch(getMovieSuccess(res.data.results))
    })
    .catch((error) => {
        dispatch(getMovieError())
    })
}