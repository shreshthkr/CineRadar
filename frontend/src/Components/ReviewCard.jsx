import React from 'react'
import styled from 'styled-components';
import {AiFillStar} from "react-icons/ai";
import Avatar from "./user.png";

const ReviewCard = ({review}) => {
  
    const rDate = review.created_at;
    const changeinto = { year: 'numeric', month: 'long', day: 'numeric' };
    const reviewDate = new Date(rDate).toLocaleDateString(undefined, changeinto);





  return (
    <REVIEW>
      <div className='people-info'>
        <div className='users-avatar'>
            {review.author_details.avatar_path ? <img src={`https://image.tmdb.org/t/p/w500${review.author_details.avatar_path}` }alt={review.author} /> : 
            <img src={Avatar} alt='No-Avatar' />
            }
        </div>
        <div className='users-info'>
            <div className='users-name'>
                <h2>A review by {review.author}</h2>
            </div>
            <div className='review-date'>
                <div>
                    <p><AiFillStar />{review.author_details.rating}.0</p>
                </div>
                <p>Written by {review.author} on {reviewDate}</p>
            </div>
        </div>
      </div>
      <div className='content'>
        <p>{review.content}</p>
      </div>
    </REVIEW>
  )
}

export default ReviewCard;


const REVIEW = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction:column;
    align-items: flex-start;
    justify-content:center;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    .people-info{
      width: 96%;
      height: 60px;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 20px;
    }
    .users-avatar{
     width:45px;
     height:45px;
     border-radius: 50%;

    }
    .users-avatar>img{
        width:100%;
        height:100%;
        border-radius: 50%;
    }
    .users-info{

    }
    .users-name>h2{
        font-family: "Source Sans Pro", Arial, sans-serif;
        font-weight: 700;
        font-size:15px;
    }
    .review-date{
        display: flex;
        align-items: center;
        justify-content: center;
        gap:8px;
    }
    .review-date>div{
        width: 60px;
        border-radius: 24px;
        background-color: black;
    }
    .review-date>div>p{
        display:flex;
        align-items: center;
        justify-content: center;
        gap:5px;
        color: #ffff;
        font-family: "Source Sans Pro", Arial, sans-serif;
      
    }
    .review-date>div+p{
        font-family: "Source Sans Pro", Arial, sans-serif;
        font-size: 15px;
        font-weight:500;
    }
    .content{
        width: 96%;
        height: auto;
        margin: auto;
    }
    .content>p{
        font-size: 14px;
        display: -webkit-box;
  -webkit-line-clamp: 4; 
  -webkit-box-orient: vertical;
 overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  font-family: "Source Sans Pro", Arial, sans-serif;
    }
`