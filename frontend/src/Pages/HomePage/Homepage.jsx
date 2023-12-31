import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import MovieCard from '../../Components/MovieCard';
import "./HomePage.css";
import { getPopularMovie, getTrendingMovie } from '../../Redux/Movie/action';
import { getPopularTvShow, getTrendingTvShow } from '../../Redux/Tv Show/action';
import TvCard from '../../Components/TvCard/TvCard';



const Homepage = () => {
const [showData,setShowData] = useState(false);
const [selectedOption, setSelectedOption] = useState('Movie');
const [showPopular, setShowPopular] = useState(false)
const [selectPopular, setSelectpopular] = useState("Movie")
const dispatch = useDispatch();
const movie = useSelector((store) => {
  return store.movieReducer.movie
})

const trendTv = useSelector((store) => {
  return store.trendingTvreducer.trendingTv
})

const popularMovie = useSelector((store) => {
  return store.popularReducer.popularMovie
})

const populartvShow = useSelector((store) => {
  return store.popularTvReducer.tvPopular
})
useEffect(() => {
     dispatch(getTrendingMovie());
     dispatch(getTrendingTvShow());
     dispatch(getPopularMovie());
     dispatch(getPopularTvShow());
},[dispatch])

const handleShowTvData = () => {
  setShowData(true);
  setSelectedOption('TV Show')
}

const handleShowMovieData = () => {
  setShowData(false);
  setSelectedOption('Movie');
}

const handlePopularMovie = () => {
  setShowPopular(false);
  setSelectpopular("Movie")
};


const handlePopularTvShow = () => {
  setShowPopular(true);
  setSelectpopular("OnTv")
}

  return (
    <>
    <div className='search'>

    </div>
    <div className='movie'>
      <div className='trending-heading'>
        <h1>What's Trending</h1>
        <div className='trending-selection'>
          <p onClick={handleShowMovieData}  style={{
                backgroundColor: selectedOption === 'Movie' ? 'white' : 'transparent',
                color: selectedOption === 'Movie' ? 'black' : 'white',
               
              }} >Movie</p>
          <p onClick={handleShowTvData} style={{
                backgroundColor: selectedOption === 'TV Show' ? 'white' : 'transparent',
                color: selectedOption === 'TV Show' ? 'black' : 'white',
               
              }}>Tv Show</p>
        </div>
      </div>
    <div className='trending'>
       {!showData && movie && movie.map((el,index) => index<10 && 
         <MovieCard key={el.id} movie={el} />
       )}
       {showData && trendTv && trendTv.map((el,index) => index<10 &&
        <TvCard key={el.id} tvshow={el} />
       )}
    </div>
    </div>
    <div className='popular-movie'>
       <div className='popular-movie-heading'>
        <div className='popular-movie-head'>
          <h1>What's Popular</h1>
          </div>
        <div className='popular-select'>
          <p 
          onClick={handlePopularMovie}
          style={{
                backgroundColor: selectPopular === 'Movie' ? 'white' : 'transparent',
                color: selectPopular === 'Movie' ? 'black' : 'white',
               
              }}>Movie</p>
          <p
          onClick={handlePopularTvShow} 
          style={{
                backgroundColor: selectPopular === 'OnTv' ? 'white' : 'transparent',
                color: selectPopular === 'OnTv' ? 'black' : 'white',
               
              }}>On TV</p>
        </div>
        
       </div>
       <div className='popular-movie-list'>
        <div>      
           {!showPopular && popularMovie && popularMovie.map((el) => {
           return <MovieCard key={el.id} movie={el} />
           })}  
           {showPopular && populartvShow && populartvShow.map((el)=>{
            return <TvCard key={el.id} tvshow={el} />
           })}
            </div>   
       </div>
    </div>
    </>
  )
}

export default Homepage;


