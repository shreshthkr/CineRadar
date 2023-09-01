import React from 'react'
import {Routes, Route} from "react-router-dom"
import Homepage from '../Pages/Homepage';
import Movies from '../Pages/Movies';
import TvShows from '../Pages/TvShows';
import Login from '../Pages/Login';
import Favourite from '../Pages/Favourite';
import DetailsPage from "../Pages/DetailsPage"
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
