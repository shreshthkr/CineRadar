import React from 'react'
import {Routes, Route} from "react-router-dom"
import DetailsPage from '../Pages/DetailsPage/DetailsPage';
import Favourite from '../Pages/Favourite/Favourite';
import Homepage from '../Pages/HomePage/Homepage';
import Login from '../Pages/Login/Login';
import Movies from '../Pages/Movies/Movies';
import TvShows from '../Pages/TvShows/TvShows';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/movies' element={<Movies />} />
      <Route path='/movies/:id' element={<DetailsPage />}/>
      <Route path='/tvshows' element={<TvShows />} />
      <Route path='/tvshows/:id' element={<DetailsPage />}/>
      <Route path='/login' element={<Login />} />
      <Route path='/favourite' element={<Favourite />} />
    </Routes>
  )
}

export default AllRoutes;
