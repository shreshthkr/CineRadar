import React, { useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import MovieCard from '../../Components/MovieCard';
import "./HomePage.css";
import { getMovie } from '../../Redux/Movie/action';



const Homepage = () => {

const dispatch = useDispatch();
const movie = useSelector((store) => {
  return store.movieReducer
})

useEffect(() => {
     dispatch(getMovie());
},[dispatch])

console.log(movie);
  return (
    <>
    <div className='search'>

    </div>
    <div className='trending'>
     <MovieCard />
    </div>
    </>
  )
}

export default Homepage;


/*
axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=2fd01d3e0c9759cbc437d0a1c9de7179`)
     .then(res => setMovie(res.data.results))
     .catch(err => console.log(err))
*/