import { GET_TRENDING_MOVIE_ERROR, GET_TRENDING_MOVIE_REQUEST, GET_TRENDING_MOVIE_SUCCESS } from "./actionType";


const initialState = {
    isLoading: true,
    movie: [],
    isError: false,
};

export const reducer = (state=initialState, {type, payload}) => {
    switch(type){
      case GET_TRENDING_MOVIE_REQUEST:
        return {...state, isLoading:true}  
      case GET_TRENDING_MOVIE_SUCCESS:
        return {...state, isLoading:false, movie: payload}
      case GET_TRENDING_MOVIE_ERROR:
        return {...state, isLoading:false, isError: true}    
      default:
        return state;  
    }
}