import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../../Redux/Movie/action";
import styled from "styled-components";
import {BiListUl, BiPlay} from "react-icons/bi";
import {AiFillHeart,AiFillStar} from "react-icons/ai";
import {ImBookmark} from "react-icons/im";
import axios from "axios";

const MovieDetailPage = () => {
  const dispatch = useDispatch();
  const movie = useSelector((store) => {
    return store.detailReducer.movieDetail;
  });
  const params = useParams();
  const { id } = params;
  const [director, setDirector] = useState([]);
  const [casting, setCasting] = useState([]);
  const [producer, setProducer] = useState([])

  useEffect(() => {
    dispatch(getMovieDetails(id));
    axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?language=all&api_key=${process.env.REACT_APP_API_KEY}`)
    .then((res) => {
      const credits = res.data.crew;
      const directorData = credits.find((member) => member.job === 'Director');
      const producerData = credits.find((member) => member.job === 'Producer');
        const castingData = credits.find((member) => member.job === 'Casting');
        setDirector(directorData);
        setCasting(castingData);
        setProducer(producerData);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [dispatch, id]);

  console.log(director.name)
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
                    <p>{movie.release_date}</p>
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
                      <li><BiPlay color="white"/> Play Trailer</li>
                    </ul>
                    
                  </div>
                  <div className="movie-tagline">
                    <p>{movie.tagline}</p>
                  </div>
                 </div>
                 <div className="overview-box">
                  <div className="overview-heading">
                    <h2>Overview</h2>
                  </div>
                  <div className="overview">
                    <p>{movie.overview}</p>
                  </div>
                 </div>
                   <div className="crew-members">
                   <div className="director">
                     <h3>{director?.name}</h3>
                      <p>{director?.job}</p>
                   </div>
                   <div className="producer">
                   <h3>{producer?.name}</h3>
                      <p>{producer?.job}</p>
                   </div>
                   <div className="casting">
                   <h3>{casting?.name}</h3>
                      <p>{casting?.job}</p>
                   </div>
              </div>
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
    margin: auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
  }
  .movie-detail-box{
  width:90%;
  height: 90%;
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
 .external-work{
   width: 65%;
   height: auto;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;
   gap: 40px;
 }
 .wishlist{
  width: 100%;
  height: auto;
  margin-top: 20px;
 }
 .wishlist>ul{
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 30px;
 }
 .wishlist>ul>li{
  list-style: none;
  color:#ffff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 18px;
  background-color: rgb(3,37,65);
  cursor: pointer;
 }
 .wishlist>ul>li:last-child{
  width:150px;
  display: flex;
   align-items: center;
   justify-content: center;
   gap: 15px;
   list-style: none;
   border: none;
   background-color: transparent;

 }
 .movie-tagline{
    width: 100%;
    height: auto;
 }
 .movie-tagline>p{
  color: #ffff;
  font-size: 16.5px;
  font-style: Italic;
  font-family: "Source Sans Pro",Arial,sans-serif;
 }
 .overview-box{
  width:100%;
  height: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 15px;
 }
 .overview-heading>h2{
  font-size: 20px;
  font-weight: 600;
  font-family:"Source Sans Pro",Arial,sans-serif;
  color: #ffff;
  display: block;
 }
 .overview{
  width: 100%;
  height: auto;
 }
 .overview>p{
  color: #ffff;
  font-size: 15px;
  font-family:"Source Sans Pro",Arial,sans-serif ;
  font-weight: 500;
 }
 .crew-members{
  width:50% ;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
 }
 .crew-members h3{
  font-size: 15px;
   color: white;
   font-weight: 500;
   font-family:"Source Sans Pro",Arial,sans-serif ;
 }
 .crew-members p{
  color: white;
  font-weight: 500;
 }
 .director, .producer, .casting{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
   
 }
`;


const StyledDetailsSection = styled.div`
width: 100%;
  height: 100%;
  background-image: linear-gradient( to bottom right, rgba(31.5, 10.5, 10.5, 1), rgba(31.5, 10.5, 10.5, 0.84)), url(${(props) => `https://image.tmdb.org/t/p/w500${props.backgroundImage}`});
  background-size: cover;
  background-repeat: no-repeat;
`

