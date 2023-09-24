import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getMovieCast, getMovieDetails } from "../../../Redux/Movie/action";
import styled from "styled-components";
import { BiListUl, BiPlay } from "react-icons/bi";
import { BsLink } from "react-icons/bs";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { ImBookmark } from "react-icons/im";
import { FaArrowRight } from "react-icons/fa6";
import axios from "axios";
import { Tooltip } from "@chakra-ui/react";
import CastCard from "../../../Components/CastCard/CastCard";
import ReviewCard from "../../../Components/ReviewCard";

const MovieDetailPage = () => {
  const dispatch = useDispatch();
  const movie = useSelector((store) => {
    return store.detailReducer.movieDetail;
  });
  const cast = useSelector((store) => {
    return store.castReducer.cast;
  });
  const params = useParams();
  const { id } = params;
  const [director, setDirector] = useState([]);
  const [casting, setCasting] = useState([]);
  const [producer, setProducer] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    dispatch(getMovieDetails(id));
    dispatch(getMovieCast(id));
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?language=all&api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        const credits = res.data.crew;
        const directorData = credits.find(
          (member) => member.job === "Director"
        );
        const producerData = credits.find(
          (member) => member.job === "Producer"
        );
        const castingData = credits.find((member) => member.job === "Casting");
        setDirector(directorData);
        setCasting(castingData);
        setProducer(producerData);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/reviews?language=all&page=1&api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        setReviews(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch, id]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/keywords?language=all&api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setKeywords(res.data.keywords);
        console.log(res.data.keywords);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //  console.log(movie.budget)
  const year = movie?.release_date?.split("-")[0];
  const genres = movie.genres?.map((genre) => genre.name).join(", ");
  const runtimeHours = Math.floor(movie.runtime / 60);
  const runtimeMinutes = movie.runtime % 60;
  const runtimeFormatted = `${runtimeHours}h ${runtimeMinutes}m`;

  const budget = movie?.budget
    ? movie.budget.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    : "-";

  const revenue = movie?.revenue
    ? movie.revenue.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    : "-";

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
                        <li>
                          <BiListUl />
                        </li>
                        <li>
                          <AiFillHeart />
                        </li>
                        <li>
                          <ImBookmark />
                        </li>
                        <li>
                          <AiFillStar />
                        </li>
                        <li>
                          <BiPlay color="white" /> Play Trailer
                        </li>
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
      <CAST>
        <div className="info-side">
          <div className="cast-details">
            <div className="casts">
              <div className="cast-heading">
                <h1>Top Billed Cast</h1>
              </div>
              <div className="movie-cast1">
                {cast &&
                  cast?.map(
                    (el, index) =>
                      index < 10 && <CastCard key={el.id} cast={el} />
                  )}
                <div className="view-more">
                  <p>
                    View More <FaArrowRight fontWeight={"600"} />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="review-section">
            <div className="review-heading">
              <h1>Reviews</h1>
            </div>
            <div className="movie-reviews">
              {reviews.length > 0 ? (
                reviews?.map(
                  (e, index) =>
                    index < 1 && <ReviewCard key={e.id} review={e} />
                )
              ) : (
                <p className="no-review">
                  We don't have any reviews for {movie.title}
                </p>
              )}
            </div>
            <div className="all-review">
              {reviews.length > 0 && (
                <p>
                  Read all Reviews <FaArrowRight fontWeight={"600"} />
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="cast-sidebar">
          <div>
            <div className="movie-social-lin">
              <Link to={movie.homepage}>
                <BsLink fontSize={"30px"} fontWeight={700} cursor={"pointer"} />
              </Link>
            </div>
            <hr />
            <div className="movie-side-info">
              <div className="movie-status">
                <h2>Status</h2>
                <p>{movie.status}</p>
              </div>
              <div className="movie-language">
                <h2>Original Language</h2>
                {movie.spoken_languages?.map((language) => (
                  <p key={language.iso_639_1}>{language.english_name}</p>
                ))}
              </div>
              <div className="movie-status">
                <h2>Budget</h2>
                <p>${budget}</p>
              </div>
              <div className="movie-status">
                <h2>Revenue</h2>
                <p>${revenue}</p>
              </div>
            </div>
            <div className="movie-keywords">
              <div>
                <h2>Keywords</h2>
                
              </div>

              <div className="keywords">
                {keywords?.map((el) => (
                  <p key={el.id}>{el.name}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CAST>
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
  .movie-poster1 {
    width: 350px;
    height: 450px;
    position: relative;
    left: 40px;
  }
  .movie-poster1 > img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  .movie-tile {
    width: 85%;
    height: 100%;
  }
  .info-container {
    width: 90%;
    margin: auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .movie-detail-box {
    width: 90%;
    height: 90%;
    margin-top: 35px;
  }
  .title {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
  }
  .title > h1 {
    font-size: 34px;
    font-weight: 700;
    color: #ffff;
    font-family: "Source Sans Pro", Arial, sans-serif;
  }
  .title > h1 + h1 {
    font-weight: 500;
  }
  .movie-stats {
    width: 60%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
  }
  .movie-stats p {
    color: #ffff;
  }
  .movie-stats > p:first-child {
    border: 1px solid #ffff;
    height: 23px;
    width: 23px;
    text-align: center;
    font-weight: 600;
  }
  .movie-stats ul {
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
  }
  .movie-stats ul li {
    color: #ffff;
  }
  .external-work {
    width: 65%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 40px;
  }
  .wishlist {
    width: 100%;
    height: auto;
    margin-top: 20px;
  }
  .wishlist > ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
  }
  .wishlist > ul > li {
    list-style: none;
    color: #ffff;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    padding: 18px;
    background-color: rgb(3, 37, 65);
    cursor: pointer;
  }
  .wishlist > ul > li:last-child {
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    list-style: none;
    border: none;
    background-color: transparent;
  }
  .movie-tagline {
    width: 100%;
    height: auto;
  }
  .movie-tagline > p {
    color: #ffff;
    font-size: 16.5px;
    font-style: Italic;
    font-family: "Source Sans Pro", Arial, sans-serif;
  }
  .overview-box {
    width: 100%;
    height: auto;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 15px;
  }
  .overview-heading > h2 {
    font-size: 20px;
    font-weight: 600;
    font-family: "Source Sans Pro", Arial, sans-serif;
    color: #ffff;
    display: block;
  }
  .overview {
    width: 100%;
    height: auto;
  }
  .overview > p {
    color: #ffff;
    font-size: 15px;
    font-family: "Source Sans Pro", Arial, sans-serif;
    font-weight: 500;
  }
  .crew-members {
    width: 50%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .crew-members h3 {
    font-size: 15px;
    color: white;
    font-weight: 500;
    font-family: "Source Sans Pro", Arial, sans-serif;
  }
  .crew-members p {
    color: white;
    font-weight: 500;
  }
  .director,
  .producer,
  .casting {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  
`;

const StyledDetailsSection = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      to bottom right,
      rgba(25.5, 8.5, 8.5, 0.9),
      rgba(25.5, 8.5, 8.5, 0.7)
    ),
    url(${(props) => `https://image.tmdb.org/t/p/w500${props.backgroundImage}`});
  background-size: cover;
  background-repeat: no-repeat;
`;

const CAST = styled.div`
  width: 95%;
  height: 700px;
  margin: auto;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .info-side {
    width: 78%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .cast-details {
    width: 100%;
    height: 350px;
  }
 
  .casts {
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }
  .cast-heading {
    width: 100%;
    height: 30px;
  }
  .cast-heading > h1 {
    font-size: 21px;
    font-weight: 600;
    font-family: "Source Sans Pro", Arial, sans-serif;
  }
  .movie-cast1 {
    width: 100%;
    height: 260px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 18px;
    overflow-x: auto;
    overflow-y: hidden;
    flex-wrap: nowrap;
    white-space: nowrap;
  }

  .movie-cast1::-webkit-scrollbar {
    height: 8px;
  }

  .movie-cast1::-webkit-scrollbar-track {
    background-color: rgba(255, 255, 255, 0.768);
  }

  .movie-cast1::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background: gray;
  }
  .view-more {
    width: 135px;
    height: 250px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
  }
  .view-more > p {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-family: "Source Sans Pro", Arial, sans-serif;
    cursor: pointer;
  }
  .review-section {
    width: 100%;
    height: auto;
    margin-top: 20px;
  }
  .review-heading {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  }
  .review-heading > h1 {
    font-size: 18px;
    font-weight: 700;
    font-family: "Source Sans Pro", Arial, sans-serif;
  }
  .movie-reviews {
    width: 100%;
    height: 180px;
  }
  .all-review {
    width: 95%;
    height: 50px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .all-review > p {
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
  }
  .no-review {
    font-size: 18px;
    font-weight: 600;
    font-family: "Source Sans Pro", Arial, sans-serif;
  }
  .cast-sidebar {
    width: 22%;
    height: 100%;
    display:flex;
    align-items:flex-start;
    justify-content:flex-end;
  }
  .cast-sidebar>div{
     width:95%;
     height:95%;
    

     
  }
  
  .movie-social-lin{
     width:95%;
     height:50px;
     margin:auto;
     background-color:#ffff;
  }
  .movie-side-info{
     width:95;
     height:auto;
     margin:auto;
     display:flex;
     flex-direction: column;
     align-items:flex-start;

  }
  .movie-status{
    height:60px;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
  }
  .movie-status>h2{
     font-weight:600;
     font-size:17px;
     font-family: "Source Sans Pro", Arial, sans-serif;
  }
  .movie-status>p{
    font-size:16px;
    font-family: "Source Sans Pro", Arial, sans-serif;
  }
  .movie-language{
    height:auto;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
  }
  .movie-language>h2{
     font-weight:600;
     font-size:17px;
     font-family: "Source Sans Pro", Arial, sans-serif;
  }
  .movie-language>p{
    font-size:16px;
    font-family: "Source Sans Pro", Arial, sans-serif;
  }
  .movie-keywords{
    height:auto;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
  }
  .movie-keywords>div>h2{
    font-weight:600;
    font-size:17px;
    font-family: "Source Sans Pro", Arial, sans-serif;
  }
  .keywords{
    width:85%;
    height:auto;
    display:flex;
    flex-wrap:wrap;
    gap:5px;
    
  }
  .keywords>p{
    padding:2px;
    border:1px solid rgb(216,216,216);
    border-radius:5px;
    font-size:15px;
    font-family: "Source Sans Pro", Arial, sans-serif;
    background-color:rgb(229,229,229);
  }
  .keywords>p:hover{
    cursor:pointer;
  }
`;
