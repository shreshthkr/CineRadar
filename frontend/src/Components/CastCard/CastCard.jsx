import React from "react";
import styled from "styled-components";

const CastCard = ({ cast }) => {
  return (
    <CASTCARD>
      <div className="cast-iamge">
        <img
          src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
          alt={cast.name}
        />
      </div>
      <div className="cast-name">
        <p>{cast.name}</p>
        <p>{cast.character}</p>
      </div>
    </CASTCARD>
  );
};

export default CastCard;

const CASTCARD = styled.div`
  width: 135px;
  height: 248px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0px;
  flex: 0 0 auto;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 8px;
  cursor: pointer;
  
  .cast-iamge{
    width: 100%;
    height: 190px;
  }
  .cast-iamge>img{
    width: 100%;
    height: 100%;
    border-top-left-radius:8px;
    border-top-right-radius:8px;
  }
  .cast-name{
    width: 93%;
    height: 70px;
    margin: auto;
    display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  }
  .cast-name p:first-child{
   font-size: 13px;
   width: auto;
   height: auto;
   font-weight: 700;
   overflow-wrap: break-word;
   font-family:"Source Sans Pro",Arial,sans-serif ;
  }
  .cast-name p:last-child{
    font-size: 12.5px;
   font-weight: 500;
   font-family:"Source Sans Pro",Arial,sans-serif ;
  }

`;
