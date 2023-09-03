import React from 'react'
import "./MovieCard.css";



const MovieCard = () => {
  return (
    <div className='movie-box'>
      <div className='movie-poster'>
        <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg" alt="Indiana Jones" />
      </div>
      <div className='movie-info'>
         <div className='movie-title'>
          <p>Indiana Jones and the Dial of Destiny</p>
         </div>
         <div className='movie-release-date'>
          <p>28 Jun 2023</p>
         </div>
      </div>
    </div>
  )
}

export default MovieCard;
