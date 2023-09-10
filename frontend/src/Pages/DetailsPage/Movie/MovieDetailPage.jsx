import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../../Redux/Movie/action";
import styled from "styled-components";
import {BiListUl} from "react-icons/bi";
import {AiFillHeart,AiFillStar} from "react-icons/ai";
import {ImBookmark} from "react-icons/im";
const MovieDetailPage = () => {
  const dispatch = useDispatch();
  const movie = useSelector((store) => {
    return store.detailReducer.movieDetail;
  });
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    dispatch(getMovieDetails(id));
  }, [dispatch, id]);

  const year = movie?.release_date?.split("-")[0];
  const genres = movie.genres?.map((genre) => genre.name).join(", ");
  const runtimeHours = Math.floor(movie.runtime / 60);
  const runtimeMinutes = movie.runtime % 60;
  const runtimeFormatted = `${runtimeHours}h ${runtimeMinutes}m`;
  return (
    <DIV>
      <div className="movie-details">
        <div className="movie-info">
          <div className="movie-poster1">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title}
            
            />
          </div>
          <div className="movie-tile">
            <StyledDetailsSection backgroundImage={movie.backdrop_path}>
              <div className="info-container">
              <div className="movie-detail-box">
                 <div className="movie-title">
                  <div className="title">
                    <h1>{movie.title} </h1>
                    <h1>({year})</h1>
                  </div>
                  <div className="movie-stats">
                    {movie.adult ? <p>A</p> : <p>R</p>}
                    <p>{movie.release_date} ({movie.production_countries[0].iso_3166_1})</p>
                    <ul>
                      <li>{genres}</li>
                      <li>{runtimeFormatted}</li>
                    </ul>
                  </div>
                 </div>
                 <div className="external-work">
                  <div className="wishlist">
                    <ul>
                      <li><BiListUl /></li>
                      <li><AiFillHeart /></li>
                      <li><ImBookmark /></li>
                      <li><AiFillStar /></li>
                    </ul>
                    
                  </div>
                  <div></div>
                 </div>
                 <div className="overview">
                  <div></div>
                  <div></div>
                 </div>
              </div>
              <div className="directors">

              </div>
              </div>
            </StyledDetailsSection>
          </div>
        </div>
      </div>
    </DIV>
  );
};

export default MovieDetailPage;

const DIV = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 85px;

  .movie-details {
    width: 100%;
    height: 100%;
    margin: auto;
    background-color: rgb(32 11 11);
  }
  .movie-info {
    width: 100%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 30px;
    
  }
  .movie-poster1{
    width: 350px;
    height: 450px;
    position: relative;
    left: 40px;
  }
  .movie-poster1>img{
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  .movie-tile {
    width: 85%;
    height: 100%;
  }
  .info-container{
    width: 90%;
    border:2px solid yellow;
    margin: auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .movie-detail-box{
  width:90%;
  height: 90%;
  border:2px solid white;
  margin-top: 35px;

  
 }
 .title{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px
 }
 .title>h1{
  font-size: 34px;
  font-weight: 700;
  color: #ffff;
  font-family: "Source Sans Pro",Arial,sans-serif;
 }
 .title>h1 + h1{
  font-weight: 500;
 }
 .movie-stats{
  width:60%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
 }
 .movie-stats p{
    color: #ffff;
 }
 .movie-stats>p:first-child{
   border: 1px solid #ffff;
   height: 23px;
   width: 23px;
   text-align: center;
   font-weight: 600;
 }
 .movie-stats ul{
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
 }
 .movie-stats ul li{
  color: #ffff;
 }
`;

//backgroundImage={movie.backdrop_path}
const StyledDetailsSection = styled.div`
width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom right, rgba(31.5, 10.5, 10.5, 1), rgba(31.5, 10.5, 10.5, 0.84)), url(${(props) => `https://image.tmdb.org/t/p/w500${props.backgroundImage}`});
  background-size: cover;
  background-repeat: no-repeat;
`

