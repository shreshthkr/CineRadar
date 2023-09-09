import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../../../Redux/Movie/action';
import styled from 'styled-components';

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
    <DIV>
      <div  className='details-section'>
             <div className='movie-info'>
                 <div><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" /></div>
                 <div>dgdffdhdfhdfhh</div>
             </div>
         </div>
      
    </DIV>
  )
}

export default MovieDetailPage;


const DIV = styled.div`
    width: 100%;
    height: 500px;
    border: 2px solid black;
    margin-top: 100px;
    

.details-section{
  
}



`