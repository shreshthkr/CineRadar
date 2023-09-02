import React, { useEffect, useState } from 'react'
import axios from "axios";
import MovieCard from '../../Components/MovieCard';
import "./HomePage.css";


const Homepage = () => {

const [movie, setMovie] = useState([]);

useEffect(() => {
     axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=2fd01d3e0c9759cbc437d0a1c9de7179`)
     .then(res => setMovie(res.data.results))
     .catch(err => console.log(err))
},[])

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
