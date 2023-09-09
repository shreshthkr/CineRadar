import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../../Redux/Movie/action";
import styled from "styled-components";

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

  return (
    <DIV>
      <div className="movie-details">
        <div className="movie-info">
          <div className="movie-poster">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title}
            />
          </div>
          <div className="movie-tile">
            <StyledDetailsSection backgroundImage={movie.backdrop_path}>
              <div className="movie-title">
                <h1>{movie.original_title}</h1>
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
    
    
  }
  .movie-poster {
    width: 18%;
    height: 80%;
    position: relative;
    left: 40px;

  }
  .movie-poster>img{
    width: 100%;
    height: 100%;

  }
  .movie-tile {
    width: 80%;
    height: 100%;
  }
`;

//backgroundImage={movie.backdrop_path}
const StyledDetailsSection = styled.div`
width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom right, rgba(31.5, 10.5, 10.5, 1), rgba(31.5, 10.5, 10.5, 0.84)), url(${(props) => `https://image.tmdb.org/t/p/w500${props.backgroundImage}`});
  background-size: cover;
  background-repeat: no-repeat;
  border: none;


 .movie-title{
  border:2px solid white;
  
 }

`

