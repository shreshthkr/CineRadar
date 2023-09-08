import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../../../Redux/Movie/action';

const MovieDetailPage = () => {
  const dispatch =  useDispatch();
  const movie = useSelector((store) => {
    return store.detailReducer.movieDetail
  });
  const params = useParams();
  const {id} = params;
      
  useEffect(() => {
        dispatch(getMovieDetails(id))
  },[dispatch,id])
 
  

console.log(movie);

  return (
    <div>
      
    </div>
  )
}

export default MovieDetailPage;
