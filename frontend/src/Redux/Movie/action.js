import axios from "axios";
import { GET_MOVIE_ERROR, GET_MOVIE_REQUEST, GET_MOVIE_SUCCESS } from "./actionType";


export const getMovieRequest = () => {
    return {type:GET_MOVIE_REQUEST}
}


export const getMovieSuccess = () => {
    return {type:GET_MOVIE_SUCCESS}
}

export const getMovieError = () => {
    return {type:GET_MOVIE_ERROR}
}


export const getMovie = () => (dispatch) =>{
    dispatch(getMovieRequest());
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}`)
    .then((res) => {
        dispatch(getMovieSuccess(res.data.results))
    })
    .catch((error) => {
        dispatch(getMovieError())
    })
}