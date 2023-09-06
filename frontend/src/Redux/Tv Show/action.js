import axios from "axios";
import { apiKey } from "../../links";
import { GET_TRENDING_TV_SHOW_ERROR, GET_TRENDING_TV_SHOW_REQUEST, GET_TRENDING_TV_SHOW_SUCCESS } from "./actionType";


export const getTrendingTvShowRequest = () => {
    return {type:GET_TRENDING_TV_SHOW_REQUEST}
}

export const getTrendingTvShowSuccess = (payload) => {
    return {type:GET_TRENDING_TV_SHOW_SUCCESS, payload}
}

export const getTrendingTvShowError = () => {
    return {type:GET_TRENDING_TV_SHOW_ERROR}
}

//fetching trending Tv Show data
export const getTrendingTvShow = () =>(dispatch)=> {
    dispatch(getTrendingTvShowRequest());
    axios.get(`https://api.themoviedb.org/3/trending/tv/day?language=all&api_key=${apiKey}`)
    .then((res) => {
        dispatch(getTrendingTvShowSuccess(res.data.results))
    })
    .catch((error) => {
        dispatch(getTrendingTvShowError());
    })
};
